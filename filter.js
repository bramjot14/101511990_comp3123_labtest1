const { resolve } = require("path"); 

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

function lowerCaseWords(words) {
  return new Promise((resolve, reject) => {
    let filterArray = []; 

    // Used for loop for filtering the strings
    for (let item of words) {
      if (typeof item == 'string') { const lower = item.toLowerCase()
        filterArray.push(lower)  
      }}

    if (filterArray.length > 0) {
      return resolve(filterArray)
    } else {
      return reject("No strings found to convert");
    }
  });
}

// async function with try/catch
async function tryThis(value = mixedArray) {
  try {
    const result = await lowerCaseWords(value);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

//Result
tryThis(mixedArray);
