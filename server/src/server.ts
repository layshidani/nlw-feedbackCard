import express from "express";
import cors from "cors";

import { routes } from "./routes";

const app = express();

app.use(cors());
// app.use(
//   cors({
//     origin: ["https://nlw-feedback-card.vercel.app/", "http://localhost:3000/"],
//   })
// );
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log("-> HTTP server running...");
});
