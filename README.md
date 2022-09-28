# Node eCommerce REST API

Backend application for [React eCommerce Web application](https://github.com/adarraji/react-shop) and [React Shop Admin Dashboard](https://github.com/adarraji/react-shop-admin).

Created using Node.js and MongoDB. Theis app inlcudes Node.js CRUD operations, fetching with queries and MongoDB methods. Also to provide security, This server uses JSON Web Token and verify user and admin requests. Stripe is being used aas a payment method to recevie a payment from the client side.

This is one of three parts of full stack eCommerce app. You can find the React eCommerce Web application [here](https://github.com/adarraji/react-shop) and React Admin Dashboard [here](https://github.com/adarraji/react-shop-admin)


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
* Stripe

## Environmental Variables

### MongoDB URL

You must add your MongoDB url `MONGO_URL` in the `index.js`


### CryptoJS AES secret key

You need to add passphrase `PASS_SEC` in `src/auth.js` . It's being used by CryptoJS AES algorithm to to envrypt/decrypt passwords.


### JSON Web Token secret key

Add the JWT secret `JWT_SEC` in `src/auth.js` and `verifyToken.js`

### Stripe secret key

Add your Stripe secret key `STRIPE_KEY` in `src/stripe.js`
