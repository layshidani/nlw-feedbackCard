import { useState } from "react";

import bug from "../../assets/bug.svg";
import idea from "../../assets/idea.svg";
import thought from "../../assets/thought.svg";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedBackTypesStep } from "./Steps/FeedbackTypesStep";

export const feedbackTypes = {
  BUG: {
    title: " Problema",
    image: {
      source: bug,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: idea,
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thought,
      alt: "Imagem de uma nuvem de pensamento",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  function handleRestartFeedback() {
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vh-2rem)] md:w-auto">
      {!feedbackType ? (
        <FeedBackTypesStep onFeedbackTypeClicked={setFeedbackType} />
      ) : (
        <FeedbackContentStep
          feedbackType={feedbackType}
          onRestartFeedbackRequested={handleRestartFeedback}
        />
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela{' '}
        <a
          className="underline underline-offset-2"
          href="https://rocketseat.com.br"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
}
