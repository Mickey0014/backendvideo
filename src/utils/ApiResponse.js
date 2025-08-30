class ApiResponse {
    constructor(status, data,message = "success"){
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.success = this.statusCode<400;
    }
}
