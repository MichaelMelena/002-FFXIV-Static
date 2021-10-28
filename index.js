const fs = require('fs');

// File destination.txt will be created or overwritten by default.
//var args = process.argv.slice(2)
let source = "./node_modules/bootstrap/dist/js/bootstrap.bundle.js"
let destination = "./site/js/bootstrap.bundle.js"
fs.copyFile(source, destination, (err) => {
  if (err) throw err;
  console.log(`${source} was copied to ${destination}`);
});