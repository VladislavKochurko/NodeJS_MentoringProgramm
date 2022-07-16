const fs = require('fs');
const csv = require('csvtojson');
const readline = require('readline');

const PATH_TO_CSV_FILE = 'src/app/task1/csv/test.csv';
const PATH_TO_WRITE_FILE = 'src/app/task1/csv/write.txt';

// Read File line by line, convert each csv line to json object and write json object to txt file
function readWriteFile(pathToReadFile: string, pathToWriteFile: string) {
    const readStream = readline.createInterface({
        input: fs.createReadStream(pathToReadFile).pipe(csv()),
    });
    const writeStream = fs.createWriteStream(pathToWriteFile);
        readStream.on('line', (line: Buffer) => {
            try {
                writeStream.write(line + '\n', 'utf-8');
            } catch (error: any) {
                console.log(error);
            }
        });

        readStream.on('error', (error: any) => {
            console.log(error)
        });

        readStream.on('close', () => {
            writeStream.close();
        });
}

function main(): void {
    readWriteFile(PATH_TO_CSV_FILE, PATH_TO_WRITE_FILE);
}

main();
