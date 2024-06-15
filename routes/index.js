const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.homeRoute);
routes.get('/Jana', lesson1Controller.janaRoute);

module.exports = routes;
