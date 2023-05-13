let counter = 0;
let timer;

window.onload = function () {
  document.querySelector('#id_h1').innerHTML = counter;
  declareViewEvents();
};

function declareViewEvents() {
  let play_btn = document.querySelector('#play_btn');
  let stop_btn = document.querySelector('#stop_btn');
  play_btn.addEventListener('click', play);
  stop_btn.addEventListener('click', stop);
}

function stop() {
  clearInterval(timer);
}

function play() {
  clearInterval(timer);
  timer = setInterval(function () {
    counter++;
    document.querySelector('#id_h1').innerHTML = counter;
    if (counter >= 5) {
      clearInterval(timer);
    }
  }, 1000);
}
