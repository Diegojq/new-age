const inputMonth = document.getElementById("inputMonth");
const errorMessageMonth = document.getElementById("errorMessageMonth");

const inputDay = document.getElementById("inputDay");
const errorMessageDay = document.getElementById("errorMessageDay");

const inputYear = document.getElementById("inputYear");
const errorMessageYear = document.getElementById("errorMessageYear");

const años = document.getElementById("años");
const meses = document.getElementById("meses");
const dias = document.getElementById("dias");

const submit = document.getElementById("submit");

const handlerClick = () => {
  const valueInputDay = inputDay.value;
  const valueInputMonth = inputMonth.value;
  const valueInputYear = inputYear.value;

  function month() {
    const isEmpty = valueInputMonth.length === 0;
    const validMonth = valueInputMonth > 0 && valueInputMonth < 13;

    if (isEmpty) {
      inputMonth.classList.add("rojo");
      errorMessageMonth.innerText = "Este campo es requerido";
    } else if (!validMonth) {
      inputMonth.classList.add("rojo");
      errorMessageMonth.innerText = "No es un mes correcto";
    } else {
      inputMonth.classList.remove("rojo");
      errorMessageMonth.innerText = "";
    }
  }

  function day() {
    const isEmpty = valueInputDay.length === 0;
    const validDay = valueInputDay > 0 && valueInputDay < 32;

    if (isEmpty) {
      inputDay.classList.add("rojo");
      errorMessageDay.innerText = "Este campo es requerido";
    } else if (!validDay) {
      inputDay.classList.add("rojo");
      errorMessageDay.innerText = "No es un dia correcto";
    } else {
      inputDay.classList.remove("rojo");
      errorMessageDay.innerText = "";
    }
  }

  function year() {
    const isEmpty = valueInputYear.length === 0;

    if (isEmpty) {
      inputYear.classList.add("rojo");
      errorMessageYear.innerText = "Este  campo es requerido";
    } else {
      inputYear.classList.remove("rojo");
      errorMessageYear.innerText = "";
    }
  }

  function calculateYears() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    let edad = currentYear - valueInputYear;
    let mes = currentMonth - valueInputMonth;
    let dia = currentDay - valueInputDay;

    if (mes < 0 || (mes === 0 && currentDay < valueInputDay)) {
      edad--;
      mes = 12 - Math.abs(mes);
    }

    if (dia < 0) {
      mes--;
      const ultimoDiaMesAnterior = new Date(
        currentYear,
        currentMonth - 1,
        0
      ).getDate();
      dia = ultimoDiaMesAnterior - Math.abs(dia);
    }

    años.innerText = edad;
    meses.innerText = mes;
    dias.innerText = dia;
  }

  month();
  day();
  year();
  calculateYears();
};

submit.addEventListener("click", handlerClick);
