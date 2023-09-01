"use strict";
const nombre = "Adiel";
function saludar(Juan) {
    console.log(`Hola ${Juan.nombre}! Tienes ${Juan.edad} años`);
}
const alguien = {
    nombre: "obviJuan",
    edad: 40,
};
saludar(alguien);
