import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.listen(5000, () => {
  console.log(`Server ins listening on port ${5000}`);
});
