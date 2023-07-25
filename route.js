const fs = require('fs');

const requestHandler = (req, res) => {
    
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action ="/message"  method="POST"><b>Message :</b><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/message' && method === "POST"){
        const body = [];
  
        req.on('data', (chunk) => {
  
            // Storing the chunk data
            body.push(chunk);
            console.log(body)
        });

        req.on('end', () => {
  
            // Parsing the chunk data
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1].replaceAll("+"," ");
            
            // Printing the data
            console.log(parsedBody);
            fs.writeFileSync('message.txt',message);
        });
        
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Hello my node.js server</h1></body>');
    res.write('</html>');
    res.end();
}

// ways of writting/calling handlers 

/* module.exports = requestHandler;
 */

/* module.exports = {
    handler: requestHandler,
    someText: 'Some hard coded text'
}
 */
/* module.exports.handler = requestHandler;
module.exports.someText = 'Some Text';
 */
exports.handler = requestHandler;
exports.someText = "Some Hard coded text"; 