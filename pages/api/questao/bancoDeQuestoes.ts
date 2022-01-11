import QuestaoModel from "../../../model/questao"
import RespostasModel from "../../../model/respostas"

const questoes: QuestoesModel[] = [
    new QuestaoModel(306, 'Qual biciho transmite a doença de Chagas?', [
        RespostasModel.errada('Abelha'),
        RespostasModel.errada('Barata'),
        RespostasModel.errada('Pulga'),
        RespostasModel.certa('Barbeiro'),
    ]), 

    new QuestaoModel(202, 'Qual fruta conhecida no Nrte e Nordeste como "Jerimum"?', [
        RespostasModel.errada('Cajú'),
        RespostasModel.errada('Coco'),
        RespostasModel.errada('Cochum'),
        RespostasModel.certa('Abobra'),
    ]) 
]

export default questoes