// Function that returns a resolved promise after 500ms time
const resolve = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let successMessage = { message: 'delayed success!' }
        resolve(successMessage) 
      }, 500);
    });
  };
  
  // Function that returns a rejected promise after 500ms time
  const reject = () => {
    return new Promise((resolve, reject) => { 
      setTimeout(() => {let error = { error: 'delayed exception!' };
        reject(error);
      }, 500)
    })
  };
  
  // Async function for handling both of the promises
  const handlePromises = async () => {
    try {
      const successResult = await resolve();
      console.log(successResult); // { message: 'delayed success!' }
  
      const errorResult = await reject();
      console.log(errorResult); 

    } 
    catch (error) {
      console.error(error); 
    }
  };
  
  // Callingfunction
  handlePromises()
  