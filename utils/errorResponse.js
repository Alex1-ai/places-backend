// OVERRIDING THE ERROR MESSAGE TO CUSTOM ERROR MESSAGE
class ErrorResponse extends Error {
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}


module.exports = ErrorResponse;