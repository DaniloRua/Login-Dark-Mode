function darkmode(){
 console.log("Dark mode enabled ");
 darkOn();
}

function darkOn(){
    const dark = document.querySelector(".dark-off");
    dark.classList.toggle("dark-on");

}