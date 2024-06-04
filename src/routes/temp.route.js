// temp.route.js

import express from "express";
import { tempTest } from "/Users/m2/coding/Node/praticeSetting/src/controllers/temp.controller.js";
import { tempException } from "/Users/m2/coding/Node/praticeSetting/src/controllers/temp.controller.js";

export const tempRouter = express.Router();

tempRouter.get("/test", tempTest);
tempRouter.get("/exception/:flag", tempException);
