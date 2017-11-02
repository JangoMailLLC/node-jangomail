'use strict';

const axios = require('axios');
const qs = require('qs');

class JangoMail {
  constructor(username, password) {
    this.url = 'https://api.jangomail.com/api.asmx/';
    this.username = username;
    this.password = password;
  }

  call(methodName, args) {
    let self = this;

    return new Promise(function (resolve, reject) {
      // If the Username and Password are not specified as part of the arguments
      // provided, try to pull them from the Object instead.
      if (!('Username' in args)) {
        args['Username'] = self.username;
      }

      if (!('Password' in args)) {
        args['Password'] = self.password;
      }

      // Make the request
      axios({
          method: 'post',
          url: `${self.url}/${methodName}`,
          data: qs.stringify(args),
          headers: {
            'Content-type': 'application/x-www-form-urlencoded'
          }
        })
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          reject(`${error.response.status}: ${error.response.statusText} - ${error.response.data}`);
        });
    });
  }
}

module.exports = JangoMail;
