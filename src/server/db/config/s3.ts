import {
	S3Client,
	PutObjectCommand,
	GetObjectCommand,
	DeleteObjectCommand,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const bucketName = process.env.MY_AWS_BUCKET_NAME;
const bucketRegion = process.env.MY_AWS_BUCKET_REGION;
const accessKey = process.env.MY_AWS_ACCESS_KEY;
const secretAccessKey = process.env.MY_AWS_SECRET_ACCESS_KEY;

const s3Client = new S3Client({
	region: bucketRegion,
	credentials: {
		accessKeyId: accessKey || '',
		secretAccessKey: secretAccessKey || '',
	},
});

export const uploadFile = async (file: any, fileName: any, mimetype: any) => {
	const uploadParams = {
		Bucket: bucketName, // which bucket to store
		Key: fileName, // if the Key exist in the s3, it will be overwritten. Use uniq key name
		Body: file, // file
		ContentType: mimetype,
	};

	try {
		const res = await s3Client.send(new PutObjectCommand(uploadParams));

		if (res.$metadata.httpStatusCode !== 200) {
			return { message: 'fail to upload', XPathResult: false };
		}
		return { message: 'successfully uploaded', result: true };
	} catch (error) {
		console.log(error);
		return { message: 'something went wrong', result: false };
	}
};

export const deleteFile = async (fileIdentifier: string) => {
	const deleteParams = {
		Bucket: bucketName,
		Key: fileIdentifier,
	};

	try {
		const res = await s3Client.send(new DeleteObjectCommand(deleteParams));

		if (res.$metadata.httpStatusCode !== 204) {
			return { message: 'fail to delete', XPathResult: false };
		}
		return { message: 'successfully deleted', result: true };
	} catch (error) {
		console.log(error);
		return { message: 'something went wrong', result: false };
	}
};

export const getObjectSignedUrl = async (key: string | undefined) => {
	const params = {
		Bucket: bucketName,
		Key: key,
	};

	const command = new GetObjectCommand(params);
	const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 });

	return url;
};
