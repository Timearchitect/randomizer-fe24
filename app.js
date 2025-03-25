var fs = require('fs')
const antalGrupper = 6

fs.readFile('lista.json', 'utf8', function (err, data) {
    console.log(data)
    let jsonObj = JSON.parse(data)
    console.log(jsonObj)
    /*   res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data); */
    // return res.end();

    //randomize

    let array = jsonObj.FE24
    array.sort((a, b) => {
        return Math.random() - 0.5
    })
    console.log(array)


    let grupperObject = {}

    for (let i = 0; i < antalGrupper; i++) {
        grupperObject['grupp' + (i+1)] = []
    }

    for (let i = 0; i < array.length; i++) {
        grupperObject['grupp' + (i%antalGrupper+1)].push( array[i]);
        
        //grupperObject['grupp' + (+1)].push( array[i]);
        
    }
    jsonObj = JSON.stringify(grupperObject)
    console.log(grupperObject)

    fs.writeFile('grupper.json', jsonObj, function (err) {
        if (err) throw err
        console.log('Saved!')
    })
})
