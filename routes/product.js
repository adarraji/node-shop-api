const Product = require("../models/Product");
const { veryifyTokenAndAuthorization, veryifyTokenAndAdmin } = require("./verifyToken");
const router = require("express").Router();

// CREATE
router.post("/", veryifyTokenAndAdmin, async (req, res) => {
    const newProduct = new Product(req.body);
    try {
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    }
    catch (err) {
        res.status(500).json(err);
    }
})


// UPDATE
router.put("/:id", veryifyTokenAndAdmin, async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(201).json(updatedProduct);

    } catch (err) {
        res.status(500).json(err);
    }
})

// DELETE
router.delete("/:id", veryifyTokenAndAdmin, async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
});


// GET Product
router.get("/find/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err);
    }
});


// GET ALL PRODUCTS
router.get("/", async (req, res) => {
    const queryNew = req.query.new;
    const queryCategory = req.query.category;
    try {
        let products;

        if (queryNew) {
            products - await Product.find().sort({ createdAt: -1 }).limit(5);
        } else if (queryCategory) {
            products - await Product.find({
                categories: {
                    $in: [queryCategory],
                }
            });
        } else {
            products = await Product.find();
        }

        res.status(200).json(products);
    } catch (err) {
        res.status(500).json(err);
    }
});

// // GET USER STATS
// router.get("/stats", veryifyTokenAndAdmin, async (req, res) => {

//     const date = new Date();
//     const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
//     try {
//         const data = await User.aggregate([
//             { $match: { createdAt: { $gte: lastYear } } },
//             {
//                 $project: {
//                     month: { $month: "$createdAt" },
//                 },
//             },
//             {
//                 $group: {
//                     _id: "$month",
//                     total: { $sum: 1 }
//                 }
//             }
//         ]);
//         res.status(200).json(data);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// })


module.exports = router;