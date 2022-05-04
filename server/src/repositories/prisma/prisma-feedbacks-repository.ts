import { prisma } from "../../prisma";
import { FeedbacksCreate, FeedbacksRepository } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create({ type, comment, screenshot }: FeedbacksCreate) {
    await prisma.feedback.create({
      data: { type, comment, screenshot },
    });
  }
}
