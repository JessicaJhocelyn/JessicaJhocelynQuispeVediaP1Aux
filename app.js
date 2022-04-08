//1. Realiza un script que pida la edad y si es 
//   mayor de 18 años indica que ya puede conducir.


/*let edad = prompt("Introduzca tu edad"); 
if (Number(edad) == edad) {                  //Comprobando que se haya introducido un numero
	if (edad > 18) {                         //Condicion de que si es mayor a 18
		document.write("Puede conducir");    //Mensaje que se imprime
	}
    else {
        document.write("No puede conducir"); 
    }
}
else {
	alert("Introduce un numero válido"); 
}*/

//_______________________________________________________________________________________________________________________



// 2. Realiza un script que pida números hasta que se pulse “cancelar”. 
// Si no es un número deberá indicarse con un «alert» y seguir pidiendo.
// Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

/*
let SumaTotal= 0;                           //DECLARAMOS LA VARIABLE SUMA
let numero;
do {                                           //BUCLE DO WHILE PARA INTRODUCIR VARIOS
    numero = prompt("Introduce un numero");    //PEDIMOS EL NÚMERO POR TECLADO
    if (Number(numero) == numero) {             //COMPROBAMOS QUE LO INTRODUCIDO ES UN NÚMERO
        numero = Number(numero);                //CONVERTIMOS EL NÚMERO EN INTEGER (POR SI ACASO)
        SumaTotal = SumaTotal + numero;                   //SUMAMOS LO QUE HAY EN LA VARIABLE SUMA CON ESE NÚMERO
    }
    else {                                      //SI LO INTRODUCIDO NO ES UN NÚMERO
        if (numero != undefined) {               //SI SE PULSÓ ACEPTAR SIN PONER UN NÚMERO VÁLIDO
            alert(numero + " No es un numero");
        }
    }
} while (numero != undefined);                              //VOLVEMOS ARRIBA MIENTRAS NO SE PULSE CANCELAR
document.write ("Suma total de los numeros:" + SumaTotal); */  //SI SE PULSÓ CANCELAR SALE DEL BUCLE E IMPRIME EL RESULTADO

//__________________________________________________________________________________________________________________________________



//3. Realiza un script que pida por teclado 3 edades y 3 nombres 
//   e indique el nombre del mayor.

//Pidiendo todos los datos
/*const nombre1 = prompt("Ingrese el Primer Nombre:");
const edad1 = Number(prompt("Ingrese la Primera Edad:"));

const nombre2 = prompt("Ingrese el Segundo Nombre:");
const edad2 = Number(prompt("Ingrese la Segunda Edad:"));

const nombre3 = prompt("Ingrese el Tercer Nombre:");
const edad3 = Number(prompt("Ingrese la Tercera Edad:"));

const maximo = Math.max(edad1, edad2, edad3); //Función max() para devolver el mayor

if (maximo == edad1) {
    document.write("El nombre con mayor edad es " + nombre1 + "  con la edad de " + edad1);
}
if (maximo == edad2) {
    document.write("El nombre con mayor edad es " + nombre2 + "  con la edad de " + edad2);
}
if (maximo == edad3) {
    document.write("El nombre con mayor edad es:  " + nombre3 + "   con la edad de:  " + edad3);
}*/

//_____________________________________________________________________________________________________________________




// 4. Genera 3 números aleatorios entre 1 y 99 pero que no se repita ninguno.

/*let i = 0;
let num;
let num_uno = 0;
let num_dos = 0;
let num_tres = 0;
do {
    num = Math.floor((Math.random() * 99) + 1);
    if ((num != num_uno) && (num != num_dos) && (num != 3)) {
        document.write(num + "<br>");
        i++;
        if (i == 1) {
            num_uno = num;
        }
        if (i == 2) {
            num_dos = num;
        }
        if (i == 3) {
            num_tres = num;
        }
    }
} while (i < 3);*/


//__________________________________________________________________________________________________________________




// 5. Realiza un script que cuente el número de vocales que tiene un texto.

/*let texto = prompt("Introduce una  texto:");
    let numchar = texto.length;    //longitud del string.
    texto = texto.toUpperCase();  
    let caracter;
    let contador = 0;
    let i;
    for (i = 0; i < numchar; i++) {
        caracter = texto.charAt(i);    //recupera el caracter i del string.
        if ((caracter == "A") || (caracter == "E") || (caracter == "I") || (caracter == "O") || (caracter == "U")) {
            contador++;
        }
    }
    document.write("El número de Vocales es: " + contador + ".");*/



