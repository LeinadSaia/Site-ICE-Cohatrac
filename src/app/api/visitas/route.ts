import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, serviceTime, withFamily } = body;

    if (!name || !serviceTime) {
      return NextResponse.json(
        { error: "Por favor, preencha o seu nome e o culto que pretende visitar." },
        { status: 400 }
      );
    }

    const responsePayload = {
      success: true,
      message: "Que bênção! Será uma alegria imensa receber você e seus familiares na ICE Cohatrac. Nossa igreja está de portas e corações abertos!",
      data: {
        id: `visita_${Date.now()}`,
        name: String(name).trim(),
        phone: phone ? String(phone).trim() : null,
        serviceTime: String(serviceTime).trim(),
        withFamily: Boolean(withFamily),
        registeredAt: new Date().toISOString()
      }
    };

    return NextResponse.json(responsePayload, { status: 200 });
  } catch (error) {
    console.error("Erro ao registrar visita:", error);
    return NextResponse.json(
      { error: "Ocorreu um erro ao registrar sua visita. Tente novamente mais tarde." },
      { status: 500 }
    );
  }
}
