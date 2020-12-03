const { handler } = require("../utils/index");
const searchInterface = require("../data/searchInterface");

describe("Lambda Function", () => {
  test("Does the lambda function exist", () => {
    expect(typeof handler).toBe("function");
  });

  test("Does the lambda function match", () => {
    return handler({httpMethod:"GET",queryStringParameters:{"primary_city":"Agawam"}}).then(results=>{
      expect(results[0].zip).toBe("01001");
    })
  });

  test("Does the search interface match", () => {
      expect(searchInterface({"primary_city":"Agawam"})[0].zip).toBe("01001");   
    });
});
