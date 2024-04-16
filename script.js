// Utilizando Parcel para uso de modulos ES6
import { Calendar } from "@fullcalendar/core";
import ptLocale from "@fullcalendar/core/locales/pt-br"; // Usar português
import dayGridPlugin from "@fullcalendar/daygrid";
import { feriadosFacul } from "./src/js/Feriados/feriadosFacultativos";
import { feriadosNacio } from "./src/js/Feriados/feriadosNacionais";
import { feriadosNacio } from "./src/js/Feriados/feriadosNacionais";
//import { feriadosEstad } from "./Feriados/feriadosEstaduais";
import interactionPlugin from "@fullcalendar/interaction";

const formAdicionar = document.querySelector(".formDta");
const textoInfo = document.querySelector(".infoText");
const facEl = document.getElementById("feri-fac");
const nacEl = document.getElementById("feri-nac");

let calendarEl = document.getElementById("calendar");
let calendar = new Calendar(calendarEl, {
  plugins: [dayGridPlugin, interactionPlugin],
  locale: ptLocale,
  height: 800, // Altura do calendario
  selectable: true,
  dateClick: function (informa) {
    // O calendario possui o dateClick para retornar informações do dia clicado. Fazer um form popup para pegar dados para criar o evento
    // Id unico para os eventos
    const idDinamico = `custom_${Math.floor(
      Math.random() * 100
    )}_${Date.now()}`;
    calendar.addEvent({
      id: idDinamico,
      title: "Click para modificar evento...",
      start: `${informa.dateStr}`, // TODO: Sistema de hora
      color: "gray",
    });
  },
  initialView: "dayGridMonth",
  headerToolbar: {
    left: "title",
    center: "",
    right: "prev,next today",
  },
});
calendar.render();

// Var global
let idEvento = "";

// O evento é delegado ao parente Calendário
const calendarioCompleto = document.querySelector(".fc-dayGridMonth-view");
calendarioCompleto.addEventListener("click", function (e) {
  // Escutando se o alvo foi nessa classe
  if (e.target.closest(".fc-event")) {
    renderizarForm(e.target.closest(".fc-event").fcSeg.eventRange.def);
  }
});

// Controle das datas de feriados
function criaERemoveDatas() {
  //  Usa o ID para descobrir se são feriados facultativos ou nacionais, carregando a lista deles dinamicamente
  const tipoFeriado = this.id === "feri-fac" ? feriadosFacul : feriadosNacio;
  // Se estiver marcado adiciona os eventos
  if (this.checked) {
    // Anda pela array e cria os objetos especificos
    tipoFeriado.forEach((item) => {
      calendar.addEvent(item);
    });
  }
  // Se estiver desmarcado, remove os eventos
  else {
    // Anda pela array e remove os objetos com id especifico
    tipoFeriado.forEach((item) => {
      calendar.getEventById(item.id).remove();
    });
  }
}

function eventosForm(eventObj) {
  // eventObj são os dados do evento, que são jogados para esta função callback no addEventListener

  const evento = calendar.getEventById(idEvento);

  // Função para não repetir estas ações diversas vezes
  function removerEvento() {
    formAdicionar.style.display = "none";
    formAdicionar.removeEventListener("click", eventosForm); // Remove o eventListener para não duplicar chamadas
  }

  // Delegação de evento. O form recebe a checagem, mas procura qual foi o alvo do click
  if (eventObj.target.closest(".btn_modify")) {
    evento.setProp("title", document.querySelector(".nome_evento").value);
    evento.setProp("color", document.querySelector(".corEvento").value);
    localStorage.setItem(idEvento, JSON.stringify(evento)); // Salva o objeto em forma de string
    removerEvento();
  }
  if (eventObj.target.closest(".btn_remove")) {
    evento.remove();
    localStorage.removeItem(idEvento); // Remove o objeto com a chave
    removerEvento();
  }
  if (eventObj.target.closest(".btn_cancel")) {
    removerEvento();
  }
}

function renderizarEventos() {
  // Loop pelos elementos do local storage
  for (let index = 0; index < localStorage.length; index++) {
    const itemChave = localStorage.key(index);
    // Checa inicio da chave
    if (itemChave.startsWith("custom_")) {
      // Adiciona o objeto no calendário
      calendar.addEvent(JSON.parse(localStorage.getItem(itemChave)));
    }
  }
}

function limparStorage() {
  localStorage.clear();
  location.reload(); // Recarrega página
}

function renderizarForm(info) {
  // Caso não seja um evento criado pelo usuário, ele não deve mexer
  if (!info.publicId.startsWith("custom_")) return;

  formAdicionar.style.display = "block"; // Mostra o form

  idEvento = info.publicId; // Coloca o valor do id na global

  formAdicionar.addEventListener("click", eventosForm); // Chama a function de pegar eventos nos botões, enviando um apontador para o evento
}

// Função para carregar mudanças basicas
function init() {
  renderizarEventos();
  // Criando evento para as checkboxs de feriados
  nacEl.checked = false;
  facEl.checked = false;
  facEl.addEventListener("click", criaERemoveDatas);
  nacEl.addEventListener("click", criaERemoveDatas);

  // Modificando texto dos botões de mover mês
  document
    .querySelector(".fc-prev-button")
    .insertAdjacentText("afterbegin", "Anterior"); // Anterior <
  document
    .querySelector(".fc-next-button")
    .insertAdjacentText("beforeend", "Proximo"); // > Proximo

  // Eventos para o botão e pagina de info
  document.querySelector(".infoButton").addEventListener("click", function () {
    textoInfo.style.display = "block";
  });
  document.querySelector(".buttonClose").addEventListener("click", function () {
    textoInfo.style.display = "none";
  });

  // Criando evento de limpeza
  document
    .querySelector(".limparEventos")
    .addEventListener("click", limparStorage);
}
init();
