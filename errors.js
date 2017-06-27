/*throw 1;
throw "hola mundo";
throw { text: "hola" }*/

function CustomError(message) {
    this.message = message;
}

CustomError.prototype = Object.create(Error.prototype);

throw CustomError("error molón");

throw Error("tal y pascual")
