import { useState } from "react";
import Questao from "../componetns/Questao";
import QuestaoModel from "../model/questao";
import RespostasModel from "../model/respostas";

const questaoMock = new QuestaoModel(1, "Melhor cor?", [
  RespostasModel.errada("Verde"),
  RespostasModel.errada("Vermelha"),
  RespostasModel.errada("Azul"),
  RespostasModel.errada("Preta"),
]);

export default function Home() {
  const [questao, setQeustao] = useState(questaoMock)
  
  function  respostaFornecida(indice: number) {
    console.log(indice)
    setQeustao(questao.responderCom(indice))
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Questao valor={questao}
      respostaFornecida={respostaFornecida} />
    </div>
  );
}
