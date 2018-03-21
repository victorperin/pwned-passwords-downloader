const getFilesInformation = require('./get-files-information');

getFilesInformation()
    .then(info => console.log(JSON.stringify(info, null, 4)))
    .catch(console.error);
