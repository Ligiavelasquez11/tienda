import role from "../models/role.js";

const registerRole = async (req, res) => {
  if (!req.body.name || !req.body.description)
    return res.status(400).send("Incomplete data");

  const existingRole = await role.findOne({ name: req.body.name });
  if (existingRole) return res.status(400).send("Error: The product already exist");

  const roleSchema = new role({
    name: req.body.name,
    precio: req.body.precio,
    stock: req.body.stock,
  });

  const result = roleSchema.save();
  if (!result) return res.status(400).send("Failed to register product");

  return res.status(200).send({ results });
};

export default { registerRole };

