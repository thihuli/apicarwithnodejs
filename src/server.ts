import express from 'express';
import swaggerUi from "swagger-ui-express"
import swaggerFile from "./swagger.json";

import { router } from './routes';

const app = express();

app.use(express.json());

app.use("/docs", swaggerUi.serve);
app.use("/docs", swaggerUi.setup(swaggerFile))

app.use(router);

app.listen(3333, () => console.log('Server is running'));
