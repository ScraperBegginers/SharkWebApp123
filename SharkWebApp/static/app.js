const getRewardBtn = document.querySelector('.main-button');
let tg = window.Telegram.WebApp;

getRewardBtn.addEventListener('click', () => {
    tg.openLink("https://google.com");
})