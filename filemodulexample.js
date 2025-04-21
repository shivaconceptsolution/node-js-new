var file = require('fs')
file.open('student.txt','w',function(err,file){
    if(err)
        throw err
    console.log('file created')
});
file.writeFile('student.txt','wecome in fs module', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

file.readFile('student.txt',(err,data)=>{
    if (err) throw err;
    var array = data.toString().split(" ");
    for(i of array) {
        // Printing the response array
        console.log(i);
     }
});

file.rename('student.txt', 'stunew.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
  });

  file.unlink('stunew.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
  });

