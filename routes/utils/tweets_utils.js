require("dotenv").config();
const util = require('util');
const exec = require('child_process').exec;
const execProm = util.promisify(exec);

const url = 'https://api.twitter.com/2/tweets/search/recent?query=';
const bearer_token = process.env.TWITTER_BEARER_TOKEN;

/**
 * This function execute the command and return its stdout as json.
 * @param {*} command: The curl command to execute
 */
async function execFromCurl(command) {
   let result;
   try {
     var APIresult = await execProm(command);
     result = JSON.parse(APIresult.stdout).data;
   } catch(ex) {
      console.log(ex);
      throw {status: 500, message: "The server was unable to perform the task"};
   }
   return result;
}

/**
 * This function prepare the curl (To the Twitter API) command and return the 10 latest tweets of a matching query.
 * @param {*} query: The query of the user (sending from the tweets.js: GET /tweets endpoint)
 */
async function getTweetsFromApi(query){
    const command = 'curl '+ url + query.replace(" ", "+") + ' -H "Authorization: Bearer ' + bearer_token + `"`;
    const tweets = await execFromCurl(command);
    return tweets;
}
  
exports.getTweetsFromApi = getTweetsFromApi;
