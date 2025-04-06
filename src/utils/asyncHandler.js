const asyncHandler = (requesthandler) => {
    return (req, res, next) => {
    Promise.resolve(requesthandler(req, res, next)).
    catch((err) => next(err));
}
}

export { asyncHandler }; 
// This is a middleware function that handles asynchronous errors in Express.js routes.
// It takes a request handler function as an argument and returns a new function that wraps the original handler in a Promise.
// If the original handler throws an error, it will be caught and passed to the next middleware function in the chain.
// This allows for cleaner error handling in Express.js applications, as you don't have to wrap every route handler in a try-catch block.
// The function is exported so it can be used in other parts of the application, such as in route definitions.