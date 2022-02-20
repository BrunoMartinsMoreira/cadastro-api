import multer from 'multer';
import { extname, resolve } from 'path';

const random = () => Math.floor(Math.random() * 5248 + 45894);

export default {
  Storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (req, file, callback) => {
      callback(null, `${Date.now()}_${random}${extname(file.originalname)}`);
    },
  }),
};
