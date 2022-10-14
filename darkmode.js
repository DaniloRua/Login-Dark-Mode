const body = document.querySelector('body');
const board = document.querySelector('.board');
const apresentation = document.querySelector('.apresentation-box');
const loginBox = document.querySelector('.login-box');

function darkmode() {
    console.log("Dark mode enabled ");
    darkOn();
}

function darkOn() {
    const dark = document.querySelector(".dark-off");
    dark.classList.toggle("dark-on");
    body.classList.toggle("body-dark");
    board.classList.toggle("board-dark");
    apresentation.classList.toggle("apresentation-box-dark");
    loginBox.classList.toggle("login-box-dark");

}