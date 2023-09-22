import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/shared/auth";

export async function GET() {
    const session = await getServerSession(authOptions);
    return NextResponse.json({name: session?.user?.name ?? "Not logged in"})
}