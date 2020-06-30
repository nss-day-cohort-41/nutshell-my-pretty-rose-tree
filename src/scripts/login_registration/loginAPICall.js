// Object houses methods corresponding to getting/posting user data in/from API database
const API = {
  // Array storing all user objects upon invoking getAllUsers method
  listOfUsers: [],
  // Method POSTS new user object to API
  async postUser(userObject) {
    const response = await fetch('http://localhost:8088/users', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(userObject)
    });
    const userData = await response.json();
    return userData
  },
  // Method GETS all user objects from API
  async getAllUsers() {
    const response = await fetch('http://localhost:8088/users')
    const arrayOfUserObjects = await response.json()
    this.listOfUsers = arrayOfUserObjects
    return arrayOfUserObjects
  }
}

// Export modules
export default API;

