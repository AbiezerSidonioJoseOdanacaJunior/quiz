// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import questoes from "../bancoDeQuestoes"

export default function handler(req, res) {
  const idSelecionado = +req.query.id

  const unicaQuestaoOuNada = questoes.filter(questao => questao.id === idSelecionado)

  if(unicaQuestaoOuNada.length === 1) {
    const questaoSelecionada = unicaQuestaoOuNada[0].embarralharRespostas()
    res.status(200).json(questaoSelecionada.toObject())
  } else {
    res.status(204).send()
  }
    
}
  