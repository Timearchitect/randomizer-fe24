var fs = require('fs'); 
const antalGrupper = 5


fs.readFile('lista.json' , "utf8", function(err, data) {
    console.log(data);
    let jsonObj = JSON.parse(data) 
    console.log(jsonObj);
  /*   res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data); */
   // return res.end();

  
//randomize


let array= jsonObj.FE24
array.sort( (a,b)=>{
return Math.random() - 0.5
} )
  console.log(array);
  
  
   jsonObj = JSON.stringify(jsonObj)

  



   fs.writeFile('grupper.json', jsonObj, function (err) {
    if (err) throw err;
    console.log('Saved!');
  }); 

  });