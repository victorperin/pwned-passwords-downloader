const getFilesInformation = require('./src/get-files-information');

Promise.resolve()
  .then(getFilesInformation)
  .then(console.log)
