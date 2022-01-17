import { useEffect, useState } from "react";
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

const BASE_URL = 'http://localhost:3000/api'

export default function Home() {
  const [idsQuestoes, setIdsQuestoes] = useState<number[]>([])
  const [questao, setQeustao] = useState(questaoMock)

  async function carregarIdsQuestoes() {
    const resp = await fetch( `${BASE_URL}/questionario` )
    const idQuestoes = await resp.json()
    setIdsQuestoes(idsQuestoes)
  }

  useEffect(() => {
    carregarIdsQuestoes()
  }, [])
  
function questaoRespondida(questa: QuestaoModel) {

}

function irParaProximo() {

}

  return (
      <Questionario 
      questao={questao} 
      ultima={ false}
      questaoRespondida={questaoRespondida}
      irParaProximo={irParaProximo}
       />
  );
}
