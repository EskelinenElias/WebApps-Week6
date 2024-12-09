import { Document, Schema, model } from "mongoose";

interface IOffer extends Document {
  title: string;
  price: number;
  description: string;
  imageId?: string; 
}

const OfferSchema = new Schema<IOffer>({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
});

const Offer = model<IOffer>("offers", OfferSchema);

export default Offer;

// eof
