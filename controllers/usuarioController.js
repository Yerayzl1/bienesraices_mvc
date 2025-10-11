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

const registrar = (req, res) => {};

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
