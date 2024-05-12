const globalErrHandler = (err, req, res, next) => {
    // status
    // message
    // stack
//     const stack = err.stack: Extracts the error stack trace, which provides details about the location where the error originated.
// const message = err.message: Extracts the error message, which describes the nature of the error.
// const status = err.status ? err.status : 'failed': Checks if the error object has a status property. If it does, it's used. Otherwise, a generic status of "failed" is assigned.
// const statusCode = err.statusCode ? err.statusCode : 500: Similar to status, this checks for a statusCode property in the error object. If present, it's used. Otherwise, a default status code of 500 (Internal Server Error) is used.
    const stack = err.stack;
    const message = err.message;
    const status = err.status ? err.status : 'failed'
    const statusCode = err.statusCode ? err.statusCode:500;
    res.status(statusCode).json({
        status,
        message, 
        stack, 
    });
}

// Not found middleware
/* *
* function is designed to handle situations where a requested resource (URL) is not found on the server. It essentially creates a custom error object and passes it on to the next middleware in the chain,
*/
const notFoundErr = (req, res, next) => {
    const err = new Error(`Can't find ${req.originalUrl} on the server.💣`);
    next(err);
};

module.exports ={globalErrHandler, notFoundErr} ;