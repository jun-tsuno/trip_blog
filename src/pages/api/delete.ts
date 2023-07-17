import { deleteFile } from '@/server/db/config/s3';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	switch (req.method) {
		case 'POST':
			const fileIdentifier = req.body.fileIdentifier as string;

			const s3Res = await deleteFile(fileIdentifier);
			return res.status(200).json(s3Res);
		default:
			return;
	}
}
