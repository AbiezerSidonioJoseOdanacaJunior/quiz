import Questao from "../../componetns/Questao";
import QuestaoModel from "../../model/questao";
import RespostasModel from "../../model/respostas";

const questoes: QuestaoModel[] = [
    new QuestaoModel(306, 'Qual bicho transmite a Doença de Chagas?', [
        RespostasModel.errada('Abelha'),
        RespostasModel.errada('Barata'),
        RespostasModel.errada('Pulga'),
        RespostasModel.certa('Barbeiro'),
    ]),
    new QuestaoModel(202, 'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?', [
        RespostasModel.errada('Caju'),
        RespostasModel.errada('Côco'),
        RespostasModel.errada('Chuchu'),
        RespostasModel.certa('Abóbora'),
    ]),
    new QuestaoModel(203, 'Qual é o coletivo de cães?', [
        RespostasModel.errada('Manada'),
        RespostasModel.errada('Alcateia'),
        RespostasModel.errada('Rebanho'),
        RespostasModel.certa('Matilha'),
    ]),
    new QuestaoModel(204, 'Qual é o triângulo que tem todos os lados diferentes?', [
        RespostasModel.errada('Equilátero'),
        RespostasModel.errada('Isóceles'),
        RespostasModel.errada('Trapézio'),
        RespostasModel.certa('Escaleno'),
    ]),
    new QuestaoModel(205, 'Quem compôs o Hino da Independência?', [
        RespostasModel.errada('Castro Alves'),
        RespostasModel.errada('Manuel Bandeira'),
        RespostasModel.errada('Carlos Gomes'),
        RespostasModel.certa('Dom Pedro I'),
    ]),
    new QuestaoModel(206, 'Qual é o antônimo de "malograr"?', [
        RespostasModel.errada('Perder'),
        RespostasModel.errada('Fracassar'),
        RespostasModel.errada('Desprezar'),
        RespostasModel.certa('Conseguir'),
    ]),
    new QuestaoModel(207, 'Em que país nasceu Carmen Miranda?', [
        RespostasModel.errada('Argentina'),
        RespostasModel.errada('Espanha'),
        RespostasModel.errada('Brasil'),
        RespostasModel.certa('Portugal'),
    ]),
    new QuestaoModel(208, 'Qual foi o último Presidente do período da ditadura militar no Brasil?', [
        RespostasModel.errada('Costa e Silva'),
        RespostasModel.errada('Emílio Médici'),
        RespostasModel.errada('Ernesto Geisel'),
        RespostasModel.certa('João Figueiredo'),
    ]),
    new QuestaoModel(209, 'Seguindo a sequência do baralho, qual carta vem depois do dez?', [
        RespostasModel.errada('Ás'),
        RespostasModel.errada('Nove'),
        RespostasModel.errada('Rei'),
        RespostasModel.certa('Valete'),
    ]),
    new QuestaoModel(210, 'O adjetivo "venoso" está relacionado a:', [
        RespostasModel.errada('Vela'),
        RespostasModel.errada('Vento'),
        RespostasModel.errada('Vênia'),
        RespostasModel.certa('Veia'),
    ]),
    new QuestaoModel(211, 'Que nome se dá à purificação por meio da água?', [
        RespostasModel.errada('Abrupção'),
        RespostasModel.errada('Abolição'),
        RespostasModel.errada('Abnegação'),
        RespostasModel.certa('Ablução'),
    ]),
    new QuestaoModel(212, 'Qual montanha se localiza entre a fronteira do Tibet com o Nepal?', [
        RespostasModel.errada('Monte Branco'),
        RespostasModel.errada('Monte Fuji'),
        RespostasModel.errada('Monte Carlo'),
        RespostasModel.certa('Monte Everest'),
    ]),
    new QuestaoModel(213, 'Em que parte do corpo se encontra a epiglote?', [
        RespostasModel.errada('Pâncreas'),
        RespostasModel.errada('Rim'),
        RespostasModel.certa('Pescoço'),
        RespostasModel.errada('Estômago'),
    ]),
    new QuestaoModel(214, 'A compensação por perda é chamada de...', [
        RespostasModel.errada('Déficit'),
        RespostasModel.errada('Indexação'),
        RespostasModel.errada('Indébito'),
        RespostasModel.certa('Indenização'),
    ]),
    new QuestaoModel(215, 'Que personagem do folclore brasileiro tem uma perna só?', [
        RespostasModel.errada('Cuca'),
        RespostasModel.errada('Curupira'),
        RespostasModel.errada('Boitatá'),
        RespostasModel.certa('Saci-pererê'),
    ]),
    new QuestaoModel(216, 'Quem é o "patrono" do Exército Brasileiro?', [
        RespostasModel.errada('Marechal Deodoro'),
        RespostasModel.errada('Barão de Mauá'),
        RespostasModel.errada('Marquês de Pombal'),
        RespostasModel.certa('Duque de Caxias'),
    ]),
]

export default questoes