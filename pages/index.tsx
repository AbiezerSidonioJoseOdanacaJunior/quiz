import { useEffect, useState } from "react";
import Botao from "../componetns/Botao";
import Questao from "../componetns/Questao";
import Questionario from "../componetns/Questionario";
import QuestaoModel from "../model/questao";
import { useRouter } from "next/router";

const BASE_URL = 'http://localhost:3000/api'

export default function Home() {
const router = useRouter()

  const [idsQuestoes, setIdsQuestoes] = useState<number[]>([])
  const [questao, setQeustao] = useState<QuestaoModel>()
  const [respostaCerta, setRespostaCerta] = useState<number>(0)

  async function carregarIdsQuestoes() {
    const resp = await fetch(`${BASE_URL}/questionario`)
    const idsQuestoes = await resp.json()
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
  const acertou = questaoRespondida.acertou
  setRespostaCerta(respostaCerta + (acertou ? 1 : 0))
}

function idProximaPergunta() {
  const proximoIndice = idsQuestoes.indexOf(questao.id) + 1
  return idsQuestoes[proximoIndice]
}

function irParaProximo() {
  const proximoId = idProximaPergunta()
  proximoId ? irParaProximaQuestao(proximoId) : finalizar()

}

function irParaProximaQuestao(proximoId: number) {
  carregarQuestao(proximoId)

}

function finalizar() {
  router.push({
    pathname: "/resultado",
    query: {
      total: idsQuestoes.length,
      certas: respostaCerta
    }
  })
}

  return questao ? (
    <Questionario 
    questao={questao} 
    ultima={idProximaPergunta() === undefined}
    questaoRespondida={questaoRespondida}
    irParaProximo={irParaProximo}
     />
  ) : false
  
}
