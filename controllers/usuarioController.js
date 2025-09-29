const formularioLogin = (req, res) => {
  res.render('auth/login', {
    autenticado: false,
  });
};

// export default exporta solo un objeto, cuando los importas, puedes usar el nombre que quieras.
// export y llaves exporta múltiples funciones, cuando los importas, tienes que usar el mismo nombre que la función a la que llamas.
export { formularioLogin };
