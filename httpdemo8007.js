const http=require("http")
var server=http.createServer(function(req,resp){
    console.log("method:",req.method,"url",req.url);
    resp.writeHeader(200,{"content-type":"text/html"});
    resp.write("<h1>Jay Shree Ram...</h1>")
    resp.end("<h3>Chhatrapati Shivaji Maharaj ki Jay...</h3>")
})
server.listen(8007,console.log("Your request running on port 8007"));