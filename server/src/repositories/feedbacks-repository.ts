// camada de dados
export interface FeedbacksCreate{
  type: string;
  comment: string;
  screenshot?: string;
}

export interface FeedbacksRepository {
  create: (data: FeedbacksCreate) => Promise<void>;
}
