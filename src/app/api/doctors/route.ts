import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const doctors = await db.doctor.findMany({
      include: { department: true },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ doctors });
  } catch {
    return NextResponse.json({ error: "خطا" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const doctor = await db.doctor.create({
      data: {
        slug: body.slug,
        name: body.name,
        title: body.title,
        specialty: body.specialty,
        departmentId: body.departmentId,
        bio: body.bio,
        experience: body.experience || 0,
        rating: body.rating || 5.0,
        available: body.available ?? true,
      },
    });
    return NextResponse.json({ doctor });
  } catch (error) {
    return NextResponse.json({ error: "خطا در ایجاد پزشک" }, { status: 500 });
  }
}
