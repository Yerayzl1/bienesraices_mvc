import { check, validationResult } from 'express-validator';
import Usuario from '../models/Usuario.js';

const formularioLogin = (req, res) => {
  res.render('auth/login', {
    pagina: 'Iniciar sesión',
  });
};

const formularioRegistro = (req, res) => {
  res.render('auth/registro', {
    pagina: 'Crear cuenta',
  });
};

const registrar = async (req, res) => {
  // Validación
  await check('nombre')
    .notEmpty()
    .withMessage('El nombre no puede ir vacío')
    .run(req);
  await check('email').isEmail().withMessage('Eso no parece un email').run(req);
  await check('password')
    .isLength({ min: 6 })
    .withMessage('El password debe ser de almenos 6 caracteres')
    .run(req);
  await check('repetir_password')
    .equals('password')
    .withMessage('Los password no son iguales')
    .run(req);

  let resultado = validationResult(req);

  // Verificar que el resultado este vacio
  if (resultado.isEmpty()) {
    // Errores
    return res.render('auth/registro', {
      pagina: 'Crear página',
      errores: resultado.array(),
    });
  }

  res.json(resultado.array);
  const usuario = await Usuario.create(req.body);
  return res.json(usuario);
};

const formularioOlvidePassword = (req, res) => {
  res.render('auth/olvide-password', {
    pagina: 'Recupera tu acceso a Bienes Raices',
  });
};

// export default exporta solo un objeto, cuando los importas, puedes usar el nombre que quieras.
// export y llaves exporta múltiples funciones, cuando los importas, tienes que usar el mismo nombre que la función a la que llamas.
export {
  formularioLogin,
  formularioRegistro,
  formularioOlvidePassword,
  registrar,
};
