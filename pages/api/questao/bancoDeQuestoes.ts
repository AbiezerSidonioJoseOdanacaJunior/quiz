import QuestaoModel from "../../../model/questao"
import RespostasModel from "../../../model/respostas"

const questoes: QuestaoModel[] = [
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
    ]),

    new QuestaoModel(203, 'Qual é o colectivo de cães?', [
        RespostasModel.errada('Mandanda'),
        RespostasModel.errada('Alcateia'),
        RespostasModel.errada('Rebanho'),
        RespostasModel.certa('Matilha'),
    ]),

    new QuestaoModel(204, 'Qual é o Triângulo que tem todos os lados diferentes?', [
        RespostasModel.errada('Equilátero'),
        RespostasModel.errada('Isóceles'),
        RespostasModel.errada('Trapézio'),
        RespostasModel.certa('Escaleno'),
    ])
]

export default questoes