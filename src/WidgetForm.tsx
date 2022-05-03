import { useState } from "react";

import { CloseButton } from "./CloseButton";
import bug from "./assets/bug.svg";
import idea from "./assets/idea.svg";
import thought from "./assets/thought.svg";

const feedbackTypes = {
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

type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex-col items-center shadow-lg w-[calc(100vh-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              onClick={() => setFeedbackType(key as FeedbackType)}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              type="button"
            >
              <img src={value?.image?.source} alt={value?.image?.alt} />
              <span>{value?.title}</span>
            </button>
          );
        })}
      </div>
      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela 
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
