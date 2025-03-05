//Funcion que realiza una suma

function suma () {
    
    let N1 = 0
    let N2 = 0
    let suma = 0
    
    alert('Este programa realiza una suma entre dos valores ingresados por el usuario')

    //Solicita al usuario ingresar los valores 
    N1 = parseInt(prompt('Ingrese el primer valor a sumar'))
    N2 = parseInt(prompt('Ingrese el segundo valor a sumar'))

    suma = N1 + N2
    //Indica al usuario el resultado de la operacion 
    alert(' El resultado de la suma es ' + suma)
}

//Funcion que realiza diferentes operaciones como suma, resta, multiplicacion y division
function OperacionesBásicas(){

    let N1 = 0
    let N2 = 0
    let OperacionesBásicas = 0

    alert('Este programa realiza una OperacionBásica')

    //Solicita al usuario ingresar los valores 
    N1 = parseInt(prompt('ingrese el primer valor a OperacionBásica'))
    N2 = parseInt(prompt('Ingrese el segundo valor a OperacionesBásicas'))

    Suma = N1 + N2 
    Resta = N1 - N2
    Multiplicación = N1 * N2
    División = N1 / N2

    //Indica al usuario el resultado de la operacion 
    alert('El resultado de la suma es' + Suma) 
    alert('El resultado de la resta es' + Resta) 
    alert('El resultado de la multiplicación es' + Multiplicación) 
    alert('El resultado de la división es' + División) 
}

//Funcion que realiza  una operacione de Numero de un Cuadrado
function CuadradodeunNúmero(){

    let N1 = 0
    let CuadradodeunNúmero = 0

    alert('Este programa realiza un CuadradodeunNúmero')

    //Solicita al usuario ingresar los valores 
    N1 = parseInt(prompt('ingrese el primer valor a Cuadrado'))

    Multiplicación = N1 * N1

    //Indica al usuario el resultado de la operacion 
    alert('El resulta del cuadrado de un numero es' + Multiplicación)
}
//Funcion que realiza una operaciones de conversion de unidades de Metros a Centimeros y Pulgadas
function ConversióndeUnidades(){

    let M = 0 
    let CM = 0
    let P = 0 

    alert('Este programa realiza una ConversiódeUnidades')

    //Solicita al usuario ingresar los valores 
    M = parseInt(prompt('ingrese el primer valor a la conversión'))
    
    CM = M * 100
    P = M * 39.37

    //Indica al usuario el resultado de la operacion 
    alert(' el resultado de Centimetros es ' + CM + ' el resultado de Pulgadas es ' + P)

}

//Funcion que realiza una operacione que determina el Área de un triamgulo
function ÁreadeunTriangulo(){

    let B = 0
    let H = 0
    let Area = 0

    alert('Este programa realiza un AreadeTriangulo')

    //Solicita al usuario ingresar los valores 
    B = parseInt(prompt('Ingrese el primer valor'))
    H = parseInt(prompt('Ingrese el segundo valor'))

    Area = (B * H) / 2

    //Indica al usuario el resultado de la operacion 
    alert('El resultado del AreadeunTriangulo es' + Area)
}

//Funcion que realiza operaciones para determinar una inversion de capital
function InversionCapital(){

    let AN = 0
    let CP = 0
    let GA = 0
    let GT = 0

    alert('Este programa realiza una InversionCapital')

    //Solicita al usuario ingresar los valores 
    CP = parseInt(prompt('Ingrese el monto de dinero'))

    GA = (CP * 0.117) * 12
    
    alert('Su ganancia anual es' + GA)

    //Solicita al usuario ingresar los valores 
    AN = parseInt(prompt('Ingrese el numero de años de inversion'))

    GT = GA * AN

    //Indica al usuario el resultado de la operacion 
    alert('Su ganancia total en loos años escritos es' + GT) 
}

