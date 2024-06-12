import express ,{Request,Response} from "express";
import dotenv from 'dotenv';
dotenv.config();
import bookRoutes from './routes/bookRoutes';
import authorRoutes from './routes/authorRoutes';
import userRoutes from './routes/userRoutes';
import reviewRoutes from './routes/reviewRoutes';
import paymentOrderRoutes from './routes/paymentOrderRoutes';
import ratingRoutes from './routes/ratingRoutes';
const app = express();
const port = 5000;

app.use(express.json());


app.get('/',(req:Request,res:Response)=>{
    console.log('Hello....')
})


app.use('/api/books',bookRoutes);
app.use('/api/authors',authorRoutes);
app.use('/api/users',userRoutes);
app.use('/api/reviews',reviewRoutes);
app.use('/api/ratings',ratingRoutes);
app.use('/api/payment',paymentOrderRoutes);



app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})