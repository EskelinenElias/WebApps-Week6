import { Schema, model } from "mongoose";

interface IOffer {
  title: string;
  price: number;
  description: string;
}

const OfferSchema = new Schema<IOffer>({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
});

const Offer = model<IOffer>("Offer", OfferSchema);

export default Offer;
export { Offer };

// eof
