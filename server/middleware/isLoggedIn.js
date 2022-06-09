const Session = require("../models/Session.model");

module.exports = (req, res, next) => {
  if (!req.headers.authorization || req.headers.authorization === "null") {
    return res.status(403).json({ errorMessage: "You are not logged in" });
  }

  Session.findById(req.headers.authorization)
    .populate({ path: "user", model: "User" })
    .then((session) => {
      if (!session) {
        return res
          .status(404)
          .json({ errorMessage: "No session started for this user" });
      }
      req.user = session.user;
      next();
    })
    .catch((err) => {
      return res.status(500).json({ errorMessage: err.message });
    });
};
