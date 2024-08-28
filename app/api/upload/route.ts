import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

type ResponseData = {
  message: string;
};

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: NextRequest) {
  try {
    const { path } = await request.json();
    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: true,
      transformation: [
        {
          width: 1000,
          height: 1000,
          crop: "fill", // Changes from "scale" to "fill"
          gravity: "center", // Ensures the central part of the image is kept
        },
      ],
    };

    const result = await cloudinary.uploader.upload(path, options);

    return NextResponse.json({ data: result }, { status: 200 });
  } catch (err: any) {
    console.error("Error uploading image:", err);
    return NextResponse.json(
      { message: "Error uploading image", error: err.message },
      { status: 500 }
    );
  }
}
