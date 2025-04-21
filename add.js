const http = require('http')
const url = require('url')
const hostname = '127.0.0.1'
const port = 5000
const server = http.createServer((req,res)=>{
   const q = url.parse(req.url,true) //parse url 
   const data = q.query // fetch url parameter into object form
   res.statusCode=200;
   res.setHeader('Content-Type', 'text/html')
   let a=data.txtnum1
   let b=data.txtnum2
   let c=data.txtnum3
   let d=data.txtnum4
   let e=data.txtnum5
  
   let o=''
   let count=0
   let grace=0
   if(a<33)
   {
      count++;
      grace=a
   }
  
   if(b<33)
   {
      count++;
      grace=b
   }
   if(c<33)
   {
      count++;
      grace=c
   }
   if(d<33)
   {
      count++;
      grace=d;
   }   
   if(e<33)
   {
      count++;
      grace=e;
   }
   if(count==0 || (count==1 && grace>=28))
   {     
      let result=0;
      if(count==0) 
      {
         result = (parseInt(a)+parseInt(b)+parseInt(c)+parseInt(d)+parseInt(e))/5
      }
      else
      {
         result = (parseInt(a)+parseInt(b)+parseInt(c)+parseInt(d)+parseInt(e) + 
         (33-grace))/5 + ' pass by grace'
      }
   if(result>33 && result <45 )
   {
   o = `congratulation you are pass in third division with ${result}%`
   }
   else if(result<60)
   {
     o = `congratulation you are pass in second division with ${result}%`
   }
   else
   {
      o = `congratulation you are pass in first division with ${result}%`
   }
}

   else if(count==1)
   {
      o='sorry you are suppl'
   }
   else
   {
       o='sorry you are fail'
   }

   res.end(`<h1>result is ${o}</h1>`)
})

server.listen(port,hostname,()=>{console.log(`Server running at http://${hostname}:${port}/`)})