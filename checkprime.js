var fs = require('fs')
var output=''
let checkprime=()=>{
let num=5
if(num!=2 && num%2==0)
{
    output=`result of ${num} is not prime \n`;
}
else
{
for(var i=2;i<num;i++)
{
    if(num%i==0)
    {
        output=`result of ${num} is not prime \n`;
      break;

    }
}
if(num==i)
{
    output=`result of ${num} is not prime \n`;
}
}
return output;
}

fs.appendFileSync("primdata.txt",checkprime())
let result = fs.readFileSync("primdata.txt")
console.log(result.toString())
//fs.close()
