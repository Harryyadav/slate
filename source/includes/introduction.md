# Introduction

Welcome to SD Elements API v2! Our API provides RESTful HTTP access to a large part of the functionality of SD Elements.

SD Elements's API documentation page was created with [Slate](http://github.com/tripit/slate)


# API Format

API results are currently returned in XML and JSON formats.  It is advised to use the JSON format only. Specify the JSON format by including the HTTP header in all requests:


`Content-type: application/json`


# Include Parameters

Some endpoints allow users to *include* extra fields in the response the API returns.  This is used to add a specific field to an element, or collection of elements. *For example, we may wish to receive a collection of projects that are within an application.  Since projects are normally not a field of the applications resource, we can include projects in our request to see the projects as an additional field.*

`/?include={field_to_include}`


# Expand Parameters

Some endpoints allow users to *expand* a field that is already present in the response. *For example, by default, an application element contains the id of the business unit to which it belongs.  If we wish to retrieve more information about the business unit, we would expand the business unit field to get more information.*

`/?expand={field_to_expand}`

**It is possible to include and expand more than one field simultaneously.**

`/?include={field1},{field2}&expand={field3},{field4}`

# Pagination

Consume long responses by enabling pagination on an endpoint. Specify a page size in the URL:

`/?page_size=10`

This will limit the result set down to 10 (or fewer) elmenets. There will be a few additional values returned in addtion to the results list. `next` and `previous` are URLs you can request to get the next or previous result set. `count` is the total number of resources available.