//___________________________________________________________________________________________________________________________




// 6. Pedimos una cadena de texto que sabemos que puede contener paréntesis.
// Realiza un script que extraiga la cadena que se encuentra entre los paréntesis.
// Ejemplo: Si escribimoe el texto “Hola (que) tal” se mostrará “que”. 
// Si no existe el signo “(“ mostrará una cadena vacía y si existe el signo 
// “(“pero no el signo “)” mostrará desde el primer paréntesis hasta el final.

/*let cadena = prompt("Introduce un Texto que tenga paréntesis:");
let numcaracter = cadena.length;       //Longitud de la cadena
let i;
let carac;
let salida = "";
let copiar = false;
    
for (i = 0; i < numcaracter; i++) {
    carac = cadena.charAt(i);    //recupera el caracter i del string.
    if (carac == ")") 
    {
        copiar = false;
    }
    if (copiar)
    {
        salida = salida + carac;
    }
    if (carac == "(") 
    {
            copiar = true;
    }
}
document.write(salida);*/



//______________________________________________________________________________________________________________



//7. Realiza un script que pida una cadena de texto y la devuelva al revés.
// Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

/*let cadena = prompt("Introduzca un Texto:");
let numecaracter = cadena.length;
let i;
let carac;
let salida = "";
for (i = 0; i < numecaracter; i++) {
    carac = cadena.charAt(i);   
    salida = carac + salida;
}
document.write(salida);*/


//________________________________________________________________________________________________________________________________________________



//8. Realiza un script que muestre la serie de fibonacci hasta un número
//   entre 1 y 100 pedido por teclado.

/*let num = Number(prompt("Introduzca un numero entre 1 y 100"));
    if((num >= 1) && (num <= 100)) {
        let a = 0;
        let b = 1;
        let c;
        document.write(a + "<br>");        //Se imprime 0 que es el 1er numero, no se lo pone al bucle

        for (let i = 0; i < (num-1); i++) {   //imprimiendo los demas numeros (numero-1 porque ya se imprimio uno)
            c = a + b;
            document.write(c + "<br>");    
            b = a;
            a = c;
        }
    }
    else {
        alert("Número erróneo");
    }*/




//__________________________________________________________________________________________________________________________________________________





    //9. Realiza un juego de Piedra Papel Tijera contra el Pc.

    /*let Totaljugados = 0;
    let Totalganados = 0;
    let Totalperdidos = 0;
    do {
        let jugada = prompt(" ¿Qué eliges? escribe: \"piedra\", \"papel\" o \"tijera\"");
        
        let aleatorio = Math.floor((Math.random() * 9) + 1);   //guardando un num aleatorio del 1 al 9
        let elige = "";
        if (aleatorio <= 3) {
            elige = "piedra";
        }
        else if (aleatorio <= 6) {
            elige = "papel";
        }
        else {
            elige = "tijera";
        }

        if ((jugada == "piedra") && (elige == "piedra")) {
            alert("Jugador: "+jugada+"  -  "+"PC: "+elige+"    <<Empate>>");
        }
        else if ((jugada == "piedra") && (elige == "papel")) {
            alert("Jugador: "+jugada+"  -  "+"PC: "+elige+"   <<Gana la PC>>");
            Totalperdidos++;
        }
        else if ((jugada == "piedra") && (elige == "tijera")) {
            alert("Jugador: "+jugada+"  -  "+"PC: "+elige+"   <<Gana el Jugador>>");
            Totalganados++;
        }
        else if ((jugada == "papel") && (elige == "papel")) {
            alert("Jugador: "+jugada+"  -  "+"PC: "+elige+"    <<Empate>>");
        }
        else if ((jugada == "papel") && (elige == "tijera")) {
            alert("Jugador: "+jugada+"   - "+"PC: "+elige+"     <<Gana la PC");
            Totalperdidos++;
        }
        else if ((jugada == "papel") && (elige == "piedra")) {
            alert("Jugador: "+jugada+"  -  "+"PC: "+elige+"  <<Gana el Jugador>>");
            Totalganados++;
        }
        else if ((jugada == "tijera") && (elige == "tijera")) {
            alert("Jugador: "+jugada+"  -  "+"PC: "+elige+"   <<Empate>>");
        }
        else if ((jugada == "tijera") && (elige == "piedra")) {
            alert("Jugador: "+jugada+"  -  "+"PC: "+elige+"   <<Gana la PC>>");
            Totalperdidos++;
        }
        else if ((jugada == "tijera") && (elige == "papel")) {
            alert("Jugador: "+jugada+"  -  "+"PC: "+elige+"   <<Gana el Jugador>>");
            Totalganados++;
        }
        Totaljugados++;

    } while (confirm("Jugar de nuevo"));

    document.write("Partidas Jugadas: "+Totaljugados+"<br>");
    document.write("Partidas Ganadas: "+Totalganados+"<br>");
    document.write("Partidas Perdidas: "+Totalperdidos+"<br>");
    document.write("Partidas Empatadas: "+(Totaljugados-Totalganados-Totalperdidos));*/




