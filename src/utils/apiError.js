class apiError extends Error {
    constructor(
        statusCode,
        massage = "something went wrong",
        errors = [],
        statck =""
    ){
        super(massage)
        this.statusCode = statusCode
        this.data = null
        this.massage = massage
        this.success = false
        this.errors = errors


        if(stack){
            this.stack = statck
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}


export {apiError}