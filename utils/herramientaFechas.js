const moment = require("moment");
const tiempo = moment();



const hora = tiempo.hour()+ ":"+ tiempo.minutes();
const fecha = tiempo.format(" DD [de] MMM [del año] YYYY");
const herramientaFechas = { hora, fecha };

module.exports = {
  herramientaFechas
};
