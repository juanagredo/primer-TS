// 1 tratar archivos sin esp/imp como modulos
export {};

// 2 sintaxis ES Module
export default function decir_hola() {
    console.log("hola")
};
// > pasar a index para import <
// > solo un default por archivo <

// 2.3 mas exports por archivo
export var x = 12;
export let y = "arriba";
export let z = true;
export const gravedad = 9.8;
// > tambien funciones, clases, tipos <

// 3 renombrar imports
export let cariño = "caricia" ;
// > pasar a index para import <

// 4 mezclar sintaxis en un solo export
export let zzz = true;
export const gravedad2 = 10;
export function nota() {
    console.log("viva la monster");
}
// > codigo reciclado por que: vida ecologica.png <
// > pasar a index para import <

// 5 importar un archivo entero
// > pasar a Ejemplo5.ts para este punto <

// 6 importar archivo && no variables
// > pasar a index para import <

// 7 TS sintaxis
export type patito = { come: string; edad: number };
export interface perro {
    color_pelo: string[];
    edad: number;
}

// 8 importar type
export type bolita = { radio: number, posicion: number };
//export const botoncito: boolean = false;

// 9 no le supimos

// 10 exportando
/*
function saltar(salto: boolean) {
    if (salto) {return console.log("salto cual sapito")}
    return console.log("no supo saltar") }

module.exports = {saltar,
    posicionX: 32,
    posicionY: 43,
}
//pide cambiar algo en jsonconfig :/ */

