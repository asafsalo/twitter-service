var express = require("express");
var router = express.Router();
var os = require('os');
var osu = require('node-os-utils');
const { json } = require("body-parser");

/**
 * This endpoint should return a health check of the service.
 */
router.get("/", async (req, res, next) => {
    try {
        results = {
            os_name : os.type(),                                           // OS name - Darwin/Windows/etc.
            platform_version : process.version,                            // Language/platform version - Your Node.js version for example
            memory_usage: (await osu.mem.info()).usedMemPercentage + "%",  // Memory usage of your machine (Percentage value)
            cpu_usage: await osu.cpu.usage() + "%",                        // CPU usage of your machine (Percentage value)
        }
        res.status(200).json(results);
    } catch (error) {
        next({status: 500, message: "The server was unable to perform the task"});
    }
});
  
module.exports = router;