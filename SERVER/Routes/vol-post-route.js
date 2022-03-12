const VolPostsCRUD = require('../Controllers/vol-post-ctrl');
const express = require("express");
const VolPostRouter = express.Router();

VolPostRouter.get("/", VolPostsCRUD.GetPosts);
VolPostRouter.get("/:id", VolPostsCRUD.GetPostById);
VolPostRouter.post("/", VolPostsCRUD.AddPost);
VolPostRouter.put("/:id", VolPostsCRUD.EditPost);
VolPostRouter.delete("/:id", VolPostsCRUD.DeletePost);

module.exports = VolPostRouter;