var path = window.location.pathname;
var page = path.split("/").pop();
document.write("<nav class= 'navbar'>")
document.write("<a href='/' style = 'float: left; font-family: Impact; font-size: xx-large; color: #C7DD06ff;'>JORJ WORLD</a>")
document.write("<img src= './comics/jorjworld.gif'  style = 'float: left; height: 72px; width: 72px;display: block; padding: 3px' />");
document.write("<ul>")
document.write(" <li>")
document.write("<a href='/'>  <button class = 'btn'> JorjDinos </button></a>")
document.write("</li>")
document.write("<li>")
document.write("<a href='/brainrot.html'>  <button class = 'btn'> JorjBrainrot </button> </a>")
document.write("</li>")
document.write("<li>")
document.write("<a href='/comics.html'> <button class = 'btn'> JorjComics </button></a>")
document.write("</li>")

document.write("<li>")
document.write("<a href='/'>  <button class = 'btn'> JorjProjects </button> </a>")
document.write("</li>")

document.write("<li>")
document.write("<a href='/AboutMe.html'> <button class = 'btn'> JorjAboutMe</button></a>")
document.write("</li>")
document.write("</ul>")
document.write("</div>")
document.write("</nav>")