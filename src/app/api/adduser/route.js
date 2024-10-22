// app/api/some-endpoint/route.ts

import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email, name, image } = await req.json();
    console.log("User data received:", { email, name, image });

    // Perform any operations you need with the user data (e.g., store in a DB)
    
    return NextResponse.json({ message: "User data processed successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error processing user data:", error);
    return NextResponse.json({ message: "Failed to process user data" }, { status: 500 });
  }
}
