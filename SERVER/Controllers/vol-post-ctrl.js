const VolPosts = require('../Models/vol-post-model');



let GetPosts = async (req, res) => {
  await VolPosts.find()
    .then((result) => res.send(result))
    .catch((err) => res.status(404).send({ Message: "ERROR." }));
};

let GetPostById = async (req, res) => {
  await VolPosts.findById({ _id: req.params.id })
    .then((data) => res.send({GetByIdPost:data}))
    .catch((err) => res.status(404).send({ Message: err }));
};

let AddPost = async (req, res) => {
  await VolPosts.create(req.body)
    .then((data) => res.send({AddedPost:data}))
    .catch((err) => res.send({ Error: err }));
};

let EditPost = async (req, res) => {
  await VolPosts.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then((data) => res.send({EditedPost:data}))
    .catch((err) => res.send({ Error: err }));
};

let DeletePost = async (req, res) => {
  await VolPosts.findByIdAndDelete({ _id: req.params.id })
    .then((data) => res.send({ PostDeleted: data }))
    .catch((err) => res.end({ Error: err }));
};

module.exports = {
  GetPosts,
  GetPostById,
  AddPost,
  EditPost,
  DeletePost,
};