//_______________________________________________________________________________________________________________________




//  10. Crea una función que reciba 2 parámetros, precio e iva, 
//      y devuelva el precio con iva incluido. Si no recibe el iva,
//      aplicará el 21 por ciento por defecto.

/*function precioiva(precio, iva){
    iva = iva || 21
    let coniva = (precio + precio*iva/100);
    let total;
    return coniva;
  }
  let precio = Number(prompt("Introduzca un precio"));
  let iva = Number(prompt("Introduzca el iva"));
  if(iva > 0){
     total = precioiva(precio, iva);
  }
  else{
     total = precioiva(precio);
  }
  document.write("Precio sin iva: " + precio);
  document.write("<br>Iva: " + iva+"% del precio"+"  ,el cual equivale a: " + precio*iva/100);
  document.write("<br>Precio más Iva: " + total);*/




//__________________________________________________________________________________________________________________





//12. Realiza un script que muestre un reloj en pantalla con fecha y hora 
//    y que se actualice cada segundo. Función setTimeout().


/*let reloj = 0;
    let fre = 1000;
    function actualiza() {
      let ahora = new Date();
      let fecha = ahora.getDate() + " - " + (ahora.getMonth() + 1) + " - " + ahora.getFullYear();
      let hora = ahora.getHours() + ":" + ahora.getMinutes() + ":" + ahora.getSeconds();
      let escribe = 'Fecha: ' + fecha + ' <br> Hora: ' + hora ;
      let situa = document.getElementById('capa0');
      situa.innerHTML = escribe;
      reloj = setTimeout("actualiza()", fre);
    }*/


//___________________________________________________________________________________________________________________________




//13. Programa una función que dada una fecha valida determine cuantos años han pasado hasta el día de hoy.
/*const alFuturo = (fecha = undefined)=>{
    if(fecha === undefined) return console.warn('Olvidaste pasarme la fecha');
    if(!(fecha instanceof Date)) return console.error('El valor ingresado no es una fecha vaildad');
    
    let calculoAnios = new Date().getTime() - fecha.getTime();
    let transMiles = 1000*60*60*24*365;
    let anios = Math.floor(calculoAnios/transMiles);
    return (Math.sign(anios) === -1)
    ? document.write(`Faltan ${Math.abs(anios)} años para el ${fecha.getFullYear()}.`)
    :(Math.sign(anios) === 1)
     ?document.write(`Pasaron ${anios} años desde ${fecha.getFullYear()}.`)
     : document.write (`No hay diferencia en el año actual ${fecha.getFullYear()}.`)
}
 alFuturo(new Date(2012,1,20))*/  // se inserta año,mes,dia a partir del cual determinara cuantos años pasaron





//_____________________________________________________________________________________________________________________________





//14. Programa una función que dada una cadena de texto cuente el numero de vocales y consonantes.

/*const contCaracteres = (texto = undefined)=>{
    if (texto === undefined) return console.warn('Ingrese un texto porfavor');
    if (typeof(texto) !== "string") return console.error('Lo ingresado no es un texto');
    let textocopy = texto.replace(/ /g,'');
    let vocales = new RegExp(/[aeiou]/ig);
    let consonantes = /[^aeiou]/ig;
    let totalVocales = textocopy.match(vocales).length;
    let totalConsonantes = textocopy.match(consonantes).length;
    
   return  document.write(`En el texto ${texto} hay ${totalVocales} vocales y ${totalConsonantes} consonantes`);
}    
contCaracteres();
contCaracteres(true);
contCaracteres('pepa');  */    // <------ donde ingresamos el texo 




