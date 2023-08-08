// Función 1: Manipulación de arreglos
const manipularArreglo = (arreglo, accion, elemento) => {
    if (accion === "agregar") {
      arreglo.push(elemento);
    } else if (accion === "eliminar") {
      arreglo.pop();
    }
    
  };
  
  // Función 2: Sin return y tomando dos parámetros
  const mostrarSaludo = (nombrePersona1, nombrePersona2) => {
    console.log(`¡Hola ${nombrePersona1} y ${nombrePersona2}!`);
  };
  
  // Función 3: Callback function
  const funcionCallback = (funcionManipulacion, funcionSaludo) => {
    const nombres = ["Juan", "María"];
    funcionManipulacion(nombres, "agregar", "Pedro");
    funcionSaludo("Ana", "Luis");
  };
  
  // Usar la función callback con las dos funciones anteriores
  funcionCallback(manipularArreglo, mostrarSaludo);
  