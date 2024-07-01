# HNG Stage 1 Backend Task

## Task Description

- Set up a basic web server in your preferred stack.
- Deploy it to any free hosting platform and expose an API endpoint that conforms to the criteria below:
  Endpoint: [GET] <example.com>/api/hello?visitor_name="Mark" (where <example.com> is your server origin)

Response:

```json
{
  "client_ip": "127.0.0.1", // The IP address of the requester
  "location": "New York" // The city of the requester
  "greeting": "Hello, Mark!, the temperature is 11 degrees Celcius in New York"
}
```

## Documentation

### Overview

The API is hosted on `domain.com`. It provides a greeting message along with the client's IP address and location details.

#### Usage

To use the API, make a `GET` request to the following endpoint with `visitor_name` as a query parameter:

```
GET /api/hello?visitor_name="Mark"
```
> *Query Parameters*
> - `visitor_name` (required): The name of the visitor.

#### Responses

**Successful Response**

A successful response returns a JSON object with the client's IP address, location, and a personalized greeting message. 

_Example Response:_

```json
{
  "client_ip": "127.0.0.1", 
  "location": "New York",
  "greeting": "Hello, Mark!, the temperature is 11 degrees Celsius in New York"
}
```

**Error Response**

An error response is returned if the `visitor_name` is not provided or if the IP address cannot be located.

_Example Error Response:_

```json
{
  "error": true,
  "message": "This is a sample error message"
}
```

#### Notes

- Ensure that the `visitor_name` parameter is included in the request.
- The API attempts to determine the client's IP address and location, which are included in the response.
- If the IP address cannot be located or the `visitor_name` parameter is missing, an error response will be returned.
