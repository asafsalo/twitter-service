var express = require("express");
var router = express.Router();
const tweets_utils = require("./utils/tweets_utils");

/**
 * This endpoint should get a string and return the 10 latest tweets using Twitter API.
 */
router.get("/", async (req, res, next) => {
    try {
        const query = req.query.query;
        if(query){
            const results = await tweets_utils.getTweetsFromApi(query);
            res.status(200).json(results? results : "No Results");
        }
        else{
            throw {status: 400, message: "Please enter a valid query"};
        }
    } catch (error) {
        next(error);
    }
});
  
module.exports = router;