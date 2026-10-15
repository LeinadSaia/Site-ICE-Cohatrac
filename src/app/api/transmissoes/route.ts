import { NextResponse } from "next/server";
import { CHURCH_DATA, SermonVideo } from "@/data/churchData";

const CHANNEL_ID = "UC9FniPUm7v__YPjeA5NOc-Q";

export async function GET() {
  try {
    const streamsUrl = `https://www.youtube.com/channel/${CHANNEL_ID}/streams`;
    const res = await fetch(streamsUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
      },
      next: { revalidate: 1800 },
    });

    if (!res.ok) {
      return NextResponse.json({
        isLive: false,
        videos: CHURCH_DATA.sermons,
        source: "fallback",
      });
    }

    const html = await res.text();

    // 1. Detectar se há transmissão ao vivo no momento
    const isLiveNow =
      html.includes('"style":"LIVE"') ||
      html.includes('"BADGE_STYLE_TYPE_LIVE_NOW"') ||
      html.includes('{"text":"AO VIVO"}') ||
      html.includes('{"text":"AO VIVO AGORA"}');

    // 2. Extrair videoIds das transmissões
    const idMatches = html.matchAll(/"url":"\/watch\?v=([a-zA-Z0-9_-]{11})"/g);
    const seen = new Set<string>();
    const videoIds: string[] = [];

    for (const match of idMatches) {
      const vid = match[1];
      if (!seen.has(vid)) {
        seen.add(vid);
        videoIds.push(vid);
        if (videoIds.length >= 6) break;
      }
    }

    if (videoIds.length === 0) {
      return NextResponse.json({
        isLive: isLiveNow,
        videos: CHURCH_DATA.sermons,
        source: "fallback",
      });
    }

    // 3. Obter títulos oficiais via oEmbed oficial do YouTube
    const fetchedVideos = await Promise.all(
      videoIds.map(async (vid, index) => {
        try {
          const oembedRes = await fetch(
            `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${vid}&format=json`,
            { next: { revalidate: 3600 } }
          );
          if (oembedRes.ok) {
            const data = await oembedRes.json();
            return {
              id: String(index + 1),
              title: data.title || "Culto Dominical - ICE Cohatrac",
              preacher: "ICE Cohatrac Ao Vivo",
              date: index === 0 ? (isLiveNow ? "Ao Vivo Agora" : "Última Transmissão") : "Transmissão",
              youtubeId: vid,
            } as SermonVideo;
          }
        } catch {
          // fallback silencioso
        }

        const fallbackMatch = CHURCH_DATA.sermons.find((s) => s.youtubeId === vid);
        return {
          id: String(index + 1),
          title: fallbackMatch?.title || `Culto Dominical - ICE Cohatrac (${vid})`,
          preacher: "ICE Cohatrac Ao Vivo",
          date: index === 0 ? (isLiveNow ? "Ao Vivo Agora" : "Última Transmissão") : "Transmissão",
          youtubeId: vid,
        } as SermonVideo;
      })
    );

    return NextResponse.json({
      isLive: isLiveNow,
      videos: fetchedVideos,
      source: "youtube_live",
    });
  } catch (error) {
    console.error("Erro ao buscar transmissões do YouTube:", error);
    return NextResponse.json({
      isLive: false,
      videos: CHURCH_DATA.sermons,
      source: "fallback",
    });
  }
}
