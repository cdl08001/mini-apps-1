const fs = require('fs');

const path = require('path');

const exportReport = (csvData) => {
  const exportDirectory = path.dirname(__dirname) + '/exports/data.csv';
  fs.writeFile(exportDirectory, csvData, (err) => {
    if (err) throw err;
    console.log('File has been saved successfully!')
  });
};

module.exports = exportReport;