import { NextResponse } from "next/server";
import { PrismaClient } from "@repo/db";
export default async function handler(req, res) {
  const prisma = new PrismaClient();
  const users = await prisma.user.create({});
  return NextResponse.json({ name: "John Doe" });
}
