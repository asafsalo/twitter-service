# Twitter Service 

## Overview
This service is a simple Node.js service with two endpoints (health and tweets). <br>
Can run locally with Heroku with a Docker container.


## API	
The service include the following API:

1. GET /tweets?query=YOUR_STRING <br>
This endpoint get a string and return the 10 latest tweets from Twitter API.

2. GET /health <br>
This endpoint return a health check of your service with the following data:
	- OS name - Darwin/Windows/etc.
	- Language/platform version - Your Node.js version for example
	- Memory usage of your machine (Percentage value)
	- CPU usage of your machine (Percentage value)	

## Try it yourself
- Links to my live API on Heroku:
	- <a href="https://autodesk-assignment.herokuapp.com/"> Home Page</a>
	- <a href="https://autodesk-assignment.herokuapp.com/tweets?query=trump/"> Link to tweets (query: trump) </a>
	- <a href="https://autodesk-assignment.herokuapp.com/health/"> Link to 'health' endpoint </a>
		
- Run it locally with docker container:
	- install docker on your computer
	- clone this repository
	- open terminal
	- run in terminal: docker build . -t "IMAGE_NAME"
	- run in terminal: docker run -it -p 9000:3000 "IMAGE_NAME"
	- The service is now listen in port 9000 - you can check it by postman or directly in url at http://localhost:9000/
<br>
<br>
<a><img src="https://www.s50static.com/images/newspics/17297.png" width="130" height="100"></a>

Have fun!
