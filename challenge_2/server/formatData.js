const exportReport = require('./exportReport');
// Data Formatting function:

let convertData = (dataObject, callback) => {
  // Create empty string variable to store results
  let results = '';
  // Create recursive function that accepts an object
  const formatText = (object) => {

    // If the results string is empty
    if (results.length === 0) {
      // Push all keys to string
      for (field in object) {
        // Ignore 'children' property
        if (field !== 'children') {
          results = results + field + ',';
        }
      }
      // Replace the last comma with a newline:
      results = results.replace(/,\s*$/, '\n');
    }

    // Otherwise, the results string is not empty, and we need to push values.
    if (results.length > 0) {
      for (field in object) {
        if (field !== 'children') {
          results = results + object[field] + ','; 
        }
      }
      results = results.replace(/,\s*$/, '\n');
    }

    // If 'children' property is undefined (or length is 0), return out of recursice call:
    if (object.children === undefined) {
      return;
      // Otherwise, if 'children' property is populated, recursively call function for each object
    } else if (object.children.length > 0) {
      const children = object.children;
      children.forEach((child) => {formatText(child)});
    }
  };

  // Call convertData on parsed data:
  formatText(dataObject);

  // Return string to our server once complete:
  callback(results);

  // Initiate export of the CSV file:
  exportReport(results);
};

module.exports = convertData;