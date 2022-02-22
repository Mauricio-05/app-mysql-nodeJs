const { format, register } = require("timeago.js");

const helpers = {};

const localeFunc = (number, index, total_sec) => {
  // number: the timeago / timein number;
  // index: the index of array below;
  // total_sec: total seconds between date to be formatted and today's date;
  return [
    ["justo ahora", "ahora mismo"],
    ["Hace %s segundos", "en %s segundos"],
    ["Hace 1 minuto", "en 1 minuto"],
    ["Hace %s minutos", "en %s minutos"],
    ["Hace 1 hora", "en 1 hora"],
    ["hace %s horas", "en %s horas"],
    ["Hace 1 día", "en 1 día"],
    ["hace %s días", "en %s días"],
    ["Hace 1 semana", "en 1 semana"],
    ["hace %s semanas", "en %s semanas"],
    ["Hace 1 mes", "en 1 mes"],
    ["hace %s meses", "en %s meses"],
    ["Hace 1 año", "en 1 año"],
    ["hace %s años", "en %s años"],
  ][index];
};
// register your locale with timeago
register("es_ES", localeFunc);

helpers.timeago = (timestamp) => {
  return format(timestamp, "es_ES");
};

module.exports = helpers;
