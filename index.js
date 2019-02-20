const fs = require("fs")
const os = require("os")
const http = require('http')

let template = fs.readFileSync('./index.html', 'utf8')
template = template.replace("$CONTAINER_ID", os.hostname())

http.createServer((req, res) => {
    res.write(template)
    res.end()
}).listen(3000, () => {
    console.log("Up and running!")
})