import express from "express";
import nodemailer from "nodemailer";

import { prisma } from "./prisma";

export const routes = express.Router();

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "ed1987db7f3d41",
    pass: "df0482222fdef7",
  },
});

routes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req?.body;

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    },
  });

  await transport.sendMail({
    from: "Equipe FeedbackCard <peixinho@peixinho.com>",
    to: "Lays <lays123@lays.com>",
    subject: "Novo feedback",
    html: [`<p>Tipo: ${type}</p>`, `<p>Comentário: ${comment}</p>`].join("\n"),
  });

  return res.status(201).json({ data: feedback });
});
