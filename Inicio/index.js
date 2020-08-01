document.getElementById("defecto").click();

function abrir(e, TipoProducto) {

    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");

    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }


    document.getElementById(TipoProducto).style.display = "block";
    e.currentTarget.className += " active";
}

function funcionmodal() {
    var modal = document.getElementById('modal');
    modal.style.width = '100%';
    modal.style.height = '100%';
}

function cerrarmodal() {
    var modal = document.getElementById('modal');
    modal.style.width = '0';
    modal.style.height = '0';
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.width = '0';
        modal.style.height = '0';
    }
}