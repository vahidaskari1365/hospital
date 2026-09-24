import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const news = await db.newsArticle.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
      take: 20,
    });
    return NextResponse.json({ news });
  } catch {
    return NextResponse.json({ error: "خطا" }, { status: 500 });
  }
}
