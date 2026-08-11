const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  // Los errores inesperados se registran en consola
  if (!err.isOperational) {
    console.error("Error no controlado:", err);
  }

  res.status(statusCode).json({
    success: false,
    message:
      statusCode === 500 && !err.isOperational
        ? "Error interno del servidor"
        : err.message,
  });
};

export default errorHandler;