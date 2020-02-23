import { convertMs } from "./convert.js";

const dateParagraph = document.querySelector(".dateP");
let currentDate = new Date();
let PastDate = new Date(2019, 8, 11, 15);

function initDate() {
  currentDate = new Date();
  let timeDif = currentDate.getTime() - PastDate.getTime();
  let displayDate = ({ d, h, m, s }) => {
    return `${d} Days ${h}:${m}:${s}`;
  };
  dateParagraph.innerText = displayDate(convertMs(timeDif));
}

initDate();

setInterval(() => {
  initDate();
}, 1000);
