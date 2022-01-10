// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import questoes from "./bancoDeQuestoes"

export default function handler(req, res) {
    res.status(200).json(questoes[0])
  }
  