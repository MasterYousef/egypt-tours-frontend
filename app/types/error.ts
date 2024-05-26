type errors = {
    type:string,
    msg:string
}
type ErrorResponse = {
    response:{
        data: {
            errors: errors[];
            message:string
          };
    }
}
export default ErrorResponse