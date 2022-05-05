import { SubmitFeedbackUseCase } from './submit-feedback-use-case';

describe('SubmitFeedbackUseCase', () => {
  const sendMailSpy = jest.fn();
  const createFeedbackSpy = jest.fn();

  const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
  );

  it('should to submit a feedback', async () => {
    
    await expect(
      submitFeedback.execute({
        type: 'BUG',
        comment: 'Comentário 3',
      })
    ).resolves.not.toThrow();

    expect(sendMailSpy).toHaveBeenCalled();
    expect(createFeedbackSpy).toHaveBeenCalled();
  });

  it('should not be able to submit feedback with screenshot invalid format', async () => {
    await expect(
      submitFeedback.execute({
        type: 'BUG',
        comment: 'Comentário 3',
        screenshot: 'image',
      })
    ).rejects.toThrow();
  });

  it('should not be able to submit feedback withou a type', async () => {
    await expect(
      submitFeedback.execute({
        type: "",
        comment: "Comentário 3",
        screenshot: "file:imgage/png;base64",
      })
    ).rejects.toThrow();
  });

  it('should not be able to submit feedback withou a comment', async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "",
        screenshot: "file:imgage/png;base64",
      })
    ).rejects.toThrow();
  });
});
