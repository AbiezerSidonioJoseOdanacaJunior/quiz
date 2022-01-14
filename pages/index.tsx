import { useState } from "react";
import Questao from "../componetns/Questao";
import QuestaoModel from "../model/questao";
import RespostasModel from "../model/respostas";

const questaoMock = new QuestaoModel(1, "Melhor cor?", [
  RespostasModel.errada("Verde"),
  RespostasModel.errada("Vermelha"),
  RespostasModel.errada("Azul"),
  RespostasModel.certa("Preta"),
]);

export default function Home() {
  const [questao, setQeustao] = useState(questaoMock)
  

  function  respostaFornecida(indice: number) {
    setQeustao(questao.responderCom(indice))
  }

  function  tempoEsgotado() {
    if(questao.naoRespondida){
      setQeustao(questao.responderCom(-1))
    }
    
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
      respostaFornecida={respostaFornecida}
      tempoEsgotado={tempoEsgotado} />
    </div>
  );
}
