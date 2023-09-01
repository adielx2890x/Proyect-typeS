const nombre = "Adiel";

interface Persona {
  nombre: string;
  edad: number;
}
function saludar(Juan: Persona) {
  console.log(`Hola ${Juan.nombre}! Tienes ${Juan.edad} años`);
}

const alguien: Persona = {
  nombre: "obviJuan",
  edad: 40,
};

saludar(alguien);
