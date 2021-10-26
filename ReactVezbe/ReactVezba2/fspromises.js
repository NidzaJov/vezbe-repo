const fs = require('fs');
const fsPromises = fs.promises;
const fsConstants = fs.constants;

const fileContents = 'Hello World';

const writeToFile = async () => {
    try {
        const fileHandle = await fsPromises.open('./somefile.txt',
          fsConstants.O_CREAT | fsConstants.O_RDWR);
        const results = (await fileHandle.readFile()).toString();
        console.log(`File read results: ${results}`);
        await fileHandle.close();
    }
    catch (e) {
        console.log('An error ocurred!', e);
    }
};

writeToFile();