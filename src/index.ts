// 2.1 importar
import decir_hola from "./Saludador" ;

decir_hola();

// 2.4 importar varios a la vez
import {x,y,z,gravedad} from "./Saludador" ;

console.log(x,"-",y,"-",z,"-",gravedad);

// 3.1 rename en import
import {cariño as acariciar} from "./Saludador"
console.log(acariciar);

// 4.1 mezclar formatos en el import
import nota,{zzz as HDD,gravedad2} from "./Saludador" ;
nota();
console.log(HDD,gravedad2);

// 5.1
import * as math from "./Ejemplo5";
console.log(math.suma," + ",math.resta);
console.log(math.funciones);

// 6 importar archivo && no variables
import "./archivo.js";

// 7 TS sintaxis
import { patito, perro } from './Saludador';
type Animales = patito | perro;

// 8 importar type
import type {bolita} from "./Saludador";
//import type {botoncito} from "./Saludador";
//console.log(botoncito)
/* TS1361: 'botoncito' cannot be used as a value because it was
 imported using 'import type'. */

// 8.1 alternativa
// import {botoncito, type bolita} from "./Saludador";
// comentado para poder compilar

// 9 ES Module Syntax with CommonJS Behavior
// no le supimos

// 10 exportando
/*
let ITLD = required("saludador");
ITLD.posicionX;
*/

