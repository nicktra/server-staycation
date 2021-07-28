const Item = require("../models/Item");

module.exports = {
  landingPage: async (req, res) => {
    try {
      const mostPicked = await Item.find()
        .select("_id title country city price unit")
        .limit(5);
      res.status(200).json({ mostPicked });
    } catch (error) {}
  },
};
