# eCommerce API

To run the application

1. Clone this repo
2. Run `npm install`
3. Run `npm start`

## Built With

* Node.js
* Express.js
* MongoDB
* CryptoJS

## Environmental Variables

### MongoDB URL

You must add your MongoDB url in the `index.js`

```js
mongoose.connect(`${process.env.MONGO_URL}`)
    .then(() => console.log("DB Connection Sucessfull"))
    .catch((err) => console.log(err));
```

### CryptoJS AES secret key

You need to add passphrase in `src/auth.js` . It's being used by CryptoJS AES algorithm to to envrypt/decrypt passwords.

```js
password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
```
