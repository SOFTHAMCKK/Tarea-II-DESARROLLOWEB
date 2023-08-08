// Función 1: Manipulación de arreglos
const manipularArreglo = (arreglo, accion, elemento) => {
    if (accion === "agregar") {
      arreglo.push(elemento);
    } else if (accion === "eliminar") {
      arreglo.pop();
    }
    return arreglo;
  };
  
  // Función 2: Sin return y tomando dos parámetros
  const mostrarSaludo = (array) => {
    console.log(`¡Hola ${array} !`);
  };
  
  
  // Función 3: Callback function
  const funcionCallback = (funcionManipulacion, funcionSaludo) => {
    const nombres = ["Juan", "María"];
    funcionSaludo(funcionManipulacion(nombres, "agregar", "Pedro"));
  };
  
  // Usar la función callback con las dos funciones anteriores
  funcionCallback(manipularArreglo, mostrarSaludo);
  
