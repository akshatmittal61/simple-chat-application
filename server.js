import express from "express";
import { PORT } from "./config/index.js";

const app = express();

app.listen(PORT, () => {
	console.info(`Server is listening at http://localhost:${PORT}`);
});
