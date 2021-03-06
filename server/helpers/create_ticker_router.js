const express = require("express");

const createTickerRouter = function (collection) {
  const router = express.Router();

  router.get("/", (req, res) => {
    const cursor = collection.find({ name: { $in: [req.query.search_term] } });
    cursor
      .toArray()
      .then((docs) => {
        res.json(docs);
      })

      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  return router;
};

module.exports = createTickerRouter;
