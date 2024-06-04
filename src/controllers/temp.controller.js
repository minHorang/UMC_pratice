import { status } from "/Users/m2/coding/Node/praticeSetting/config/response.status.js";
import { getTempData } from "/Users/m2/coding/Node/praticeSetting/src/services/temp.service.js";
import { response } from "/Users/m2/coding/Node/praticeSetting/config/response.js";
import { CheckFlag } from "/Users/m2/coding/Node/praticeSetting/src/services/temp.service.js";

export const tempTest = (req, res, next) => {
  res.send(response(status.SUCCESS, getTempData()));
};

export const tempException = (req, res, next) => {
  console.log("/temp/exception/" + req.params.flag);
  return res.send(response(status.SUCCESS, CheckFlag(req.params.flag)));
};