//_______________________________________________________________________________________________________________________________________________





// 15. Programa una función que valide que un texto sea un nombre valido. Entrada(‘edson’) devolverá ‘verdadero’.

/*const validarNombre = (nombre = undefined)=>{
    if(nombre === undefined)return console.warn('No completo el nombre');
    let regularNombre = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
    if ( !regularNombre.test(nombre))return console.error("Nombre no verdadero");
    else if(regularNombre.test(nombre)) { return console.info(`Nombre : "${nombre}" verdadero`)}; 
    // RESULTADOS DE ESTE EJER. SE IMPRIMEN EN LA CONSOLA DE DESARROLLADOR DE LA PAGINA WEB YA QUE SE USA (console.info)
}
validarNombre("Jessica Jhocelyn");                //saldra valido
//validarNombre("jessi"); */                     //Saldrá nombre no valido ya que no respeta la mayuscula y demas condiciones de la expresion simple para validad el nombre




//_______________________________________________________________________________________________________________________________________________________________________________________




//16. Programa una función que dado un arreglo de elementos, elimine los duplicados:
//    entrada([‘5’, ’25’, ‘10’, ‘s’, ‘5’, ‘a’, ‘a’]) devolverá ([‘5’, ‘25’, ‘10’, ‘s’, ‘a’]).

/*const eliminarDupli = (arreglo = undefined)=>{
    if(arreglo === undefined) return console.info('No se ingreso un arreglo');
    if(!(arreglo instanceof Array)) return console.error(`no es un arreglo de numeros`)
    if(arreglo === 0) return console.error('arreglo vacio');
   
    return console.info(`El arreglo es: "${arreglo}"\nSin duplicados es : ${ arreglos =[...new Set(arreglo)] }`)
    //solucion profesor
    return console.info({
        original:arreglo,
        sinDuplicados:arreglo.filter((value,index,self)=> self.indexOf(value) === index)
    })
}
eliminarDupli(['5', '25', '10', 's', '5', 'a', 'a',3,3,4]); */           // Los resultados se imprimen en la consola de desarrollador




//______________________________________________________________________________________________________________________________________________________





//   17. Programa una función que dado un array de números devuelva un objeto con dos arreglos el primero con los
//       números pares y en el segundo con los números impares.

/*const paresImpares = (arregloNumeros = undefined) =>{
    if(arregloNumeros === undefined) return console.info('No ingresaste un Arreglo de numeros');

    if(!(arregloNumeros instanceof Array));
    const maxMin = (ArregloNum = undefined) =>{
    if(ArregloNum === undefined) return console.info('No ingresaste un Arreglo de numeros');
    if(!(ArregloNum instanceof Array)) return console.error(' no es un Arreglo de numero');
    if(ArregloNum === 0) return console.error('Arreglo vacio');
    for(let num of ArregloNum){
        if(typeof num !== "number") return console.error (`El valor "${num}" no es un número`);
    }
   
}
    for(let num of arregloNumeros){
        if(typeof num !== "number") return console.error (`El valor "${num}" no es un número`);
    }
    let pares = []
    let impares = []
  
    const parImpar = {
        pares : pares,
        impares :impares
    }
    
    for (let i = 0; i< arregloNumeros.length; i++){
        if (i % 2 === 0 )pares.push(arregloNumeros[i]); 
        else {impares.push(arregloNumeros[i]) ;}
    }
    return console.log(parImpar);
    return console.info({
       pares:arregloNumeros.filter(mun => num % 2 === 0),
       impares:arregloNumeros.filter(mun => num % 2 === 1), 
    })
    
}
paresImpares([1,2,3,4,5,6,7,8,9]);*/    // resultado en consola de desarrollador




//__________________________________________________________________________________________________________________________________________________




//18. Ayuda al Elfo a listar los regalos.
//    Te ha llegado una carta ✉️ con todos los regalos que debes preparar. El tema es que es una cadena de texto y es
//    muy difícil de leer . ¡Menos mal que han puesto cada regalo separado por espacio! (aunque ten cuidado, porque
//    al ser niños, igual han colado más espacios de la cuenta)
//    Encima nos hemos dado cuenta que algunas palabras vienen con un _ delante de la palabra, por
//    ejemplo _playstation, que significa que está tachado y no se tiene que contar.
//    Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece. Por ejemplo, si
//    tenemos el texto:


