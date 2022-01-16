import { useState } from "react";
import Botao from "../componetns/Botao";
import Questao from "../componetns/Questao";
import Questionario from "../componetns/Questionario";
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
  
function questaoRespondida(questa: QuestaoModel) {

}

function irParaProximo() {

}

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Questionario 
      questao={questao} 
      ultima={ false}
      questaoRespondida={questaoRespondida}
      irParaProximo={irParaProximo}
       />
     
    </div>
  );
}
