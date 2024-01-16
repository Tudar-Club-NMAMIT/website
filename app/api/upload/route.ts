import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
type ResponseData = {
  message: string;
};
cloudinary.config({
  cloud_name: "deax1ssmv",
  api_key: "782763488224328",
  api_secret: "ghLKmmoUmfhCgORQdKn09xrmr4A",
});
export const config = {
  api: {
    bodyParser: {
      sizeLimit: "8mb", // Set desired value here
    },
  },
};
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
