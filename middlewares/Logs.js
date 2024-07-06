

const logReq = (req, res, next)=>{
 
    console.log(`${req.params.body.name} has been added - ${Date.now()}`);
    res.status(200).send("New Character created!");
    next();

}






exports.logReq = logReq;