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
  const [questao, setQeustao] = useState<QuestaoModel>(questaoMock)
  const [respostaCerta, setRespostaCerta] = useState<number>(0)

  async function carregarIdsQuestoes() {
    const resp = await fetch(`${BASE_URL}/questionario`)
    const idQuestoes = await resp.json()
    setIdsQuestoes(idsQuestoes)
  }

  async function carregarQuestao(idQuestao: number) {
    const resp = await fetch(`${BASE_URL}/questao/${idQuestao}`)
    const json = await resp.json()
    const novaQuestao = QuestaoModel.criarUsandoObjeto(json)
    setQeustao(novaQuestao)
  }

  useEffect(() => {
    carregarIdsQuestoes()
  }, [])

  useEffect(() => {
    idsQuestoes.length > 0 && carregarQuestao(idsQuestoes[0])
  }, [idsQuestoes])
  
function questaoRespondida(questaoRespondida: QuestaoModel) {
  setQeustao(questaoRespondida)
  const acertou = questao.acertou
  setRespostaCerta(respostaCerta + (acertou ? 1 : 0))
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
