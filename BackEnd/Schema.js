const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    Rank: { type: Number, required: true },
    Title: { type: String, required: true },
    BoxOfficeCollection_INRCrores: { type: String, required: true },
    PrimaryLanguages: { type: String, required: true },
    ReleaseYear: { type: Number, required: true },
    Genre: { type: String, required: true },
    Directors: { type: String, required: true },
    LeadActors: { type: String, required: true },
    ProductionCompanies: { type: String, required: true },
    Description: { type: String, required: true }
});

const filmModel = mongoose.model("Movie", movieSchema);

module.exports = { filmModel };


