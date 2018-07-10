// Data Formatting function:

let convertData = (dataObject) => {

  // Create empty string variable to store results
  let results = '';
  // Create recursive function that accepts an object
  let formatText = (object) => {

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
    results = results.replace(/,\s*$/, "\n");
    }

    // Otherwise, the results string is not empty, and we need to push values.
    if (results.length > 0) {
      for (field in object) {
        if (field !== 'children') {
          results = results + object[field] + ','; 
        }
      }
      results = results.replace(/,\s*$/, "\n");
    }

    // If 'children' property is populated, recursively call function for each object
    if (object.children.length > 0) {
      let children = object.children;
      children.forEach((child) => {formatText(child)});
    } else {
      // Otherwise, return out of current recursive call
      return;
    }
  }

  // Call convertData on parsed data:
  formatText(dataObject);


  // Return string.
  return(results);
}

module.exports = convertData;