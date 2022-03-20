const TheDonatersModel = require('../Models/donaters-model');

let GetDonaters = async (req, res) => {
  await TheDonatersModel.find()
    .then((result) => res.send(result))
    .catch((err) => res.status(404).send({ Message: "ERROR." }));
};

let GetDonaterById = async (req, res) => {
  await TheDonatersModel.findById({ _id: req.params.id })
    .then((data) => res.send({ DonaterById: data }))
    .catch((err) => res.status(404).send({ Message: err }));
};

let AddDonater = async (req, res) => {
  await TheDonatersModel.create(req.body)
    .then((data) => res.send({ AddDonater: data }))
    .catch((err) => res.send({ Error: err }));
};

let EditDonater = async (req, res) => {
  await TheDonatersModel.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then((data) => res.send({ DonaterEdited: data }))
    .catch((err) => res.send({ Error: err }));
};

let DeleteDonater = async (req, res) => {
  await TheDonatersModel.findByIdAndDelete({ _id: req.params.id })
    .then((data) => res.send({ DonaterDeleted: data }))
    .catch((err) => res.end({ Error: err }));
};

module.exports = {
  GetDonaters,
  GetDonaterById,
  AddDonater,
  EditDonater,
  DeleteDonater,
};
