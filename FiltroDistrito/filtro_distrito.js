var provincia_1 = new Array("-", "Chachapoyas", "Bagua", "Luya");
var provincia_2 = new Array("-", "Anta", "Canas", "Espinar");
var provincia_3 = new Array("-", "Canta", "Huaral", "Huaura");


var distrito_1 = new Array("-", "Aramango", "Copallin", "Imaza");
var distrito_2 = new Array("-", "Coya", "Lamay", "Lares");
var distrito_3 = new Array("-", "Comas", "Carabayllo", "San Martin de Porres");

var provincias = [
    [],
    provincia_1,
    provincia_2,
    provincia_3,
];

var distritos = [
    [],
    distrito_1,
    distrito_2,
    distrito_3,
];

function cambiar_provincia() {
    // tomamos el valor de select del departamento
    var departamento;
    departamento = document.fd.departamento[document.fd.departamento.selectedIndex].value;
    console.log(departamento)

    // vemos si el departamento esta definido
    if (departamento != 0) {
        mis_provincias = provincias[departamento];
        console.log("mis_prov:", mis_provincias);
        // numero de provincias
        num_provincias = mis_provincias.length;
        // definimos la cantidad de valores del select
        document.fd.provincia.length = num_provincias;

        document.fd.provincia.options[0].text = "Eliga provincia";

        // insertar cada provincia dentro del select
        for (var i = 0; i < num_provincias; i++) {
            document.fd.provincia.options[i].value = mis_provincias.indexOf(mis_provincias[i]);
            document.fd.provincia.options[i].text = mis_provincias[i];
        }

    } else {
        //si no hay provincias seleccionadas, se elimina del select
        document.fd.provincia.length = 1;
        // colocar el guion como unica opción (valor y texto)
        document.fd.provincia.options[0].value = "-";
        document.fd.provincia.options[0].text = "-";
    }
    // establer la primero opcion por defecto
    document.fd.provincia.options[0].selected = true;
}

function cambiar_distrito() {
    var provincia;
    provincia = document.fd.provincia[document.fd.provincia.selectedIndex].value;
    console.log("prov:", provincia);

    if (provincia != 0) {
        mis_distritos = distritos[provincia];
        num_distritos = mis_distritos.length;
        document.fd.distrito.length = num_distritos;
        document.fd.distrito.text = "Eliga provincia";

        for (var i = 0; i < num_distritos; i++) {
            document.fd.distrito.options[i].value = mis_distritos[i];
            document.fd.distrito.options[i].text = mis_distritos[i]
        }
    } else {
        document.fd.distrito.length = 1;
        document.fd.distrito.options[0].value = "-";
        document.fd.distrito.options[0].text = "-";
    }
    document.fd.distrito.options[0].selected = true;
}