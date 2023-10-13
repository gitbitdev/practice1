var title = document.createElement("title");

title.innerHTML = "Titulo";

var head = document.getElementsByTagName("head")[0].appendChild(title);





var titleIcon = document.createElement("link");

titleIcon.rel = "icon";
titleIcon.type = "image/x-icon";
titleIcon.href = "favicon.png";
document.getElementsByTagName("head")[0].appendChild(titleIcon);