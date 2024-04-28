import express from "express";

const app = express();

app.get("/api/health", (_, res) => {
	return res.status(200).json({ message: "API is healthy" });
});

app.listen(4000, () => {
	console.info(`Server is listening on http://localhost:4000`);
});
