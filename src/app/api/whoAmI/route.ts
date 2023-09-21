import { getServerSession } from "next-auth";
import { NextServer } from "next/dist/server/next";

import { authOptions } from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";

export async function GET() {
    const session = await getServerSession(authOptions);
    return NextResponse.json({name: session?.user?.name ?? "Not logged in"})
}