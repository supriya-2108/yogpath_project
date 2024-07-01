import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    if (!response.ok) {
      return NextResponse.json(
        {
          message: "Failed to fetch data",
          status: response.status,
        },
        { status: response.status }
      );
    }
    const data = await response.json();
    const limitedData = data.slice(0, 10);
    return NextResponse.json({
      message: "Data received",
      data: limitedData,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "An error occurred",
        error: error,
      },
      { status: 500 }
    );
  }
}
