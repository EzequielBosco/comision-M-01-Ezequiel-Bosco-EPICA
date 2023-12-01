const { validationResult } = require("express-validator")

export const createTravel = async (req, res) => {
  // Validación de datos
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
}
