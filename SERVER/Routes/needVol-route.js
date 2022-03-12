const NeedVolPostsCRUD = require('../Controllers/needVol-post-ctrl');
const express = require("express");
const NeedVolPostsRouter = express.Router();

NeedVolPostsRouter.get("/", NeedVolPostsCRUD.GetPosts);
NeedVolPostsRouter.get("/:id", NeedVolPostsCRUD.GetPostById);
NeedVolPostsRouter.post("/", NeedVolPostsCRUD.AddPost);
NeedVolPostsRouter.put("/:id", NeedVolPostsCRUD.EditPost);
NeedVolPostsRouter.delete("/:id", NeedVolPostsCRUD.DeletePost);

module.exports = NeedVolPostsRouter;