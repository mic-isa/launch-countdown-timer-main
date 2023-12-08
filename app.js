const dealine = document.querySelector(".container");

const time = document.querySelectorAll(".time p");

let tempDate = new Date();

let tempYear = tempDate.getFullYear();

let tempmonth = tempDate.getMonth();

let tempDay = tempDate.getDate(); 

let futureDate = new Date(tempYear, tempmonth, tempDay + 9, 11, 30, 0);

let futureTime = futureDate.getTime();

function countDown() {

  let today = new Date().getTime();

  let t = futureTime - today;

  let oneDay = 24 * 60 * 60 * 1000;

  let oneHour = 60 * 60 * 1000;

  let oneMinute = 60 * 1000;

  let oneSecond = 1000;

  let days = Math.floor(t / oneDay);

  let hours = Math.floor((t % oneDay) / oneHour);

  let minutes = Math.floor((t % oneHour) / oneMinute);

  let seconds = Math.floor((t % oneMinute) / oneSecond);

  let values = [days, hours, minutes, seconds];

  function format(item) {

    if (item < 10) {

      return `0${item}`;

    }
    return item.toString(); 
    
  }

  time.forEach(function (item, index) {

    item.innerHTML = format(values[index]);
    

  });

  if (t < 0) {

    dealine.innerHTML = `<p class="expire"> Sorry, this has expired </p>`; 

  }
}

setInterval(countDown, 1000);
countDown();


