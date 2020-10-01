'use strict'

class Register {
  get rules () {
    return {
        email: 'required|email|unique:users',
        password: 'required|min:5|confirmed'
    }
  }

  get messages(){
    return {
      'email.required': 'The Email field is required!',
      'email.email': 'Enter a valid email address.',
      'email.unique': 'Email already exists!',
      'password.required': 'The Password field is required!',
      'password.min': 'Password requires min 5 characters.',
      'password.confirmed': 'The passwords donot match!'
    }
  }
}

module.exports = Register
