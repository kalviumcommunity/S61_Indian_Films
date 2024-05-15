const express = require('express');
const Joi = require('joi');
const { filmModel } = require("./Schema");
const { Router } = require("express");
const filmRoute = Router();
const { UserModel } = require('./UserSchema');

const filmSchema = Joi.object({
    Rank: Joi.number().required(),
    Title: Joi.string().required(),
    BoxOfficeCollection_INRCrores: Joi.string().required(),
    PrimaryLanguages: Joi.string().required(),
    ReleaseYear: Joi.number().required(),
    Genre: Joi.string().required(),
    Directors: Joi.string().required(),
    LeadActors: Joi.string().required(),
    ProductionCompanies: Joi.string().required(),
    Description: Joi.string().required()
}).options({ allowUnknown: true });

filmRoute.use(express.json());

filmRoute.post("/create", validateFilm, async (req, res) => {
    try {
        const prod = await filmModel.create(req.body);
        res.status(200).send({ msg: "Data created successfully", prod });
    } catch (error) {
        res.status(500).json({ errMsg: "Failed to create data", error });
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

        const updatedProduct = await filmModel.findById(id);
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

function validateFilm(req, res, next) {
    const { error } = filmSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
}

module.exports = { filmRoute, filmSchema };
