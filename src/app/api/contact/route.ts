import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, content } = body;

    if (!name || !email || !phone || !subject || !content) {
      return NextResponse.json(
        { error: "تمام فیلدها الزامی است" },
        { status: 400 }
      );
    }

    const message = await db.message.create({
      data: {
        name,
        email,
        phone,
        subject,
        content,
        status: "unread",
      },
    });

    return NextResponse.json({
      success: true,
      messageId: message.id,
      message: "پیام شما با موفقیت ارسال شد",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "خطا در ارسال پیام" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const messages = await db.message.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
    });
    return NextResponse.json({ messages });
  } catch {
    return NextResponse.json({ error: "خطا" }, { status: 500 });
  }
}
