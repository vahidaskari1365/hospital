import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, nationalId, department, doctor, date, time, notes } = body;

    if (!name || !phone || !date) {
      return NextResponse.json(
        { error: "نام، تلفن و تاریخ الزامی است" },
        { status: 400 }
      );
    }

    // Find or create a guest user
    let user = await db.user.findFirst({
      where: { OR: [{ phone }, ...(email ? [{ email }] : [])] },
    });

    if (!user) {
      user = await db.user.create({
        data: {
          name,
          phone,
          email: email || `guest_${phone}@shafanovin.local`,
          nationalId,
          role: "patient",
        },
      });
    }

    // Find doctor by slug or pick first available
    let doctorRecord = null;
    if (doctor) {
      doctorRecord = await db.doctor.findFirst({ where: { slug: doctor } });
    }
    if (!doctorRecord) {
      doctorRecord = await db.doctor.findFirst();
    }

    if (!doctorRecord) {
      doctorRecord = await db.doctor.create({
        data: {
          slug: "general-practitioner",
          name: "پزشک عمومی",
          title: "پزشک عمومی",
        },
      });
    }

    // Combine date + time
    const timeStr = time || "09:00";
    const appointmentDate = new Date(`${date}T${timeStr}:00`);

    const appointment = await db.appointment.create({
      data: {
        userId: user.id,
        doctorId: doctorRecord.id,
        date: appointmentDate,
        time: time || "۰۹:۰۰",
        status: "pending",
        notes: notes || `بخش: ${department || "نامشخص"}`,
      },
      include: {
        user: true,
        doctor: true,
      },
    });

    return NextResponse.json({
      success: true,
      appointmentId: appointment.id,
      message: "نوبت شما با موفقیت ثبت شد",
    });
  } catch (error) {
    console.error("Appointment creation error:", error);
    return NextResponse.json(
      { error: "خطا در ثبت نوبت. لطفاً مجدداً تلاش کنید." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const appointments = await db.appointment.findMany({
      include: {
        user: true,
        doctor: true,
      },
      orderBy: { createdAt: "desc" },
      take: 50,
    });
    return NextResponse.json({ appointments });
  } catch {
    return NextResponse.json({ error: "خطا در دریافت نوبت‌ها" }, { status: 500 });
  }
}
