import nodemailer from "nodemailer";

import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "ed1987db7f3d41",
    pass: "df0482222fdef7",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe FeedbackCard <peixinho@peixinho.com>",
      to: "Lays <lays123@lays.com>",
      subject,
      html: body
    });
  }
}
