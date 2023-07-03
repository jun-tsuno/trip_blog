import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: false,
		},
		rating: {
			type: Number,
			required: true,
		},
		area: {
			type: String,
			enum: [
				'NORTH_AMERICA',
				'SOUTH_AMERICA',
				'ASIA',
				'OCEANIA',
				'EUROPE',
				'AFRICA',
				'OTHER',
			],
		},
		country: {
			type: String,
			required: true,
		},
		city: {
			type: String,
			required: true,
		},
		postedUser: {
			type: ObjectId,
			required: true,
		},
		userName: {
			type: String,
			required: true,
		},
		fileIdentifier: {
			type: String,
			required: false,
		},
	},
	{ timestamps: true }
);

export default mongoose.models.Post || mongoose.model('Post', PostSchema);
