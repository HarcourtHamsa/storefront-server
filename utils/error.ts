class CustomError extends Error{
    private statusCode: number;
    
    constructor(message, statusCode ){
        super(message);
        this.statusCode = statusCode;
    }
}

export default CustomError