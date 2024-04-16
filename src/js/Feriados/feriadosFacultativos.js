// De: https://github.com/joaopbini/feriados-brasil/blob/master/dados/feriados/facultativo/json/2024.json
import { formatarFeriado } from "./Feriados";
const feriadosFacultativos = [
  {
    data: "12/02/2024",
    nome: "Carnaval",
    tipo: "FACULTATIVO",
    descricao:
      "Ponto Facultativo, ou seja, cabe às empresas e orgão públicos decidirem se trabalharão ou não.",
    uf: "",
    municipio: "",
  },
  {
    data: "13/02/2024",
    nome: "Carnaval",
    tipo: "FACULTATIVO",
    descricao:
      "Carnaval NÃO é um feriado oficial, é Ponto Facultativo, ou seja, cabe às empresas e orgão públicos decidirem se trabalharão ou não.",
    uf: "",
    municipio: "",
  },
  {
    data: "14/02/2024",
    nome: "Carnaval",
    tipo: "FACULTATIVO",
    descricao: "Ponto Facultativo até às 14h.",
    uf: "",
    municipio: "",
  },
  {
    data: "30/05/2024",
    nome: "Corpus Christi",
    tipo: "FACULTATIVO",
    descricao:
      "Ponto Facultativo no País, mas Feriado Municipal em algumas cidades.. Corpus Christi, expressão latina que significa Corpo de Cristo, é uma festa Cristã realizada na quinta-feira seguinte ao domingo da Santíssima Trindade.",
    uf: "",
    municipio: "",
  },
  {
    data: "15/10/2024",
    nome: "Dia do Professor",
    tipo: "FACULTATIVO",
    descricao:
      'FERIADO ESCOLAR - No dia 15 de outubro de 1827 (dia consagrado à educadora Santa Teresa de Ávila), o Imperador do Brasil, Pedro I, baixou um Decreto Imperial que criou o Ensino Elementar no Brasil. Pelo decreto, "todas as cidades, vilas e lugarejos teriam suas escolas de primeiras letras"',
    uf: "",
    municipio: "",
  },
  {
    data: "28/10/2024",
    nome: "Dia do Servidor Público",
    tipo: "FACULTATIVO",
    descricao:
      "O dia do servidor público é feriado apenas para funcionários públicos.",
    uf: "",
    municipio: "",
  },
  {
    data: "08/12/2024",
    nome: "Ponto Facultativo",
    tipo: "FACULTATIVO",
    descricao: "Nossa Senhora da Conceição",
    uf: "",
    municipio: "",
  },
  {
    data: "31/10/2024",
    nome: "Dia do Evangélico",
    tipo: "FACULTATIVO",
    descricao: "Dia do Evangélico",
    uf: "",
    municipio: "",
  },
  {
    data: "20/11/2024",
    nome: "Dia da Consciência Negra",
    tipo: "FACULTATIVO",
    descricao:
      "Lei Municipal No 1985, de 2009. Prefeitura não funcionará. O Comércio deverá Funcionar normalmente",
    uf: "",
    municipio: "",
  },
  {
    data: "19/03/2024",
    nome: "Dia de São José",
    tipo: "FACULTATIVO",
    descricao: "Padroeiro do Estado do Ceará",
    uf: "",
    municipio: "",
  },
  {
    data: "26/07/2024",
    nome: "Fundação da Cidade de Goiás",
    tipo: "FACULTATIVO",
    descricao:
      "Feriado para Servidores Públicos. Determinado pelo Estatuto dos Funcionários Públicos Civis do Estado de Goiás e de suas Autarquias, Lei nº 10.460, de 22 de fevereiro de 1988",
    uf: "",
    municipio: "",
  },
  {
    data: "24/10/2024",
    nome: "Pedra fundamental de Goiânia",
    tipo: "FACULTATIVO",
    descricao:
      "Feriado para Servidores Públicos. Determinado pelo Estatuto dos Funcionários Públicos Civis do Estado de Goiás e de suas Autarquias, Lei nº 10.460, de 22 de fevereiro de 1988",
    uf: "",
    municipio: "",
  },
  {
    data: "13/02/2024",
    nome: "Terça de Carnaval",
    tipo: "FACULTATIVO",
    descricao:
      "Feriado apenas no Comércio, segundo Lei nº 5913, de 21 de junho de 1991",
    uf: "",
    municipio: "",
  },
  {
    data: "28/02/2024",
    nome: "Facultativo",
    tipo: "FACULTATIVO",
    descricao: "aniversário de morte de José Pedro Dias, fundador de Juara",
    uf: "",
    municipio: "",
  },
  {
    data: "28/10/2024",
    nome: "Servidor público",
    tipo: "FACULTATIVO",
    descricao: "Ponto facultativo, Dia do Servidor Público",
    uf: "",
    municipio: "",
  },
  {
    data: "08/12/2024",
    nome: "Dia da Imaculada Conceição",
    tipo: "FACULTATIVO",
    descricao: "Dia da Imaculada Conceição, padroeira da cidade",
    uf: "",
    municipio: "",
  },
  {
    data: "08/12/2024",
    nome: "N. Sra. da Conceição",
    tipo: "FACULTATIVO",
    descricao: "Nossa Senhora da Conceição",
    uf: "",
    municipio: "",
  },
  {
    data: "28/10/2024",
    nome: "Ponto Facultativo Municipal",
    tipo: "FACULTATIVO",
    descricao:
      "Dia do Servidor Público - art. 249 da Lei Municipal nº 2.215/1991",
    uf: "",
    municipio: "",
  },
  {
    data: "29/06/2024",
    nome: "São Pedro",
    tipo: "FACULTATIVO",
    descricao: "",
    uf: "",
    municipio: "",
  },
  {
    data: "28/03/2024",
    nome: "Quinta-feira santa",
    tipo: "FACULTATIVO",
    descricao: "",
    uf: "",
    municipio: "",
  },
  {
    data: "12/02/2024",
    nome: "Segunda de Carnaval",
    tipo: "FACULTATIVO",
    descricao: "Ponto Facultativo nas repartições públicas",
    uf: "",
    municipio: "",
  },
  {
    data: "14/02/2024",
    nome: "Quarta Feira de Cinzas",
    tipo: "FACULTATIVO",
    descricao: "Ponto Facultativo nas repartições públicas",
    uf: "",
    municipio: "",
  },
  {
    data: "31/12/2024",
    nome: "Após o meio-dia, Véspera de Ano Novo",
    tipo: "FACULTATIVO",
    descricao: "De acordo com o Decreto nº 18882-E de 01 de junho de 2015",
    uf: "",
    municipio: "",
  },
  {
    data: "19/03/2024",
    nome: "São José",
    tipo: "FACULTATIVO",
    descricao: "Dia de São José padroeiro de Mafra",
    uf: "",
    municipio: "",
  },
  {
    data: "30/06/2024",
    nome: "Emancipação",
    tipo: "FACULTATIVO",
    descricao: "Emancipação político-administrativa do município",
    uf: "",
    municipio: "",
  },
  {
    data: "20/11/2024",
    nome: "Consciência Negra",
    tipo: "FACULTATIVO",
    descricao:
      "Dia da Consciência Negra. Ponto Facultativo de acordo com a Lei Municipal 2484/2008",
    uf: "",
    municipio: "",
  },
];

// Envia os dados para serem formatados e retorna para o que chamou está função
export const feriadosFacul = feriadosFacultativos.map(feri => {
    return formatarFeriado(feri,"facultativo","blue")
})
