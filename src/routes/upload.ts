import { Router, Request, Response } from "express";
import { Offer } from "../models/Offer";

const router = Router();

// POST route to upload an offer
router.post("/", async (req: Request, res: Response) => {
  // Parse request
  const title: string = req.body.title;
  const price: number = req.body.price;
  const description: string = req.body.description;
  const image: string = req.body.string;

  // Validate request
  if (!title) {
    console.log("Invalid request; Offer must have a title");
    res
      .status(400)
      .json({ message: "Invalid request; Offer must have a title" });
    return;
  }
  if (!(price > 0)) {
    console.log("Invalid request; Offer price must be greater than 0");
    res
      .status(400)
      .json({ message: "Invalid request; Offer price must be greater than 0" });
    return;
  }
  if (!description) {
    console.log("Invalid request; Offer must have a description");
    res
      .status(400)
      .json({ message: "Invalid request; Offer must have a description" });
    return;
  }
  // Check if an offer exists with the same title
  if (await Offer.findOne({ title: title })) {
    // Offer with the same title already exists
    console.log(`Can't add offer; Offer with title ${title} already exists`);
    res.status(400).json({
      message: `Can't add offer; Offer with title ${title} already exists`,
    });
    return;
  }

  // Add new offer
  const newOffer = new Offer({
    title: title,
    price: price,
    description: description,
    image: image,
  });

  // Save offer
  newOffer.save();
  res.status(201).json(`Added offer '${title}'`);
});

export default router;

// eof
