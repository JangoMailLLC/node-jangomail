// module.exports = require('./lib/jangomail');

let JangoMail = require('./lib/jangomail');

let jm = new JangoMail('YOUR USERNAME', 'YOUR PASSWORD');

jm.call('AddGroup', {
  GroupName: 'My new list'
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});
