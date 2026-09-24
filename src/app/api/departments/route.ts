import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const departments = await db.department.findMany({
      include: { doctors: true },
    });
    return NextResponse.json({ departments });
  } catch {
    return NextResponse.json({ error: "خطا" }, { status: 500 });
  }
}
