function suma(a: number, b: number): number {
  return a + b;
}
const resultado = suma(5, 10);

function saludar(name: String, age?: Number): string {
  if (age) {
    return `Hola, ${name}, tienes ${age} años`;
  } else {
    return `Hola, ${nombre}`;
  }
}
const mensajeConEdad = saludar("Kevin", 15);
const mensajeSinEdad = saludar("Adiel");

function prueba(): string {
  return "";
}
