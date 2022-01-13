import Questao from "../componetns/Questao";
import QuestaoModel from "../model/questao";
import RespostasModel from "../model/respostas";

export default function Home() {
  const questaoTeste = new QuestaoModel(1, "Melhor cor?", [
    RespostasModel.errada("Verde"),
    RespostasModel.errada("Vermelha"),
    RespostasModel.errada("Azul"),
    RespostasModel.errada("Preta"),
  ]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Questao valor={questaoTeste} />
    </div>
  );
}
