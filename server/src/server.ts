import express from "express";
import cors from "cors";

import { routes } from "./routes";

const app = express();

app.use(
  cors({
    origin: "https://nlw-feedback-card.vercel.app/",
  })
);
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log("-> HTTP server running...");
});
