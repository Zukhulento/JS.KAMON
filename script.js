window.addEventListener("load", jugar);
window.addEventListener("load", game_over);

//Código por Luis Manuel Matus :D
var datos = {
    kamon: '',
    ataque: '',
    kamon_enemigo: '',
    ataque_enemigo: ''
}
function game_over() {
  let refresh = document.getElementById("refresh");
  refresh.addEventListener("click", function () {
    location.reload();
  });
  let no_opc = document.getElementById("game_over");
  no_opc.addEventListener("click", function () {
    let contenido = document.getElementById("content");
    contenido.innerHTML =
      '<img src="./img/UX/giphy.gif" alt="sad" width="200px" height="100px">';
    document.body.classList.add("gradiante4");
  });
}
function cambiar_atributos_kamons(nombre, url, nombre_enemigo, url_enemigo) {
  document.getElementById("message_out").innerHTML =
    "Bien, has seleccionado a " +
    nombre +
    " Ahora selecciona el ataque que quieres hacer!";
  //Cambiando imagen por la del kamon seleccionado
  let img = document.getElementById("kamon1");
  img.src = "./img/kamons/" + url;
  //Cambiando nombre en cuadro de vida
  let nombrekumon = document.getElementById("nombre_kumon1");
  nombrekumon.innerHTML = nombre;
  //Cambiando el enemigo para que no se repita
  //Cambiando imagen por la del kamon seleccionado
  let img2 = document.getElementById("kamon2");
  img2.src = "./img/kamons/" + url_enemigo;
  let nombre2 = document.getElementById("nombre_kumon2");
  nombre2.innerHTML = nombre_enemigo;
}
function ataque(damage){
    var opcs = document.getElementById("opcs");
    var message = document.getElementById("messages");
    opcs.style.display = "none";
    message.style.display = "block";
    switch(damage){
        case 1:
            document.getElementById("message_out").innerHTML = datos.kamon_enemigo+" no puede más!"
            var barraPC = document.getElementById("barra_de_vida2")
            barraPC.classList.add("muerto") 
            setTimeout(function(){
                document.getElementById("modal").style.display = "block";
                
            }, 1000);
            break;
        case 2:
            document.getElementById("message_out").innerHTML = datos.kamon_enemigo+" sufrió un poco de daño!"
            var barraPC = document.getElementById("barra_de_vida2")
            barraPC.classList.add("tocado")
            var barraplayer = document.getElementById("barra_de_vida")
            setTimeout(function(){
                document.getElementById("message_out").innerHTML = datos.kamon_enemigo+" usó "+datos.ataque_enemigo+"!" 
                barraplayer.classList.add("muerto")
                setTimeout(function(){
                    document.getElementById("modal").style.display = "block";
                }, 1000);
            }, 4000);    
            break;
        case 3:
            document.getElementById("message_out").innerHTML = datos.kamon_enemigo+" ah escapado!"
            /*Crear efecto de desaparecer */
            document.getElementById("kamon2").style.display = "none"
            document.getElementById("caja_de_vida2").style.display = "none"
            setTimeout(function(){
                document.getElementById("modal").style.display = "block";
                
            }, 1000);
            break;
        case 4:
                document.getElementById("message_out").innerHTML = datos.kamon_enemigo+" es inmune!"
                var barraplayer = document.getElementById("barra_de_vida")
                setTimeout(function(){
                    document.getElementById("message_out").innerHTML = datos.kamon_enemigo+" usó "+datos.ataque_enemigo+"!" 
                    barraplayer.classList.add("muerto")
                    setTimeout(function(){
                        document.getElementById("modal").style.display = "block";
                    }, 1000);
                }, 4000);    
            break;
    }

}
function ejecutar (){
    var select = document.getElementById('opc-atack');
    var value = select.options[select.selectedIndex].value; //Con esto se consigue el ataque seleccionado
    switch(datos.kamon){
        case 1: // Se escogió pikachu
            if(value==1){//Se escogió impactrueno
                datos.ataque = 'Impactrueno';
                datos.kamon_enemigo = 'Squirtle'
                ataque(1)//1 = fatal
            }else if(value==2){//Se escogió cola de hierro
                datos.ataque = 'Cola de hierro';
                datos.ataque_enemigo = 'Chorro de agua';
                datos.kamon_enemigo = 'Squirtle'
                ataque(2);
            }else{
                alert("Seleccione un ataque valido")
                location.reload();
            }
            break;
        case 2: //Se escogió squirtle
            if(value==1){//Se escogió patada ninja
                datos.ataque = 'Patada Ninja';
                datos.kamon_enemigo = 'Pikachu'
                datos.ataque_enemigo = 'Impactrueno';
                ataque(2)//4 = squirrel pick
            }else if(value==2){//Se escogió cola de hierro
                datos.ataque = 'Chorro de agua';
                datos.kamon_enemigo = 'Pikachu'
                ataque(1);
            }else{
                alert("Seleccione un ataque valido")
                location.reload();
            }
            break;
        case 3://Se escogió evee
            if(value==1){
                datos.ataque = 'Huír';
                datos.kamon_enemigo = 'Squirtle'
                ataque(3)//1 = fatal
            }else if(value==2){
                datos.ataque = 'Golpe de Piedra';
                datos.kamon_enemigo = 'Squirtle'
                ataque(1);
            }else{
                alert("Seleccione un ataque valido")
                location.reload();
            }
            break;
        case 4: //Se escogió charmander
            if(value==1){
                datos.ataque = 'Lluvia de fuego';
                datos.kamon_enemigo = 'Squirtle'
                datos.ataque_enemigo = 'Chorro de agua';
                ataque(4)// 4 = regresado
            }else if(value==2){
                datos.ataque = 'Golpe Supremo';
                datos.kamon_enemigo = 'Squirtle'
                ataque(1);
            }else{
                alert("Seleccione un ataque valido")
                location.reload();
            }
            break;
        case 5:
            if(value==1){
                datos.ataque = 'Ola oceánica';
                datos.kamon_enemigo = 'Squirtle'
                datos.ataque_enemigo = 'Patada Ninja';
                ataque(1)
            }else if(value==2){
                datos.ataque = 'Patada Ninja';
                datos.kamon_enemigo = 'Squirtle'
                ataque(1);
            }else{
                alert("Seleccione un ataque valido")
                location.reload();
            }
            break;
    }
}
function cambiar_ataques(ataques) {
  //Se escogió pikachu
  var ataques_mostrados = document.getElementById("opc-atack");
  var i = 0;
  ataques.forEach((element) => {
    i = i + 1;
    ataques_mostrados.innerHTML +=
      "<option value=" + i + " id=ataque" + i + ">" + element + "</option>";
  });
  //Esto ocurre luego de haber escogido el personaje y es la fase de ataque
    var boton_ataque = document.getElementById("atack_selected")
    boton_ataque.addEventListener("click", ejecutar );
}
function jugar() {
    let button = document.getElementById("selected_kamon");
    button.addEventListener("click", function (event) {
      var kamon_selected = document.getElementById("opc-kamon");
      if (kamon_selected.value == "1") {
        cambiar_atributos_kamons(
          "Pikachu",
          "580b57fcd9996e24bc43c325.png",
          "Squirtle",
          "580b57fcd9996e24bc43c32a.png"
        );
        var ataques = ["Impactrueno", "Cola de hierro"];
        datos.kamon = 1;
        datos.kamon_enemigo = 2;
        cambiar_ataques(ataques);
      } else if (kamon_selected.value == "2") {
        cambiar_atributos_kamons(
          "Squirtle",
          "580b57fcd9996e24bc43c32a.png",
          "Pikachu",
          "580b57fcd9996e24bc43c325.png"
        );
        datos.kamon = 2;
        datos.kamon_enemigo = 1;
        var ataques = ["Patada Ninja", "Chorro de agua"];
        cambiar_ataques(ataques);
      } else if (kamon_selected.value == "3") {
        cambiar_atributos_kamons(
          "Evee",
          "evee.png",
          "Squirtle",
          "580b57fcd9996e24bc43c32a.png"
        );
        datos.kamon = 3;
        datos.kamon_enemigo = 2;
        var ataques = ["Huír", "Golpe de Piedra"];
        cambiar_ataques(ataques);
      } else if (kamon_selected.value == "4") {
        cambiar_atributos_kamons(
          "Charmander",
          "charmander.png",
          "Squirtle",
          "580b57fcd9996e24bc43c32a.png"
        );
        datos.kamon = 4;
        datos.kamon_enemigo = 2;
        var ataques = ["Lluvia de fuego", "Golpe supremo"];
        cambiar_ataques(ataques);
      } else if (kamon_selected.value == "5") {
        cambiar_atributos_kamons(
          "Piplop",
          "piplop.png",
          "Squirtle",
          "580b57fcd9996e24bc43c32a.png"
        );
        datos.kamon = 5;
        datos.kamon_enemigo = 2;
        var ataques = ["Ola oceánica", "Patada Ninja"];
        cambiar_ataques(ataques);
      } else {
        alert("Este kamon no existe");
        location.reload();
      }
      var opcs = document.getElementById("opcs");
      var message = document.getElementById("messages");
      setTimeout(function () {
        opcs.style.display = "block";
        message.style.display = "none";
      }, 4000);
    });
}

