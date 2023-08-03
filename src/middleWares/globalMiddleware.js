const globalMiddleware = function(req,res,next){

    console.log("hello World")
    next()
}

module.exports.globalMiddleware=globalMiddleware