const { createImage, getImagesByUserId } = require('../models/imageModel');

const createImageHandler = async (req, res) => {
  try {
    const imageData = req.body;
    const newImage = await createImage(imageData);
    res.status(201).json(newImage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getImagesHandler = async (req, res) => {
  try {
    const { userId } = req.query;
    const images = await getImagesByUserId(userId);
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createImageHandler,
  getImagesHandler,
};
