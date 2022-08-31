var fs      = require('fs')
var util    = require('util')

var logPath = 'server.log'
var logFile = fs.createWriteStream(logPath, { flags: 'a' })

console.log = function() {
    logFile.write(util.format.apply(null, arguments) + '\n')
    process.stdout.write(util.format.apply(null, arguments) + '\n')
}

console.error = function() {
    logFile.write(util.format.apply(null, arguments) + '\n')
    process.stderr.write(util.format.apply(null, arguments) + '\n')
}

module.exports = {

}
