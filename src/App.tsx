import { useState } from "react";

interface ButtonProps {
  text?: string;
}

function Button(props?: ButtonProps) {
  return (
    <button className="bg-violet-200 hover:bg-violet-400 transition-colors px-4 m-4 h-10 rounded">
      {props?.text ?? "Meu botão"}
    </button>
  );
}

function App() {
  return (
    <div className="flex gap-2">
      <h1>Helloo</h1>
      <Button text="Confirmar"></Button>
      <Button></Button>
    </div>
  );
}

export default App;
