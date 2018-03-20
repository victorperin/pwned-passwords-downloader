const getFilesInformation = require('./get-files-information');

getFilesInformation()
    .then(console.log)
    .catch(console.error);
