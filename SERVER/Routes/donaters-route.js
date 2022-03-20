const DonatersCRUD = require("../Controllers/donater-ctrl")
const express = require("express");
const DonatersRouter = express.Router();

DonatersRouter.get("/", DonatersCRUD.GetDonaters);
DonatersRouter.get("/:id", DonatersCRUD.GetDonaterById);
DonatersRouter.post("/", DonatersCRUD.AddDonater);
DonatersRouter.put("/:id", DonatersCRUD.EditDonater);
DonatersRouter.delete("/:id", DonatersCRUD.DeleteDonater);

module.exports = DonatersRouter;