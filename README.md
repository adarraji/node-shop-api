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
* JSON Web Token

## Environmental Variables

### MongoDB URL

You must add your MongoDB url `MONGO_URL` in the `index.js`


### CryptoJS AES secret key

You need to add passphrase `PASS_SEC` in `src/auth.js` . It's being used by CryptoJS AES algorithm to to envrypt/decrypt passwords.


### JSON Web Token secret key

You need to add the JWT secret `JWT_SEC` in `src/auth.js` and `verifyToken.js`

### Stripe secret key

Add your Stripe secret key `STRIPE_KEY`
