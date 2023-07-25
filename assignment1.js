const fs = require('fs');

const http = require('http');

const server = http.createServer((req,res) => {

    const url = req.url;
    const method = req.method;
    let users = ['user1','user2','user3'];
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Welcome</title></head>');
        res.write('<body><h1>Welcome to my Assignment</h1>');
        res.write('<form action="/create-user" method="POST">');
        res.write('<b>User Name</b> <input type="text" name="user"><button type="submit" >Create User</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    
    if(url === "/users"){
        res.write('<html>');
        res.write('<head><title>Users</title></head>');
        res.write('<body><ul>');
        if(fs.existsSync('usersSample.json')){
            users = JSON.parse(fs.readFileSync('usersSample.json'));
        }
        
        for(let user of users){
            res.write('<li>'+user+'</li>');
        }
        res.write('</ul></body>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/create-user' && method === 'POST'){
        const body = [];
        req.on('data',(chunk) => {
            body.push(chunk);
            
        })
        req.on('end',()=>{
            const parseBody = Buffer.concat(body).toString();
            const response = parseBody.split('=')[1].replaceAll("+"," ");
            if(fs.existsSync('usersSample.json')){
                users = JSON.parse(fs.readFileSync('usersSample.json'));
            }
            users.push(response);
            console.log(parseBody);
            fs.writeFileSync('usersSample.json', JSON.stringify(users,null));

            res.writeHead(302, { Location: '/users' })
            return res.end();
        })
        
    }

});

server.listen(3000);