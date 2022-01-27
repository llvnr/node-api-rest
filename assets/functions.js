exports.success = function(result) {
    return {
        status: 'success',
        result: result
    }
}

exports.error = function(message) {
    return {
        status: 'error',
        message: message
    }
}

exports.isErr = (err) => {
    return err instanceof Error;
}

exports.checkAndChange = (obj) => {
    if(this.isErr(obj)) {
        return this.error(obj.message)
    } else {
        return this.success(obj)
    }
}