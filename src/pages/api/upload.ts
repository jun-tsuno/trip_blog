import { v4 as uuid } from 'uuid';
import multer from 'multer';
import { uploadFile } from '@/server/db/config/s3';

export const config = {
	api: {
		bodyParser: false,
	},
};

const upload = multer({
	storage: multer.memoryStorage(),
});

export default async function handler(req: any, res: any) {
	switch (req.method) {
		case 'POST':
			const body: any = await new Promise((resolve, reject) => {
				upload.single('file')(req, res, (err: any) => {
					if (err) return reject(err);
					resolve({ file: req.file });
				});
			});

			const file = req.file;
			const fileName = uuid();
			// send to s3
			await uploadFile(file.buffer, fileName, file.mimetype);
			// return file name as an identifier
			return res.status(201).json({ message: 'success', fileName });

		default:
			return;
	}
}
