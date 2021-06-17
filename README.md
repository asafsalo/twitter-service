# Twitter Service 

## Overview
This service is a simple Node.js service with two endpoints (health and tweets) .
Can run locally or with on Heroku with a Docker container.


## API	
The service include the following API:

1. GET /tweets?query=YOUR_STRING
This endpoint get a string and return the 10 latest tweets from Twitter API.

2. GET /health
This endpoint return a health check of your service with the following data:
	OS name - Darwin/Windows/etc.
	Language/platform version - Your Node.js version for example
	Memory usage of your machine (Percentage value)
	CPU usage of your machine (Percentage value)	

## Try it yourself
<p>
- A link to my live API on Heroku:
	- <a href="https://autodesk-assignment.herokuapp.com/"> Home Page</a>
	- <a href="https://autodesk-assignment.herokuapp.com/tweets?query=trump/"> Link to tweets (query: trump) </a>
	- <a href="https://autodesk-assignment.herokuapp.com/health/"> Link to 'health' endpoint </a>
		
- Run it locally with docker container:
	1. install docker on your computer
	2. clone this repository
	3. open terminal
	4. run in terminal: docker build . -t "IMAGE_NAME"
	5. run in terminal: docker run -it -p 9000:3000 IMAGE_NAME"

	The service is now listen in port 9000 
	you can check it by postman or directly in url at http://localhost:9000/

</p>		
<a><img src="https://www.europanostra.org/wp-content/uploads/2017/09/2017-09-Twitter-logo.png"></a>

Have fun!
