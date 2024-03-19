const { filmModel } = require("./Schema");
const { Router, application } = require("express");

const filmRoute = Router();

filmRoute.post("/create", async (req, res) => {
    try {
        const prod = await filmModel.create(req.body);
        res.status(200).send({ msg: "Data created successfully", prod });
    } catch (error) {
        res.status(500).json({ errMsg: "Invalid post request", error });
    }
});

filmRoute.get("/read", async (req, res) => {
    try {
        const data = await filmModel.find();
        res.status(200).send({ msg: "Data received", data });
    } catch (error) {
        res.status(500).json({ errMsg: "Invalid get request", error });
    }
});

filmRoute.put("/update/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const product = await filmModel.findByIdAndUpdate(id, req.body);

        if (!product) {
            return res.status(404).json({ message: "Film not found" });
        }

        const updatedProduct = await filmModel.findByIdAndUpdate(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

filmRoute.delete("/delete/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const product = await filmModel.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({ message: "Film not found" });
        }

        res.status(200).json({ message: "Film deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = { filmRoute };