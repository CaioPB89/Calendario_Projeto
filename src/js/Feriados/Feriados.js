//  Export de uma função de formatação que todos os feriados usam

export function formatarFeriado(feriado, id, cor) {
  return {
    id: id, // id é o publicId
    title: feriado.nome,
    date: feriado.data.split("/").reverse().join("-"), // dia/mes/ano -> ano-mes-dia (Separa e array, reverte ela e junta novemente)
    color: cor,
  };
}
