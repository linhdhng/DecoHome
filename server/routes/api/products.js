const express = require("express");
const router = express.Router();
const Product = require("../../models/Products");
const { validationResult } = require("express-validator");

// @route:   GET api/products
// @desc:    Test users route
// @access:  Public
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    if (!products) {
      return res.status(400).json({ message: "No users found." });
    }
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route:   CREATE api/products
// @desc:    Test users route
// @access:  Public
router.post("/", async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { title, description, category, price } = req.body;
  try {
    //Check if product already exists
    const duplicate = await Product.findOne({ title }).lean();
    if (duplicate) {
      return res.status(400).json({ message: "Product already exists. " });
    }

    const productObject = { title, description, category, price };

    //Create and store new product
    const product = await Product.create(productObject);
    if (product) {
      // If user is created
      res.status(201).json({ message: `Product ${title} has been created!` });
    } else {
      res.status(400).json({ message: "Invalid user data." });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.get('/:productId', async (req, res) => {
  const productId = req.params.productId;
  try {
      const product = await Product.findOne({ _id: productId});
      if (product) {
          res.json(product);
      } else {
          res.status(404).json({ message: 'Product not found' });
      }
  } catch (error) {
      console.error('Error fetching product:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
});

router.put('/:productId', async(req, res) => {
  const productId = req.params.productId;
  const updatedTitle = req.body.title;
  const updatedDescription = req.body.description;
  const updatedPrice = req.body.price;
  const updatedMaterial = req.body.material;

    try {
        const result = await Product.findOneAndUpdate(
          { _id: productId },
          { $set: {title: updatedTitle, description: updatedDescription, price: updatedPrice, material: updatedMaterial }},
          { new: true}
        );
        if (result == null) {
            res.status(404).json({ message: 'Product not found' });
        } else {
            res.json({ message: 'Product updated successfully' });
        }
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.delete("/:id", async (req, res) => {
  const productId = req.params.productId;
    try {
        const result = await Product.findOne({ _id: productId });
        if (!result) {
          res.status(404).json({ message: 'Product not found' });
        } else {
          await result.remove()
          res.json({ message: 'Product deleted successfully' });
        }
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
})

module.exports = router