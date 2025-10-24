// Function to fetch data from a database
function fetchDataFromDatabase(){
  return new Promise((resolve, reject) => {
    console.log("Fetching data from database...")// To print the status message 
    setTimeout(() => {
      const data = false; // To check if the data is available

      if (data) {
        resolve("Data fetched successfully!"); // Output to be printed if date is available
      } else {
        reject("Data not found!"); // Output to be printed if date is not available
      }
    }, 3000); // A 3 second delay is added
  });
}

// Call the function and handle the Promise
fetchDataFromDatabase()
  .then((message) => {
    console.log(message); // Output to be printed if resolved
  })
  .catch((error) => {
    console.error(error); // Output to be printed if rejected
  });