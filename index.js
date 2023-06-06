console.log('Clase 03');

// CICLOS EN JAVA SCRIPT

/* También conocidos como bucles o iteraciones, se refiere a una forma  sencilla y
rápida de hacer que una operación se repita varias veces. Las estructuras de JS más
conocidas son 'for, while y do...while' */

// TIPOS DE BUCLES

// Ciclos por conteo:
/* Repiten un bloque de código un número de veces específica, es decir que tenemos
un mejor control, ya que podemos indicar desde, hasta y cada cuantas veces repeti-
mos el ciclo. Estructura for. */

// Ciclos condicionales:
/* Repiten un bloque de código mientras la condición evaluada es verdadera. Estruc-
turas while y do...while. */

// FOR:

for (i = 1; i <= 10; i++){
    console.log('Boca es el más grande');
}

/* for (desde, hasta, actualización){
    // todo lo que esté acá dentro se repetirá las veces que dure el ciclo
} */

/* i significa 'index o índice'. Es una variable que nos ayuda a establecer cuantas
veces se va a interar el bucle o ciclo de for. */
/* Dentro del parentesis, vemos como se estructura el ciclo for. Primero establece-
mos 'DESDE' (1); luego viene 'HASTA' (menor o igual a 10), y por último viene lo que
llamamos actualización (i++ = salto de uno en uno) */

// EJEMPLO DE FOR PARA CALCULAR TABLAS DE MULTIPLICACIÓN.

/* Le pedimos al usuario que ingrese un numero */
let ingresarNumero = parseInt(prompt('Ingresar Número'));

for (i = 0; i <= 10; i++){
    // Desde 0 hasta menor o igual a 10, y se repite de uno en uno
    let resultado = i * ingresarNumero;
    console.log(ingresarNumero + ' x ' + i + ' = ' + resultado);
}

// EJEMPLO DE FOR PARA DAR TURNOS

for (i = 1; i <= 3; i++){  
    // En cada repetición, se solicitará un nombre al usuario
    let ingresarNombre = prompt ('Ingresar Nombre');
    // Informamos el turno asignado con la repeteción i
    console.log('Turno nº ' + i + ' Nombre: ' + ingresarNombre);
}

// SENTENCIA BREAK

/* El break permite interrumpir el bucle.EJ */
for (i = 1; i <= 10; i++) {
    if (i == 5) {
        // Cuando el bucle llegue a 5 repeticiones, se interrumpe y termina ahí
        break; // En este caso el bucle terminó en la 4ta repetición.
    }
    console.log(i);
}

// SENTENCIA CONTINUE

/* El continue permite saltear una iteración indicada. Ej: */
for (i = 1; i <= 10; i++){
    // En este caso, el continue genera un salto cuando la iteracion llega a 5.
    if (i == 5){
        continue;
    }
    console.log(i);
}

/* IMPORTANTE ---> El Break y el Continue son muy poco utilizados. */

// WHILE

/* La estructura WHILE permite crear bucles que se ejecutan cero o muchas veces según
la condición indicada. Al usar WHILE, damos por hecho que la condición va a terminar
en algún momento. Ej: */

// En este caso vamos a solicitarle al usuario su contraseña
let password = prompt ('Ingresar contraseña');

/* Suponiendo que la contraseña creada por el usuario es 'Daisy1994', vamos a crear el
siguiente bucle: */

while (password != 'Daisy1994'){
    // Si el usario ingresa un dato distinto a 'Daisy1994', saldrá un alert
    alert ('Contraseña incorrecta');
    /* Una vez que el usario ingresa el dato, vuelve a preguntar. Si es distinto,el 
    bucle seguirá repitiendose de manera infinita hasta que el usuario ingrese el dato
    correcto. */
    password = prompt ('Vuelva a ingresar su contraseña');
    /* Si el usuario agrega el dato correcto, se produce esta condicional */
    if (password == 'Daisy1994'){
        console.log ('Contraseña Correcta');
    }
}

// DO... WHILE

/* A diferencia del WHILE, que consulta antes de ejecutar, DO... WHILE ejecutará el
código primero al menos una vez, porque la condición está al final. EJ: */

let tecla = 'A';

do{
    tecla = prompt ('Adivine la tecla');
    if(tecla != 'A'){
        alert('Ingrese otra letra');
    }else{
        console.log('Adivinaste');
    }
}while(tecla != 'A');