//Funcion que Determina cual de los valores ingresados es mayor 
function NumeroMayor(){

    let N1 = 0 
    let N2 = 0 

    alert('Este programa realiza un NumeroMayor')

    //Solicita al usuario ingresar los valores 
    N1 = parseInt(prompt('Ingrese el primer valor'))
    N2 = parseInt(prompt('Ingrese el segundo valor'))

    //Indica al usuario el resultado de la operacion 
    if(N1 == N2){
        alert('Los numeros son iguales A ' + N1)
    }
    else if(N1 > N2){
        alert(N1 + 'Es mayor que' + N2)
    }
    else {
        alert(N2 + 'Es mayor que' + N1)
    }
}

//Funcion que Determina cual de los valores ingresados es menor
function NumeroMenor(){
    
    let N1 = 0
    let N2 = 0
    let N3 = 0

    alert('Este programa realiza de NumeroMenor')

    //Solicita al usuario ingresar los valores 
    N1 = parseInt(prompt('Ingrese el primer valor'))
    N2 = parseInt(prompt('Ingrese el segundo valor'))
    N3 = parseInt(prompt('Ingrese el tercer valor'))

    //Indica al usuario el resultado de la operacion 
    if(N1 == N2 && N2 == N3){
        alert('Los numeros son iguales' + N1)
    }

    if(N1 < N2 & N1 < N3){
        alert('El numero menor es' + N1)
    }

    else if(N2 < N1 & N2 < N3){
        alert('El numero menor es'+ N2)
    }

    else { 
        alert('El numero menor es' + N3)
    }

    
   
}

//Funcion que determina si el valor ingresado es par o impar
function ParoImpar(){

    let N1 = 0 
    
    alert('Este programa realiza ParoImpar')

    //Solicita al usuario ingresar los valores 
    N1 =parseInt(prompt('Ingrese el primer valor'))

    //Indica al usuario el resultado de la operacion 
    if(N1 % 2 === 0){
        alert('El numero' + 'es par')
    }
    else{
        alert('El numero' + 'es impar')
    }
}

//Funcion que realiza diferentes operaciones para determinar el promedio de las notas de dicha materia y estudiante
function PromedioEstudiantes(){
    let Materia = ''
    let estudiante =''
    let Nnotas = 0
    let Calificacion = 0
    let SumaNotas = 0
    let Promedio = 0
    let Iteracion = 0

    //Solicita al usuario ingresar los valores 
    Materia =prompt('Ingrese la materia que imparte')
    estudiante =prompt('Ingrese  el nombre del estudiante')
    Nnotas =parseFloat(prompt('Ingrese el numero de notas o calificaciones'))

    while(Iteracion<Nnotas){

        //Solicita al usuario ingresar los valores 
        Calificacion=parseFloat(prompt('Ingrese la calificacion'))
        SumaNotas = SumaNotas + Calificacion
        Iteracion = Iteracion + 1
    }

    Promedio = SumaNotas / Nnotas
    
    //Indica al usuario el resultado de la operacion 
    if(Promedio>2.9){
        alert('El estudiante' + estudiante + 'aprobo la materia de' + Materia + 'con un promedio de' + Promedio)
    }
    else(
        alert('El estudiante' + estudiante + 'no aprobo la materiade' + Materia + 'con un promedio de' + Promedio)
    )
}

//Funcion que realiza diferentes operaciones de una fruteria para saber cuando dar el descuento y cuanto es 
function Fruteria(){

    let K = 0
    let P = 0

    alert('Este programa determina cuanto debe pagar un cliente por x kilos de manzanas segun la tabla de descuentos')

    //Solicita al usuario ingresar los valores 
    K =parseInt(prompt('Ingrese el valor en kilos'))
    P = K * 4500
    
    //Indica al usuario el resultado de la operacion 
    if(K <= 2)
    alert('El cliente no tiene descuento y pagara' + P)
    
    if(K <= 5)
        alert('El cliente tiene un descuento del 10% y pagara' + (K * 4500 - (K * 4500 * 0.1)))
    

    else
        if(K <= 10)
            alert('El cliente tiene un descuento del 15% y pagara' + (K * 4500 -(K * 4500 * 0.15)))
            else
                alert('El cliente tiene un descuenrto del 20% y pagara' + (K * 4500-(k * 4500 * 0.2)))

}

