# Comparison of three major javascript unit testing frameworks

## qUnit

### Pros:
  * Lots of support across the board, from Q&A to CI server support
  
### Cons:
  * Lacks fluent syntax
  * Configuration is a headache, and must constantly be maintained
  * Makes including 3rd party libraries (like assertion libraries) relatively difficult
  * Asynchronous testing can be a bit of a headache
  * No baked-in headless run support
  
## Jasmine

### Pros:
  * Simple setup for node through jasmine-node
  * Headless running out of the box
  * Nice fluent syntax for assertions built-in, and does play pretty well with other assertion libraries
  * Supported by many CI servers (TeamCity, Codeship, etc.) and some that don't support natively have plugins (jenkins has a maven plugin)
  * Descriptive syntax for BDD paradigm
  
### Cons:
  * Asynchronous testing can be a bit of a headache
  * Expects a specific suffix to all test files (*spec.js by default)

## Mocha

### Pros:
  * Simple setup
  * Headless running out of the box
  * Allows use of any assertion library that will throw exceptions on failure, such as Chai
  * Supported by some CI servers and plugins for others (jenkins has a maven plugin)
  * Has aliases for functions to be more BDD-oriented or TDD-oriented
  * Highly extensible
  * Asynchronous testing is a breeze
  
### Cons:
  * Newer to the field, so support might be lacking in certain areas
