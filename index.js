const fs=require("fs")
const http=require("http")
const port=process.env.PORT || 4000;


const home=fs.readFileSync("./index.html","utf-8")
const about=fs.readFileSync("./about.html","utf-8")



const server=http.createServer((req,res)=>{
   if(req.url==="/"){
    return res.end(home)
   }
   else if(req.url==="/about"){
    return res.end(about)
   }
   else{
    return res.end("<h1>Page not found</h1>")
   }
    
})

server.listen(port,()=>{
    console.log('server is runnig on port');
})

