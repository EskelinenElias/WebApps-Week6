import { Router, Request, Response } from "express";
import Offer from "../models/Offer";
import { Image, IImage } from "../models/Image";
import upload from "../config/multer";

const router = Router();

// POST route to upload an offer
router.post("/", upload.single("image"), async (req: Request, res: Response) => {
  try {
    // Parse request
    const { title, price, description } = req.body;
    const file = req.file;
    
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
    
    // Check if image file was included in the request
    let imageId: any;
    if (file) {
      
      // Create new image
      const newImage = new Image({
        filename: file.filename,
        path: `public/images/${file.filename}`,
      });
    
      // Save image
      const savedImage = await newImage.save(); 
      imageId = savedImage._id; 
    }
    
    // Add new offer
    const newOffer = new Offer({
      title: title,
      price: price,
      description: description,
      imageId: imageId
    });
    
    // Save offer
    newOffer.save();
    res.status(201).json(`Added offer '${title}'`);
  } catch (error) {
    console.error(error)
  }
});

export default router;

// eof
