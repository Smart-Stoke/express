import multer from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    if (file) {
      cb(null, file.fieldname + '-' + Date.now());
    }
  },
});

const upload = multer({ storage: storage });

export function uploadImage() {
  return upload.single('image');
}
