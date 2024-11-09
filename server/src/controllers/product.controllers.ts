import { Request, Response } from 'express';

import Product from '../models/product.models';

const getProducts = async (_req: Request, res: Response) => {
	try {
		const data = await Product.find({});
		res.status(200).json({ success: true, data: data });
	} catch (error: unknown) {
		console.error(
			error instanceof Error
				? `Error in fetching products: ${error.message}`
				: 'An unknown error occurred',
		);

		res.status(500).json({ success: false, message: 'Server Error' });
	}
};

export { getProducts };
