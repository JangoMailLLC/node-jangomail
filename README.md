# node-jangomail

A simple Promise based wrapper for the JangoMail API.

## Installing

Using npm:

`$ npm install --save node-jangomail`

## Examples

Add a new List to your account.

```
const JangoMail = require('node-jangomail');

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
```

## Notes

When instantiating the `JangoMail` class, the `Username` and `Password` fields are optional.  If you do not provide them, you must include them in the API method you're calling.

However, if you provide them during instantiation, they will be automatically added to any calls you make.

For instance, when making a call to `SendTransactionalEmail`, you're normally required to provide the following parameters:

* Username
* Password
* FromEmail
* FromName
* ToEmailAddress
* Subject
* MessagePlain
* MessageHTML
* Options

However, if you have provided your `Username` and `Password` up front, you only have to provide the following:

* FromEmail
* FromName
* ToEmailAddress
* Subject
* MessagePlain
* MessageHTML
* Options

For instance, to send a transactional message through our service, try the following code:

```
const JangoMail = require('node-jangomail');

let jm = new JangoMail('YOUR USERNAME', 'YOUR PASSWORD');

jm.call('SendTransactionalEmail', {
    FromEmail: 'john@example.com',
    FromName: 'John Doe',
    ToEmailAddress: 'jane@example.com',
    Subject: 'This is a subject line',
    MessagePlain: 'Plaintext Body',
    MessageHTML: 'HTML Body',
    Options: ''
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});
```
