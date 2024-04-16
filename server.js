import express from "express";
import { PORT } from "./config/index.js";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
	console.info(`Server is listening at http://localhost:${PORT}`);
});
