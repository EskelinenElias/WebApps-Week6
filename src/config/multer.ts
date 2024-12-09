import multer, {StorageEngine, Multer} from "multer"
import path from 'path'; 
import { v4 as uuidv4 } from "uuid"; 
// Types
type CallBack = (error: Error | null, destination: string) => void; 

// Initialize storage
const storage: StorageEngine = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    const originalName = path.parse(file.originalname).name; // Original filename (no extension)
    const fileExtension = path.extname(file.originalname); // File extension
    const uniqueId = uuidv4(); // Unique identifier
    const newFilename = `${originalName}_${uniqueId}${fileExtension}`; // New filename
    cb(null, newFilename);
  }
})
  
// Initialize multer
const upload: Multer = multer({ storage: storage });

export default upload;