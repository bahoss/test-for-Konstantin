let express = require("express");
let router = express.Router();
let data = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
addData = newData => {
  data = newData;
};
/* GET users listing. */
router.get("/", function(req, res, next) {
  // Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json(data);
});

router.post("/", function(req, res, next) {
  addData(req.body);
  res.send("200");
});

module.exports = router;
