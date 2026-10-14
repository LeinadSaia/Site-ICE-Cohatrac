import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, prayerReason, shareInTuesdayMeeting } = body;

    if (!name || !prayerReason) {
      return NextResponse.json(
        { error: "Por favor, preencha o seu nome e o motivo da oração." },
        { status: 400 }
      );
    }

    // Em produção, isso pode ser integrado com envio para banco de dados, e-mail ou webhook de pastoral
    const responsePayload = {
      success: true,
      message: "Seu pedido de oração foi recebido com muito amor e temor a Deus. Nossa equipe pastoral e grupo de intercessão estarão orando por sua vida.",
      data: {
        id: `oracao_${Date.now()}`,
        name: String(name).trim(),
        phone: phone ? String(phone).trim() : null,
        prayerReason: String(prayerReason).trim(),
        shareInTuesdayMeeting: Boolean(shareInTuesdayMeeting),
        submittedAt: new Date().toISOString()
      }
    };

    return NextResponse.json(responsePayload, { status: 200 });
  } catch (error) {
    console.error("Erro ao registrar pedido de oração:", error);
    return NextResponse.json(
      { error: "Ocorreu um erro ao processar seu pedido. Tente novamente mais tarde." },
      { status: 500 }
    );
  }
}
