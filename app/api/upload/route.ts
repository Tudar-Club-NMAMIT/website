import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
type ResponseData = {
  message: string;
};
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: NextRequest, response: NextResponse) {
  const { path } = await request.json();

  try {
    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: true,
      Transformation: [{ width: 1000, height: 752, crop: "scale" }],
    };
    const result = await cloudinary.uploader.upload(path, options);
    console.log(result);
    return NextResponse.json({ data: result });
  } catch (err) {
    console.log(err);
  }
}
