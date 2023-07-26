import { Image } from '../models';
import fs from 'fs';
import path from 'path';

const createImage = async (image) => {
  const __dirname = path.resolve();
  const filePath = path.join(__dirname + '/uploads/' + image.filename);

  const obj = {
    data: fs.readFileSync(filePath),
    contentType: image.mimetype,
  };
  const img = await Image.create(obj);
  return img._id;
};

export default { createImage };
