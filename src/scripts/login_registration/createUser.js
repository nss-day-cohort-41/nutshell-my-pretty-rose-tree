// Function creating new user object passing-in username, email and password as parameters
const createUserObject = (username, email, password) => {
  return {
    username,
    email,
    password
  }
}

// Export modules
export default createUserObject;