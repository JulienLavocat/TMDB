/*
    Error codes:
        - 100 => Invalid ISO language code
*/

class TMDBError extends Error {

    constructor(code, message) {
        super(message)
        this.code = code;
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

module.exports = TMDBError;