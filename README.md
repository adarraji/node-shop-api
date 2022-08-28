# eCommerce API

To run the application

1. Clone this repo
2. Run `npm install`
3. Run `npm start`

You must add your MongoDB url in the `index.js` file to connect to Clarifai.

## Built With

* Node.js
* Express.js
* MongoDB
* CryptoJS

## Environmental Variables
You must add DB username and password in `index.js`

```js
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.gnkjwte.mongodb.net/shop?retryWrites=true&w=majority`)
    .then(() => console.log("DB Connection Sucessfull"))
    .catch((err) => console.log(err));
```