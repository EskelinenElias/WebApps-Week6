import { Router } from 'express';
import upload from "./upload";

// Create router
const router = Router();

// Add routes
router.use('/upload', upload); 

export default router; 
