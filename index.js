const addDays = require("date-fns/addDays");
const daysFunction = (days) => {
  newDate = addDays(new Date(2020, 7, 22), days);
  return `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`;
};
module.exports = daysFunction;
console.log(daysFunction(22));
