// Import modules
import createUserObject from './createUser.js'
import API from './loginAPICall.js'

// Object houses methods corresponding to "register new user" and "login existing user" components
const loginRegisterListeners = {
  // Method registers new user and logs them in to dashboard
  registerButtonListener() {
    // Accessing the register submit button in modal
    const registerButton = document.getElementById('submitRegistration')

    // Event listener when register submit button is clicked
    registerButton.addEventListener('click', event => {
      // Accessing the user input values in the registration form
      const usernameInputValue = document.getElementById('username').value
      const usernameEmailValue = document.getElementById('userEmail').value
      const usernamePasswordValue = document.getElementById('userPassword').value

      // Checking if any input fields are empty, if so return error message
      if (usernameInputValue === "" || usernameEmailValue === "" || usernamePasswordValue === "") {
        document.getElementById('errorContainer').innerHTML = "Please complete all sections"
        // Checking if registerAuth is "false", meaning new user object can be created
      } else if (!this.registerAuth(usernameInputValue, usernameEmailValue)) {
        const newUserObject = createUserObject(usernameInputValue, usernameEmailValue, usernamePasswordValue)
        // Invoking Post method passing-in newUserObject and posting new user in database
        API.postUser(newUserObject).then((response) => {
          // Reset registration form
          document.getElementById('registrationForm').reset()
          // Setting new user id to session storage
          sessionStorage.setItem("activeUser", response.id)
          // Invoking method to redirect user to dashboard
          this.redirectToDashboard()
        })
      }
    })
  },
  // Method checking if new username and email already exists in database
  registerAuth(usernameInputValue, usernameEmailValue) {
    // Using the find array method to filter through array of user objects in database and returning elements matching new username and email, otherwise the find method returns "undefined" meaning new username and email is available for use
    const userFound = API.listOfUsers.find((currentUserObject) => currentUserObject.username === usernameInputValue || currentUserObject.email === usernameEmailValue)

    // Checking if userFound variable is NOT undefined, return error message stating "user already exists", additionally returning "true" to stop the else-if condition in loginRegisterListeners from executing
    if (userFound !== undefined) {
      document.getElementById('errorContainer').innerHTML = "User already exists"
      return true
      // Otherwise returning "false" and else-if condition in loginRegisterListeners can move forward
    } else {
      return false
    }
  },
  // Method verifies user logging in and directs them to their dashboard
  loginAuth() {
    // Accessing the login button in the DOM
    const loginButton = document.getElementById('loginButton')

    // Event listener when user clicks the login button
    loginButton.addEventListener('click', event => {
      // Preventing default submit functions from executing
      event.preventDefault()

      // Accessing the user input values in the login form
      const usernameInputValue = document.getElementById('usernameLogin').value
      const usernamePasswordValue = document.getElementById('userPasswordLogin').value

      // Using the find array method to filter through array of user objects in database and returning elements matching existing username and password
      const userFound = API.listOfUsers.find((currentUserObject) => currentUserObject.username === usernameInputValue && currentUserObject.password === usernamePasswordValue)

      // Checking if userFound variable is "undefined", meaning user attempting to log-in does not exist, return error message
      if (userFound === undefined) {
        document.getElementById('errorLoginContainer').innerHTML = "The username or password is incorrect"
        return true
        // Otherwise if user exists
      } else {
        // Set existing user id to session storage
        sessionStorage.setItem("activeUser", userFound.id)
        // Reset login form 
        document.getElementById('loginForm').reset()
        // Invoking method to redirect user to dashboard
        this.redirectToDashboard()
      }
    })


  },
  // Method redirecting user to dashboard
  redirectToDashboard() {
    window.location.replace("http://localhost:5000/src/dashboard");
  }
}

// Export modules
export default loginRegisterListeners;
