import { Types, Document, Schema, model } from "mongoose";

interface IImage extends Document {
  filename: string;
  path: number;
  _id: Types.ObjectId; 
}

const ImageSchema = new Schema<IImage>({
  filename: { type: String, required: true },
  path: { type: Number, required: true },
});

const Image = model<IImage>("images", ImageSchema);

export { Image, IImage };

// eof
