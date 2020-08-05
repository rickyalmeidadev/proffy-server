import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(routes);

app.listen(5000, () => {
  console.log(`Server ins listening on port ${5000}`);
});
