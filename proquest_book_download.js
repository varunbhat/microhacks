data = document.getElementsByClassName('mainViewerImg');
for (var i = 0; i < data.length; i++) {
    image = localStorage.setItem('book' + i + ".png",data[i].src);
}

document.body.innerHTML= "";
for (var i = 0; i < data.length; i++) {
    image = localStorage.getItem('book' + i + ".png");
    ig = document.createElement('img');
    ig.src = image;
    ig.style = "width: 100%";
    document.body.appendChild(ig);
}
