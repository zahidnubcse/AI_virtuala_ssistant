import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public"); // upload folder
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // keep original name
  },
});

const upload = multer({ storage });

export default upload;
