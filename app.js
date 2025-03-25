var fs = require('fs'); 
fs.readFile('lista.json' , "utf8", function(err, data) {
    console.log(data);
    let jsonObj = JSON.parse(data) 
    console.log(jsonObj);
  /*   res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data); */
   // return res.end();

   jsonObj = JSON.stringify(jsonObj)
   fs.writeFile('grupper.json', jsonObj, function (err) {
    if (err) throw err;
    console.log('Saved!');
  }); 

  });