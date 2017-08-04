'use strict'

class CustomError extends Error {

    constructor (message, code) {
        // Calling parent constructor of base Error class.
        super(message);

        // Capturing stack trace, excluding constructor call from it.
        Error.captureStackTrace(this, this.constructor);

        // Saving class name in the property of our custom error as a shortcut.
        this.name = this.constructor.name;

        // You can use any additional properties you want.
        // I'm going to use preferred HTTP code for this error types.
        // `500` is the default value if not specified.
        this.code = code || 500;
    }
}

const error = new CustomError('Deu erro no código', 123)
