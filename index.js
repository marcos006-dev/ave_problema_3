import {
  cantidadNumeros,
  caracteresConsecutivos,
  contieneMayusculas,
  contieneMinusculas,
  longitudContrasenia,
  numerosConsecutivos,
  verificarCaracteresEspeciales,
  verificarContieneCero,
  verificarContieneEspacios,
} from '../problema_5/public/js/helpers.js';
import {} from './utils/helpers.js';

const verificarContrasenia = (contrasenia) => {
  // Debe tener al menos 16 caracteres.

  if (longitudContrasenia(contrasenia) < 16) {
    console.log('Debe tener al menos 16 caracteres');
    return;
  }

  // Debe tener letras minúsculas y mayúsculas.
  if (!contieneMayusculas(contrasenia)) {
    console.log('No contiene mayusculas');
    return;
  }
  if (!contieneMinusculas(contrasenia)) {
    console.log('No contiene minusculas');
    return;
  }

  // No puede tener 2 letras iguales consecutivas.
  if (caracteresConsecutivos(contrasenia)) {
    console.log('Hay 2 caracteres consecutivos repetidos');
    return;
  }

  // Debe contener al menos 4 números.
  if (cantidadNumeros(contrasenia) < 4) {
    console.log('Debe contener al menos 4 números');
    return;
  }

  // No puede tener 2 números iguales consecutivos.
  if (numerosConsecutivos(contrasenia)) {
    console.log('No puede tener 2 números iguales consecutivos');
    return;
  }

  // Debe tener al menos 2 caracteres especiales (!@#$%ˆ&*-_+=?) pero ninguno de
  // ellos puede repetirse en ninguna posición y además los caracteres no pueden
  // estar juntos.

  if (!verificarCaracteresEspeciales(contrasenia)) {
    console.log(
      'Debe tener al menos 2 caracteres especiales (!@#$%ˆ&*-_+=?) pero ninguno de ellos puede repetirse en ninguna posición y además los caracteres no pueden estar juntos'
    );
    return;
  }

  // No se puede usar el número 0.

  if (verificarContieneCero(contrasenia)) {
    console.log('No se puede usar el número 0');
    return;
  }

  // No se puede colocar espacios.
  if (verificarContieneEspacios(contrasenia)) {
    console.log('No se puede colocar espacios');
    return;
  }

  console.log('Contraseña ingresada valida');
};

verificarContrasenia('dsadsasdadas#d%1234asS');
