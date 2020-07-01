// Import modules
import loginRegisterListeners from '././login_registration/loginListeners.js'
import API from '././login_registration/loginAPICall.js'

//// Registration and Login Components ////

// Invoking method to get all users from the API 
API.getAllUsers();

// Invoking method to register and redirect new user to dashboard
loginRegisterListeners.registerButtonListener();

// Invoking method to verify existing user and redirect to dashboard
loginRegisterListeners.loginAuth();
