/*//numerica
var num1 =10.5;
var num2 =5;
var resultado= num1*num2;
console.log(resultado);

var nombre='Tatiana Acevedo ';
var profesion ="Desarrolladora full stack";
console.log(nombre + profesion);

//Booleano
var tiene_mascota =true;
console.log(tiene_mascota);

// arreglos o array
var datos=["Tatiana",24,false,289568,"Desarrolladora"];
console.log(datos[0]); //Posicion a imprimir


var edad=41;
 if (edad=>18 && edad<=40){
     console.log("Eres un adulto joven");

    } 

    var dias=['Lunes','Martes', 'Miercoles','Jueves','Viernes','Sabado','Domingo'];
    for (var i=0; i<7; i++){
        console.log (dias[i]);
    }
    */
    /*function suma(num1,num2){
        var resultado= num1+num2;
        return resultado;
    }
    var res=suma(88,55);
    console.log(res);

        //IVA
    function precio(num1,iva){
        var iva=num1*(iva/100);
        return iva;
    }
    var resul = precio(25000,19);
    console.log(resul);

    //IVA2
    function IVA(precio_producto){
        var iva_producto=precio_producto*0.19;
        return iva_producto;
    }
    var resul = IVA(25000);
    console.log(resul);
   


var titulos=document.getElementsByTagName('h1');
console.log(titulos^[0]);

var clasetexto= document.getElementsByClassName('texto');
console.log(clasetexto);

var sede= document.getElementById('sede');
console.log(sede);
 */

 /*Formulario*/
  function iva (precio_producto,porcentaje_iva){
   var iva_producto= precio_producto*(porcentaje_iva/100);
   return iva_producto;
  }
   function calcular_iva(){
       var precio=parseInt(document.getElementById('precio').value);
       var porcentaje_iva=parseInt(document.getElementById('iva').value);
       var resultado=iva(precio,porcentaje_iva);
       var salida= document.getElementById('resultado');
       /*var texto=document.createTextNode(resultado);//span
       salida.appendChild(texto);span*/
       salida.value=resultado;/*input*/
       console.log(resultado);/*input*/

       
       /* console.log(precio);
       console.log(porcentaje_iva);*/
      
   }
