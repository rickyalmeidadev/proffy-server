import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import classesRoutes from './routes/classes';
import connectionsRoutes from './routes/connections';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/classes', classesRoutes);
app.use('/connections', connectionsRoutes);

app.listen(5000, () => {
  console.log(`Server ins listening on port ${5000}`);
});
