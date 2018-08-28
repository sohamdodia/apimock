import csv from 'fast-csv';
import fs from 'fs';

let adder = (sum, element) => {
	let p = new Promise ((resolve) => {
    resolve(sum + element);
  });

  return p;
}


export let loop = async (request, h) => {
  let numbers = [1,2,3,4,5,6,7,8,9,10];
  let sum = 0;
  
  for (let i = 0; i < numbers.length; i++) {
    console.log(`Trying to add ${numbers[i]}`);
    sum = await adder(sum, numbers[i]);
    console.log(`Current sum is ${sum}`);
  }
  
  return sum;
};

const writeFile = (file, fileName) => new Promise (resolve => {
  file.pipe(fs.createWriteStream(fileName)).on('close', () => resolve());
});

export const csv2jsonHandler = async (request, h) => {
  const dir = __dirname + '/../../../uploads/';

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  const filePath = `${dir}${request.payload["file"].hapi.filename}_${Date.now()}`;
  
  await writeFile(request.payload["file"], filePath);

  return await csv2json(filePath);
}

const csv2json = async (filePath) => new Promise((resolve) => {
  const response = [];

  csv
    .fromPath(filePath,{ headers: true })
    .on("data", data => response.push(data))
    .on("end", () => {
      fs.unlinkSync(filePath)
      resolve(response);
    });
});

