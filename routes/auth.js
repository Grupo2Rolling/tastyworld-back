const { Router } = require("express");
const { login } = require("../controllers/auth");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");

const router = Router();

router.post(
  "/login",
  [
    check("email", "El email es obligatorio").isEmail(),
    check("password", "La contraseña es obligatorio").not().isEmpty(),
    validarCampos,
  ],
  login
);

module.exports = router;
