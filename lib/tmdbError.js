/*
    Error codes:
        - 100 => Invalid ISO language code
*/

class TMDBError extends Error {

    constructor(code, message) {
        this.code = code;
        this.message = message;
    }

    getCode() { return this.code; }
    getMessage() { return this.message; }

    toJson() {
        return {
            success: false,
            code: this.code,
            message: this.message
        }
    }

}