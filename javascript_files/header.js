var path = window.location.pathname;
var page = path.split("/").pop();

document.write("<header class='navbar'>")
document.write("<button class='header__button' id='btnNav' type='button' style = 'float: left; margin-right: 14px;'>")
document.write("<i class='material-icons' style = 'font-size: 30px; padding: 3px;'>menu</i>")
document.write("</button>")
document.write("<a href='/' style = 'float: left; font-family: Impact; font-size: x-large; color: #C7DD06ff; text-decoration: none; display: block; padding: 3px'>JORJ WORLD</a>")
document.write("<img src= './comics/jorjworld.gif'  style = 'float: left; height: 36px; width: 36px;display: block; padding: 3px' />")
document.write("</header>")

document.write("<nav class='nav'>")
document.write("<div class='nav__links'>")
document.write(" <div class = 'icons' style = 'padding: 5px; margin-bottom: 45px; margin-top: 10px;'>")
document.write(" <button class='header__button' id='btnNav' type='button' style = 'float: left; margin-right: 14px;'>")
document.write("    <i class='material-icons' style = 'font-size: 30px; padding: 3px;'>menu</i>")
document.write(" </button>")
document.write(" <a href='/' style = 'float: left; font-family: Impact; font-size: x-large; color: #C7DD06ff; text-decoration: none; display: block; padding: 3px'>JORJ WORLD</a>")
document.write(" <img src= './comics/jorjworld.gif'  style = 'float: left; height: 36px; width: 36px;display: block; padding: 3px' />")
document.write(" </div>")
document.write(" <a href='/AboutMe.html' class='nav__link '>")
document.write("    <i class='material-icons'>fingerprint</i>")
document.write("     JorjAboutMe")
document.write(" </a>")
document.write(" <a href='/Projects.html' class='nav__link'>")
document.write("    <i class='material-icons'>lightbulb</i>")
document.write("     JorjProjects")
document.write("  </a>")
document.write("  <a href='/comics.html' class='nav__link'>")
document.write("    <i class='material-icons'>bookmark</i>")
document.write("     JorjComics")
document.write("   </a>")
document.write("  <a href='/brainrot.html' class='nav__link'>")
document.write("      <i class='material-icons'>dangerous</i>")
document.write("      JorjBrainrot")
document.write("  </a>")
document.write("  <a href='/' class='nav__link'>")
document.write("     <i class='material-icons'>pets</i>")
document.write("    JorjDinos")
document.write(" </a>")
document.write("</div>")
document.write("<div class='nav__overlay'></div>")
document.write("</nav>")

document.addEventListener("DOMContentLoaded", ()=> {
    const nav = document.querySelector(".nav");

    document.querySelector("#btnNav").addEventListener("click", () => {
        nav.classList.add("nav--open");
    });

    document.querySelector(".nav__overlay").addEventListener("click", () => {
        nav.classList.remove("nav--open");
    });

});