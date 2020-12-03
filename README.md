# My solution
## Overview of what is implemented
This service is built on top of a functional express server and can be tested with any http client  
The service can be described as consisting of 3 pieces
- A route handler to listen for incoming http requests (./routes/resource.js)
- A simulated lambda function which is invoked by the route handler ("./utils/index.js)
- A simulated database interface which is "queried" by the lambda function ("./data/searchInterface.js)

The entry point for the service is ./app.js which is simply the top level module which instantiates the express server
and registers the route handler

## Testing the service
### Unit Testing the simulated lambda function and database interface
Run "npm test"

### Manually testing the service
- Clone this repository
- Run "npm install"
- Run "npm start"
- You will now have this service running locally on port 8081
- Using any http client, you can request the service by passing in the field names as query string parameters

Some sample HTTP requests which can be used to test:  
GET <http://localhost:8081/resource?timezone=America/New_York&county=Hampden County&primary_city=holyo>  
GET http://localhost:8081/resource?primary_city=amhe  
GET <http://localhost:8081/resource?acceptable_cities=Livermore Fls>  

# Aura Code Challenge

This challenge will allow you demostrate your knowledge and understanding of node.js.
It is intended to be familar, much like a development story that could come up on the job.
After you submit the completed project, we will schedule a follow-up code-review.

## The Story

**Create a lambda-like handler function that can query zip code data in various ways**

- handler function is already bootstrapped in `src/index.js`
- handler is invoked with events (see below) as would come from API Gateway
- it is `async` and should return an array or throw an error
- the dataset to be searched is included in the `src/data.json` file
- look at the data and decide how best to utilize it

### Acceptance Criteria

- design and define zipcode api
- implement zipcode api handler
- search by full or partial zipcode
- search by full or partial city name
- search by closest latitude/longitude
- filter by additional attributes

### Sample Zipcode Object

```json
{
  "zip": "01230",
  "type": "STANDARD",
  "primary_city": "Great Barrington",
  "acceptable_cities": "Egremont, Gt Barrington, N Egremont, New Marlboro, New Marlborou, New Marlborough, North Egremont, Simons Rock",
  "unacceptable_cities": "Alford, Berkshire Heights, Hartsville, Risingdale, Van Deusenville",
  "state": "MA",
  "county": "Berkshire County",
  "timezone": "America/New_York",
  "area_codes": "413",
  "latitude": "42.19",
  "longitude": "-73.35",
  "country": "US",
  "estimated_population": "5873"
}
```

### Sample Events

```json
{
  "httpMethod": "GET",
  "path": "/resource",
  "headers": {},
  "queryStringParameters": {
    "date": "2020-11-13"
  }
}
```

```json
{
  "httpMethod": "POST",
  "path": "/resouce",
  "headers": {
    "content-type": "application/json"
  },
  "body": "{\"title\":\"hello world\"}"
}
```

## Suggestions

- Spend as much or as little time as you wish on this challenge.
- Many implementation details are up to you, be prepared to explain your decisions.
- Details matter, but you should strive to provide a complete feature.
- Use any node packages you want, just remember we want to know what _you_ can do.
- Consider how you can show how your feature should work, and prove that it does work.

## Getting started

- this bundle contains a git repository
- work locally, commit changes
- push to your own git service
- share the repository link with us

## Package Scripts

| command              | description                  |
| :------------------- | :--------------------------- |
| `npm run format:fix` | format files with "prettier" |
| `npm run test`       | execute tests with "jest"    |
| `npm start`          | run the http server          |