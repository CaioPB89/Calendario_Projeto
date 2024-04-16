// De https://github.com/joaopbini/feriados-brasil/blob/master/dados/feriados/nacional/json/2024.json
import Feriados from "./Feriados";
const feriadosNacionais = [
  {
    data: "01/01/2024",
    nome: "Ano Novo",
    tipo: "NACIONAL",
    descricao:
      "O Ano-Novo ou Réveillon é um evento que acontece quando uma cultura celebra o fim de um ano e o começo do próximo. A celebração do evento é também chamada Réveillon, termo oriundo do verbo francês réveiller, que em português significa DESPERTAR",
    uf: "",
    municipio: "",
  },
  {
    data: "29/03/2024",
    nome: "Sexta-Feira Santa",
    tipo: "NACIONAL",
    descricao:
      'Também chamada de "Sexta Feira da Paixão" é a sexta-feira que ocorre antes do domingo de Páscoa, e é o dia que os cristãos lembram da crucificação de Cristo.',
    uf: "",
    municipio: "",
  },
  {
    data: "21/04/2024",
    nome: "Dia de Tiradentes",
    tipo: "NACIONAL",
    descricao:
      "Joaquim José da Silva Xavier, o Tiradentes foi um dentista, tropeiro, minerador, comerciante, militar e ativista político. É reconhecido como mártir da Inconfidência Mineira e herói nacional. O dia de sua execução, 21 de abril, é feriado nacional.",
    uf: "",
    municipio: "",
  },
  {
    data: "01/05/2024",
    nome: "Dia do Trabalho",
    tipo: "NACIONAL",
    descricao:
      "O Dia do Trabalhador ou Dia Internacional dos Trabalhadores é celebrado anualmente no dia 1º de Maio em numerosos países do mundo, sendo feriado no Brasil, em Portugal e em outros países.",
    uf: "",
    municipio: "",
  },
  {
    data: "07/09/2024",
    nome: "Independência do Brasil",
    tipo: "NACIONAL",
    descricao:
      'O Dia da Indepência do Brasil, oficialmente a data comemorada é a de 7 de setembro de 1822, em que ocorreu o chamado "Grito do Ipiranga".',
    uf: "",
    municipio: "",
  },
  {
    data: "12/10/2024",
    nome: "Nossa Senhora Aparecida",
    tipo: "NACIONAL",
    descricao:
      "Nossa Senhora da Conceição Aparecida é a padroeira do Brasil. Sua festa é celebrada em 12 de outubro, um feriado nacional desde que o Papa João Paulo II consagrou a Basílica em 1980.",
    uf: "",
    municipio: "",
  },
  {
    data: "02/11/2024",
    nome: "Dia de Finados",
    tipo: "NACIONAL",
    descricao:
      "O Dia de Finados ou Dia dos Fiéis Defuntos, (conhecido ainda como Dia dos Mortos no México), é celebrado pela Igreja Católica no dia 2 de novembro e é Feriado Nacional.",
    uf: "",
    municipio: "",
  },
  {
    data: "15/11/2024",
    nome: "Proclamação da República",
    tipo: "NACIONAL",
    descricao:
      "A Proclamação da República foi um levante político-militar ocorrido em 15 de novembro de 1889 que instaurou a forma Republicana Federativa Presidencialista de governo no Brasil, derrubando a Monarquia e, por conseguinte, o imperador dom Pedro II.",
    uf: "",
    municipio: "",
  },
  {
    data: "25/12/2024",
    nome: "Natal",
    tipo: "NACIONAL",
    descricao:
      "O Natal é comemorado anualmente em 25 de Dezembro. Originalmente destinado a celebrar o nascimento anual do Deus Sol no solstício de inverno, foi adaptado pela Igreja Católica no 3o século d.C., para permitir a conversão dos povos pagãos sob o domínio do Império Romano, passando a comemorar o nascimento de Jesus de Nazaré.",
    uf: "",
    municipio: "",
  },
];

export const feriadosNacio = feriadosNacionais.map(feri => {
    return Feriados.formatarFeriado(feri,"nacionais","purple")
})