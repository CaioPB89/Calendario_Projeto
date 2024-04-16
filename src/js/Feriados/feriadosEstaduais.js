// De https://github.com/joaopbini/feriados-brasil/blob/master/dados/feriados/estadual/json/2024.json
import Feriados from "./Feriados";
const feriadosEstaduais = [
  {
    data: "20/01/2024",
    nome: "Dia do Católico",
    tipo: "ESTADUAL",
    descricao:
      "Dia 20 de janeiro, é feriado no calendário oficial do Governo do Estado do Acre, conforme lei Nº 3137/2016. O Dia do Católico foi criado em 2016, em similaridade ao dia do Evngélico",
    uf: "AC",
    municipio: "",
  },
  {
    data: "23/01/2024",
    nome: "Dia do Evangélico",
    tipo: "ESTADUAL",
    descricao:
      "Dia 23 de janeiro, é feriado no calendário oficial do Governo do Estado do Acre, conforme lei Nº 1538/2004. O Dia do Evangélico foi criado em 2004, por meio de projeto de lei apresentado pelo deputado Helder Paiva, aprovado pela então governador Jorge Viana",
    uf: "AC",
    municipio: "",
  },
  {
    data: "08/03/2024",
    nome: "Dia da Mulher",
    tipo: "ESTADUAL",
    descricao:
      "Feriado conforme lei Nº 1411/2001, mas adiado para Sexta-Feira. O Dia Internacional da Mulher, celebrado em 8 de março, tem como origem as manifestações das mulheres russas por melhores condições de vida e trabalho e contra a entrada da Rússia czarista na Primeira1 Guerra Mundial.",
    uf: "AC",
    municipio: "",
  },
  {
    data: "15/06/2024",
    nome: "Aniversário do Acre",
    tipo: "ESTADUAL",
    descricao: "De acordo com a Lei Estadual nº 14, de 02 de setembro de 1964",
    uf: "AC",
    municipio: "",
  },
  {
    data: "06/09/2024",
    nome: "Dia da Amazônia",
    tipo: "ESTADUAL",
    descricao:
      "Conforme a lei Nº 243/1968, no dia 5 de setembro comemora-se no Acre o dia da Amazônia, a maior floresta do mundo. Feriado adiado para Sexta-Feira.",
    uf: "AC",
    municipio: "",
  },
  {
    data: "24/06/2024",
    nome: "Dia de São João",
    tipo: "ESTADUAL",
    descricao:
      "O mastro de São João, conhecido em Portugal também como o mastro dos Santos Populares, é erguido durante a festa junina para celebrar os três santos ligados a essa festa.",
    uf: "AL",
    municipio: "",
  },
  {
    data: "29/06/2024",
    nome: "Dia de São Pedro",
    tipo: "ESTADUAL",
    descricao:
      "São Pedro foi um dos doze apóstolos de Jesus Cristo, segundo o Novo Testamento e, mais especificamente, os quatro Evangelhos. Os católicos consideram Pedro como o primeiro Bispo de Roma, sendo por isso o primeiro Papa da Igreja Católica.",
    uf: "AL",
    municipio: "",
  },
  {
    data: "16/09/2024",
    nome: "Emancipação de Alagoas",
    tipo: "ESTADUAL",
    descricao:
      "Comemoração da emancipação política do estado de Alagoas. Inicialmente o território alagoano constituía a parte sul da Capitania de Pernambuco e só conseguiu sua autonomia em 1817.",
    uf: "AL",
    municipio: "",
  },
  {
    data: "30/11/2024",
    nome: "Dia do Evangélico",
    tipo: "ESTADUAL",
    descricao:
      "Dia do evangélico, conforme decreto nº 56.880, de 19 de Dezembro de 2017.",
    uf: "AL",
    municipio: "",
  },
  {
    data: "05/09/2024",
    nome: "Aniversário do Amazonas",
    tipo: "ESTADUAL",
    descricao: "Dia da elevação do Amazonas à categoria de província.",
    uf: "AM",
    municipio: "",
  },
  {
    data: "19/03/2024",
    nome: "Dia de São José",
    tipo: "ESTADUAL",
    descricao: "São José é o santo padroeiro do Estado do Amapá.",
    uf: "AP",
    municipio: "",
  },
  {
    data: "15/05/2024",
    nome: "Dia de Cabralzinho",
    tipo: "ESTADUAL",
    descricao:
      "Homenagem a Francisco Xavier da Veiga Cabral, o Cabralzinho, que rechaçou uma invasão francesa em 15 de maio de 1895. Conforme lei 2.213/2017",
    uf: "AP",
    municipio: "",
  },
  {
    data: "25/07/2024",
    nome: "Dia de São Tiago",
    tipo: "ESTADUAL",
    descricao: "De acordo com a Lei nº 1.696 de 09 de julho de 2012",
    uf: "AP",
    municipio: "",
  },
  {
    data: "13/09/2024",
    nome: "Aniversário da criação do ex-território federal do Amapá",
    tipo: "ESTADUAL",
    descricao: "Dia da criação do território federal do Amapá.",
    uf: "AP",
    municipio: "",
  },
  {
    data: "30/11/2024",
    nome: "Dia do Evangélico",
    tipo: "ESTADUAL",
    descricao:
      "Dia 30 de Novembro comemora-se o dia o evangélico no estado do Amapá.",
    uf: "AP",
    municipio: "",
  },
  {
    data: "08/12/2024",
    nome: "N. Sra. Conceição",
    tipo: "ESTADUAL",
    descricao: "Dia de Nossa Senhora da Conceição",
    uf: "AP",
    municipio: "",
  },
  {
    data: "02/07/2024",
    nome: "Independência da Bahia",
    tipo: "ESTADUAL",
    descricao:
      "A Independência da Bahia foi um movimento que, motivado pelo sentimento federalista emancipador de seu povo, em 2 de julho de 1823 terminou pela inserção daquela então província na unidade nacional brasileira.",
    uf: "BA",
    municipio: "",
  },
  {
    data: "25/03/2024",
    nome: "Data Magna do Ceará",
    tipo: "ESTADUAL",
    descricao:
      "É a data magna onde ocorrem as comemorações do estado do Ceará, sendo o mesmo dia da abolição da escravidão neste estado. O Ceará foi a primeira província brasileira a aboliar a escravidão.",
    uf: "CE",
    municipio: "",
  },
  {
    data: "30/11/2024",
    nome: "Dia do Evangélico",
    tipo: "ESTADUAL",
    descricao:
      "O presidente Lula sancionou a Lei Nº 12.328 que torna o dia 30 de novembro o Dia Nacional do Evangélico. Este dia é feriado no DF e em alguns outros estados",
    uf: "DF",
    municipio: "",
  },
  {
    data: "28/07/2024",
    nome: "Adesão ao Império Brasileiro",
    tipo: "ESTADUAL",
    descricao:
      "As tropas de Portugal depois de cercadas por terra e mar, acabaram por se render, e o Maranhão, a partir de 28 de julho de 1823, deixou de ser estado colonial de Portugal, tornando-se província do Império do Brasil.",
    uf: "MA",
    municipio: "",
  },
  {
    data: "11/10/2024",
    nome: "Aniversário do Mato Grosso do Sul",
    tipo: "ESTADUAL",
    descricao:
      "Comemorações do aniversário de criação do Estado do Mato Grosso do Sul.",
    uf: "MS",
    municipio: "",
  },
  {
    data: "15/08/2024",
    nome: "Adesão ao Império Brasileiro",
    tipo: "ESTADUAL",
    descricao:
      '"A Província do Pará foi a última a ser incorporada ao Império, quando da Independência do Brasil uma vez que, com fortes laços com Portugal, não aceitou fazer parte da nova nação.',
    uf: "PA",
    municipio: "",
  },
  {
    data: "08/12/2024",
    nome: "N. Sra. Conceição",
    tipo: "ESTADUAL",
    descricao: "Dia de Nossa Senhora da Conceição",
    uf: "PA",
    municipio: "",
  },
  {
    data: "26/07/2024",
    nome: "Homenagem a João Pessoa",
    tipo: "ESTADUAL",
    descricao:
      "Homenagem ao ex-presidente João Pessoa que foi assassinado em 26 de Julho de 1930.",
    uf: "PB",
    municipio: "",
  },
  {
    data: "05/08/2024",
    nome: "Fundação do Estado da Paraíba",
    tipo: "ESTADUAL",
    descricao: "Comemoração da fundação do estado da Paraíba.",
    uf: "PB",
    municipio: "",
  },
  {
    data: "06/03/2024",
    nome: "Revolução Pernambucana",
    tipo: "ESTADUAL",
    descricao:
      "Data Magna de Pernambuco (Lei nº 16.059, de 8 de junho de 2017). A chamada Revolução Pernambucana, também conhecida como Revolução dos Padres, eclodiu em 6 de março de 1817 na então Província de Pernambuco, no Brasil.",
    uf: "PE",
    municipio: "",
  },
  {
    data: "19/10/2024",
    nome: "Dia do Piauí",
    tipo: "ESTADUAL",
    descricao:
      "Independência da província do Piauí da coroa portuguesa, que ocorreu na cidade de Parnaiba. Feriado Estadual de acordo com a Lei Estadual nº 176, de 30.08.1937.",
    uf: "PI",
    municipio: "",
  },
  {
    data: "06/08/2024",
    nome: "Revolução Acreana",
    tipo: "ESTADUAL",
    descricao: "",
    uf: "AC",
    municipio: "",
  },
  {
    data: "08/12/2024",
    nome: "Dia de Nossa Senhora da Conceição",
    tipo: "ESTADUAL",
    descricao: "",
    uf: "AM",
    municipio: "",
  },
  {
    data: "13/02/2024",
    nome: "Carnaval",
    tipo: "ESTADUAL",
    descricao:
      "Feriado estadual no Rio de Janeiro, conforme lei 5243/2008. Ponto Facultativo no restante do Brasil",
    uf: "RJ",
    municipio: "",
  },
  {
    data: "23/04/2024",
    nome: "Dia de São Jorge",
    tipo: "ESTADUAL",
    descricao:
      "São Jorge foi, de acordo com a tradição, um padre e soldado romano no exército do imperador Diocleciano, venerado como mártir cristão.",
    uf: "RJ",
    municipio: "",
  },
  {
    data: "20/11/2024",
    nome: "Dia da Consciência Negra",
    tipo: "ESTADUAL",
    descricao:
      "O Dia Nacional da Consciência Negra é Feriado no Rio de Janeiro e celebrado em 20 de novembro, a data foi escolhida por coincidir com o dia da morte de Zumbi dos Palmares, em 1695.",
    uf: "RJ",
    municipio: "",
  },
  {
    data: "03/10/2024",
    nome: "Mártires de Cunhaú e Uruaçu",
    tipo: "ESTADUAL",
    descricao:
      "No dia 03 de outubro de 1645, ocorreu o Massacre de Uruaçu, onde 28 cristãos foram mortos por índios e soldados holandeses.",
    uf: "RN",
    municipio: "",
  },
  {
    data: "04/01/2024",
    nome: "Aniversário de Rondônia",
    tipo: "ESTADUAL",
    descricao: "Aniversário da data de criação do Estado de Rondônia.",
    uf: "RO",
    municipio: "",
  },
  {
    data: "18/06/2024",
    nome: "Dia do Evangélico",
    tipo: "ESTADUAL",
    descricao:
      "Dia 18 de Junho comemora-se o dia o evangélico no estado de Rondônia.",
    uf: "RO",
    municipio: "",
  },
  {
    data: "05/10/2024",
    nome: "Aniversário de Roraima",
    tipo: "ESTADUAL",
    descricao: "Comemorações do Aniversário da criação do Estado de Roraima.",
    uf: "RR",
    municipio: "",
  },
  {
    data: "20/09/2024",
    nome: "Proc. República Rio Grandense",
    tipo: "ESTADUAL",
    descricao:
      "Em 1835 foi desencadeada a Revolução Farroupilha, que manifestava o descontentamento da Província de São Pedro do Rio Grande com o governo regencial do Império do Brasil. O movimento culminou na proclamação da República Rio-Grandense.",
    uf: "RS",
    municipio: "",
  },
  {
    data: "11/08/2024",
    nome: "Dia de Santa Catarina",
    tipo: "ESTADUAL",
    descricao:
      "A Capitania de Santa Catarina foi criada em 11 de agosto de 1738. Em 28 de fevereiro de 1821 torna-se uma província, que viria a ser o atual estado de Santa Catarina com a Proclamação da República.",
    uf: "SC",
    municipio: "",
  },
  {
    data: "08/07/2024",
    nome: "Aniversário de Sergipe",
    tipo: "ESTADUAL",
    descricao: "Aniversário da Autonomia Política de Sergipe.",
    uf: "SE",
    municipio: "",
  },
  {
    data: "09/07/2024",
    nome: "Revolução Constitucionalista",
    tipo: "ESTADUAL",
    descricao:
      "A Revolução Constitucionalista de 1932 foi um movimento armado que tinha por objetivo a derrubada do Governo Provisório de Getúlio Vargas e a promulgação de uma nova constituição para o Brasil.",
    uf: "SP",
    municipio: "",
  },
  {
    data: "08/09/2024",
    nome: "Padroeira de Tocantins",
    tipo: "ESTADUAL",
    descricao:
      "O nascimento de Nossa Senhora ou a Natividade de Maria é uma festa litúrgica das Igrejas Católica e Anglicana, celebrada no dia 8 de setembro, nove meses após a sua Imaculada Conceição, celebrada em 8 de dezembro.",
    uf: "TO",
    municipio: "",
  },
  {
    data: "05/10/2024",
    nome: "Aniversário de Tocantins",
    tipo: "ESTADUAL",
    descricao:
      "Em 5 de outubro de 1988, o norte de Goiás foi emancipado, passando a se chamar Tocantins. Em 1º de janeiro de 1989, a Unidade Federativa do Tocantins foi oficialmente instalada.",
    uf: "TO",
    municipio: "",
  },
];

// export const feriadosEstad = feriadosEstaduais.map(feri => {
//     return Feriados.formatarFeriado(feri,"green")
// })