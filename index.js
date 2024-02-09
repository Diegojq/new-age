//input selectors
const inputMonth = document.getElementById("inputMonth");
const inputDay = document.getElementById("inputDay");
const inputYear = document.getElementById("inputYear");

//error message selectors
const errorMessageMonth = document.getElementById("errorMessageMonth");
const errorMessageDay = document.getElementById("errorMessageDay");
const errorMessageYear = document.getElementById("errorMessageYear");

//result selectors
const resultAge = document.getElementById("resultAge");
const resultMonths = document.getElementById("resultMonths");
const resultDays = document.getElementById("resultDays");

//send selector
const submit = document.getElementById("submit");

const form = document.getElementById("form");

function validateMonth() {
  const valueInputMonth = inputMonth.value;
  const isEmpty = valueInputMonth.length === 0;
  const validMonth = valueInputMonth > 0 && valueInputMonth < 13;

  if (isEmpty) {
    inputMonth.classList.add("error");
    errorMessageMonth.innerText = "Este campo es requerido";
  } else if (!validMonth) {
    inputMonth.classList.add("error");
    errorMessageMonth.innerText = "No es un mes correcto";
  } else {
    inputMonth.classList.remove("error");
    errorMessageMonth.innerText = "";
  }
}

function validateDay() {
  const valueInputDay = inputDay.value;
  const isEmpty = valueInputDay.length === 0;
  const validDay = valueInputDay > 0 && valueInputDay < 32;

  if (isEmpty) {
    inputDay.classList.add("error");
    errorMessageDay.innerText = "Este campo es requerido";
  } else if (!validDay) {
    inputDay.classList.add("error");
    errorMessageDay.innerText = "No es un dia correcto";
  } else {
    inputDay.classList.remove("error");
    errorMessageDay.innerText = "";
  }
}

function validateYear() {
  const valueInputYear = inputYear.value;
  const isEmpty = valueInputYear.length === 0;

  if (isEmpty) {
    inputYear.classList.add("error");
    errorMessageYear.innerText = "Este  campo es requerido";
  } else {
    inputYear.classList.remove("error");
    errorMessageYear.innerText = "";
  }
}
function calculateYears() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();

  const valueInputDay = inputDay.value;
  const valueInputMonth = inputMonth.value;
  const valueInputYear = inputYear.value;

  let userAge = currentYear - valueInputYear;
  let userMonths = currentMonth - valueInputMonth;
  let userDays = currentDay - valueInputDay;

  /*verificar si los meses ingresados por el usuario son negativos o 
  si son cero pero el día actual es menor que el día ingresado.
   En caso de que se cumpla alguna de estas condiciones, 
   se decrementa la edad del usuario en un año y se ajusta el número de meses restantes para representar un valor positivo y correcto.*/
  if (userMonths < 0 || (userMonths === 0 && currentDay < valueInputDay)) {
    userAge--;
    userMonths = 12 - Math.abs(userMonths);
  }

  /* los días ingresados por el usuario son negativos, lo que indica que se necesita realizar un ajuste. En este caso, se reduce el número de meses 
  en uno y se calculan los días restantes en el mes anterior al actual. 
  Este ajuste garantiza que los días ingresados estén dentro del rango válido para el mes correspondiente, manteniendo la consistencia en el cálculo de fechas. */
  if (userDays < 0) {
    userMonths--;
    const lastDayPreviousMonth = new Date(
      currentYear,
      currentMonth - 1,
      0
    ).getDate();
    userDays = lastDayPreviousMonth - Math.abs(userDays) + userDays + 1;
  }

  resultAge.innerText = userAge;
  resultMonths.innerText = userMonths;
  resultDays.innerText = userDays;
}

const handlerSubmit = () => {
  validateMonth();
  validateDay();
  validateYear();
  calculateYears();
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  handlerSubmit();
});
