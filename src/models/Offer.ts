import { Schema, model } from "mongoose";

interface IOffer {
  title: string;
  price: number; 
  description: string; 
  image: string; 
}

const OfferSchema = new Schema<IOffer>({
  title: { type: String, required: true },
  price: { type: Number, required: true }, 
  description: { type: String, required: true },
  image: { type: String, required: false }
});

const Offer = model<IOffer>("Offer", OfferSchema);

export default Offer;
export { Offer };