//Funcion que realiza diferentes operaciones para determinar un salario semanal con o sin horas extras 
function HorasExtras(){

    let SS = 0
    let H = 0

    alert('Este programa realiza la operacion de un salario semanal con o sin Horas Extras')

    //Solicita al usuario ingresar los valores 
    H = parseInt(prompt('Ingrese las horas trabajadas'))

    //Indica al usuario el resultado de la operacion 
    if( H <= 40 ){
        SS = H * 10000
        alert('El salario semanal sin horas extras es' + SS)
    }

    else {
        SS = (40 * 10000) + ((H - 40) * 20000)
        alert('El salario semanal con horas extras es' + SS)
    }
     
}

//Funcion que realiza operacione de suma hasta que el usuario ingrese el valor de 0 
function SumaDiferenteaCero() {
    let suma = 0
    let n =0
    alert("programa que muestra la suma de numeros diferentes a cero")

    //Solicita al usuario ingresar los valores 
    n=parseInt(prompt("Ingrese un número para sumar (0 para terminar): "))
    
    //Indica al usuario el resultado de la operacion 
   while (n !== 0) {
        suma=suma + n
        n = parseInt(prompt("Ingrese un número para sumar (0 para terminar): "))
    }
    alert("La suma de los números ingresados es: \n" + suma);
}

//Funcion que realiza un conteo del 1 hasta el 10
function Imprimirde1a10(){
    for(let i = 0; i < 11; i = i + 1){
        console.log(i)
    }
}

//Funcion que realiza un conteo del 100 hasta el 0
function Imprimirde100a0(){
    let n=100
    let resultado=""
    alert ("programa numeros de 100 a cero de 10 en 10")
    
    //Solicita al usuario ingresar los valores 
    while (n >= 0) {
        resultado=resultado+n
        if (n > 0) {
            resultado=resultado+", "
        }
        n = n - 10
    }

    //Indica al usuario el resultado de la operacion 
    alert("Los números de 100 a cero de 10 en 10 quedaran asi: \n " + resultado)
}

//Funcion que realiza una tabla de multiplicar con el dato que de el usuario
function TabladeMultiplicar(){
    let n=1
    let num=0
    
    alert("programa que muestra la multiplicacion de 1 a 10 de un numero ingresado por el ususario")

    //Solicita al usuario ingresar los valores 
    num=parseInt(prompt("INGRESE EL NUMERO A MULTIPLICAR"))

    //Indica al usuario el resultado de la operacion 
    while (num<=10){
        r=num*n
        if (n<=10)     
        alert ("el resultado es: "+num+" x " +n+  " = "+r)
        n=n+1
    }
}

//Funcion que realiza diferentes operaciones para simular un cajero electronico 
function CajeroElectronico(){

    let Saldo = 0
    let ValorRetiro = 0

    //Solicita al usuario ingresar los valores 
    Saldo =parseInt(prompt('Ingrese el valor inicial de su saldo'))

    while(Saldo > 0){
        //Solicita al usuario ingresar los valores 
        ValorRetiro =parseInt(prompt('Ingrese el valor que desea retirar, tu saldo es' + Saldo))
        
        if(ValorRetiro > Saldo){
            alert('Saldo suficiente, tu saldo es:' + Saldo)
        }

        else{
            Saldo = Saldo - ValorRetiro
        }
    }
    
    //Indica al usuario el resultado de la operacion 
    alert('Sin fondos, ya retiro todo su dinero')
}

//Funcion que realiza un conteo del 100 hasta el 100
function Numerohasta1000(){
    let n = 100
    let resultado = ""
    
    //Solicita al usuario ingresar los valores 
    for (n = 100; n <= 1000; n += 100) {
        resultado=resultado + n
        if (n < 1000) {
            resultado=resultado + ", "
        }
    }

    //Indica al usuario el resultado de la operacion 
    alert("Los números de 100 en 100 hasta 1000 son:\n" + resultado)
}