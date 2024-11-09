import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5000;

const connectDB = async () => {
	try {
		if (!process.env.MONGO_URI) {
			throw new Error('MONGO_URI is not defined');
		}

		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error: unknown) {
		console.error(
			error instanceof Error
				? `Error: ${error.message}`
				: 'An unknown error occurred',
		);
		process.exit(1);
	}
};

export { connectDB, PORT };