/*const carta = 'bici coche balón _playstation bici  coche   peluche';

function listGifts(letter) {
  const arrayCarta = letter.split(" ");
  return arrayCarta.filter((regalo) => {
    let value = regalo.startsWith("_")
    if (value !== true && regalo !=="") return regalo !== value
  })
  .reduce((cont, regalo) => {
    cont[regalo] = (cont[regalo] || 0) + 1;
    return  cont
  }, { });
}

const regalos = listGifts(carta)
console.log (regalos) */




//_______________________________________________________________________________________________________________






/*19. Buscando en el almacen:
Mi amigo Dani está trabajando en una tienda y con la llegada de las navidades 
tiene el almacén hecho un desastre y no encuentra nada.
Vamos a crear una función que recibe dos parámetros: un objeto que define 
el almacén y el producto que buscamos.
La función debe devolver un booleano que indique si se encuentra el string 
como valor en algún nivel del objeto.Veamos unos ejemplos:*/

/*Ten en cuenta que la tienda es enorme. Tiene diferentes almacenes y,
como has visto en los ejemplos, cada uno puede tener diferentes organizaciones. 
Lo importante es buscar que el producto está en los almacenes.*/

 /* function iterar(obj)
 {
    let res = [];
    for (let propiedad in obj) 
    {
      const objeto = obj[propiedad];
      if (typeof objeto === 'object')
       {
        res = [...res, ...iterar(objeto)]
       }
      res.push(objeto);
    }
    return res;
  }
  
  function contiene(store, producto) {
    return iterar(store).some((item) => item === producto)
  }
  
  
  const almacen = {
    'estanteria1': {
      'cajon1': {
        'producto1': 'coca-cola',
        'producto2': 'fanta',
        'producto3': 'sprite'
      }
    },
    'estanteria2': {
      'cajon1': 'vacio',
      'cajon2': {
        'producto1': 'pantalones',
        'producto2': 'camiseta' // <- ¡Está aquí!
      }
    }
  }
  
  const otroAlmacen = {
    'baul': {
      'fondo': {
        'objeto': 'cd-rom',
        'otro-objeto': 'disquette',
        'otra-cosa': 'mando'
      }
    }
  }
  
  console.log(contiene(almacen, 'camiseta'));            //true
  //console.log(contains(otroAlmacen, 'gameboy')); */    //false




//_________________________________________________________________________________________________________________________




/*  20. En busca del reno perdido.
¡Hemos perdido a un reno y falta poco más de una semana para Navidad!
Lo peor es que son tantos que no sabemos cuál es el que nos falta... ¡Qué lío! A ver,
 Elfon Musk ha hecho inventario y nos pasa un array con los ids de cada reno.
Lo bueno: los ids son números que pueden ir del 0 al 100, no están repetidos y sólo se ha perdido un reno.
Lo malo: la lista está desordenada y podría faltar el último...
Necesitamos una función que al pasarle la lista de ids de renos nos diga inmediatamente cuál es el que falta:*/

/* function missingReindeer(ids) {
    let result;
    const aux = [...Array(ids.length).keys()];
    const res = ids.sort((a, b) => a - b);
    (JSON.stringify(aux) === JSON.stringify(res))
      ?
        result = res.at(-1) + 1
      :
      (
        res.forEach((_, index, arr) => {
          if (arr.indexOf(index) === -1) {
            result = index;
          }
        })
      )
    return result;
  }
  
  console.log("El que fatla es:  "+ missingReindeer([0, 2, 3]))   */               // -> 1

  //console.log("El que fatla es:  "+ missingReindeer([5, 6, 1, 2, 3, 7, 0]))        //  -> 4
  //console.log("El que fatla es:  "+ missingReindeer([0,1]))                        // -> 2 (¡es el último el que falta!)
  //console.log("El que fatla es:  "+ missingReindeer([3,0,1]))                     // -> 2
  //console.log("El que fatla es:  "+ missingReindeer([9,2,3,5,6,4,7,0,1]))         // -> 8
  //console.log("El que fatla es:  "+ missingReindeer([0]))                       // -> 1 (¡es el último el que falta!)
  
  