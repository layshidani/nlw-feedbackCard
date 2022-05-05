// camada de regra de negócio

import { FeedbacksRepository } from "../repositories/feedbacks-repository";
import { MailAdapter } from "../adapters/mail-adapter";

// a interface é igual a FeedbacksCreate, porém é 'repetida' pq são usadas em camadas com diferentes propósitos e podem ser diferentes
interface SubmitFeedbackUseCaseFeedback {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  constructor(
    private feedbacksRepository: FeedbacksRepository, private mailAdapter: MailAdapter
  ) {}

  async execute(request: SubmitFeedbackUseCaseFeedback) {
    const { type, comment, screenshot } = request;

    if (screenshot && !screenshot.startsWith('file:imgage/png;base64')) {
      throw new Error('Formato de imagem inválido.');
      
    }

    if (!type) {      
      throw new Error('O tipo é obrigatório');
      
    }

    if (!comment) {
      throw new Error('O comentário é obrigatório');
      
    }

    // estamos usando SOLID: inversão de dependências, por isso não chamo o prisma repository diretamente aqui, para não deixá-lo acoplado aqui. Ou seja, se um dia eu quiser usar outra ferramenta diferente do prisma, não preciso alterar nada aqui. Alteraria somente o feedbacksRepository.
    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    });

    await this.mailAdapter.sendMail({
      subject: "Novo feedback",
      body: [`<p>Tipo: ${type}</p>`, `<p>Comentário: ${comment}</p>`].join(
        "\n"
      ),
    });
  }
}
