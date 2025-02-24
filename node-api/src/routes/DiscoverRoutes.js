const express = require("express");
const authenticate = require("../middlewares/authenticate");
const discoverSectionRoutes = express.Router();

const {
    getDiscoverSectionArticles,
} = require('../controllers/DiscoverSectionController');



// Routes.
discoverSectionRoutes.get('/', getDiscoverSectionArticles);

module.exports = discoverSectionRoutes;
