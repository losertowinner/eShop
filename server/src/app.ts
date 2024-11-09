import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors';

import { PORT, connectDB } from './configs/db.config';
import productRoutes from './routes/product.routes';

const app: Application = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan('combined'));
app.use(express.json());
app.use(cors());

app.use('/products', productRoutes);

app.get('/', (_req: Request, res: Response) => {
	res.send({ message: 'Welcome to eShop' });
});

app.listen(PORT, () => {
	void connectDB();
	console.log(`Server started at http://localhost:${PORT}`);
});
