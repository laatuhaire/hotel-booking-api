// Express framework for creating the api
import express from 'express';
// function to manage files and directories since the node.js api
import path from 'path';
// function to have access to the directory or file path
import { fileURLToPath } from 'url';
// function to handle the request body
import bodyParser from 'body-parser';
//Middleware for logging HTTP request
import cors from 'cors';
//Middleware for logging HTTP request
import morgan from 'morgan';

//Create
const api = express();

api.use(morgan('dev'));

api.use(express.urlencoded({ extended: false }));

api.use(express.json());

api.use(bodyParser.json());

// Static files path
// Store in the constant the project dirname
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default api;