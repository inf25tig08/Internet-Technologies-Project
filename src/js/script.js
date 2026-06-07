/* Funcion del contenido HTML */
function changeText() {
    document.getElementById("futureText").innerHTML =
        "Artificial Intelligence can generate images, music, videos and interactive content.";
}

/* Mostrar / ocultar contenido  */
function toggleContent() {

    var content =
        document.getElementById("aiContent");

    if (content.style.display == "none") {
        content.style.display = "block";
    }
    else {
        content.style.display = "none";
    }

}

/* Validacion de formulario */
function validateForm() {

    var userName =
        document.getElementById("user-name").value;

    var area =
        document.getElementById("ai-area").value;

    var aiImpact = 
        document.getElementsByName("ai-impact");
    
    var selected = false;

    for (var i = 0; i < aiImpact.length; i++) {
        if(aiImpact[i].checked){
            selected = true;
        }
    }

    if (userName == "") {

        alert("Please enter your name.");
        return false;

    }

    if (area == "") {

        alert("Please choose an AI area.");
        return false;

    }

    if (selected == false) {

        alert("Please select an awnser about AI impact");
        return false;
    }

    return true;

}


/* Integracion de XML */
function loadXMLData() {

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {
            showXMLData(this.responseXML);
        }

    };

    xhttp.open("GET", "xml/media-evolution.xml", true);
    xhttp.send();

}

function showXMLData(xml) {

    var technologies = xml.getElementsByTagName("technology");

    var table = "<table>";
    table += "<thead>";
    table += "<tr>";
    table += "<th>Name</th>";
    table += "<th>Year</th>";
    table += "<th>Category</th>";
    table += "<th>Description</th>";
    table += "</tr>";
    table += "</thead>";

    table += "<tbody>";

    for (var i = 0; i < technologies.length; i++) {

        table += "<tr>";

        table += "<td>" +
            technologies[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
            "</td>";

        table += "<td>" +
            technologies[i].getElementsByTagName("year")[0].childNodes[0].nodeValue +
            "</td>";

        table += "<td>" +
            technologies[i].getElementsByTagName("category")[0].childNodes[0].nodeValue +
            "</td>";

        table += "<td>" +
            technologies[i].getElementsByTagName("description")[0].childNodes[0].nodeValue +
            "</td>";

        table += "</tr>";
    }

    table += "</tbody>";
    table += "</table>";

    document.getElementById("xmlData").innerHTML = table;

}

/* Slider de imágenes */

function toggleFaq(id) {
    const el = document.getElementById(id);
    el.style.display = el.style.display === "none" ? "block" : "none";
}