# eCommerce API

## Built With

* Node.js
* Express.js
* MongoDB

## Environmnetal Variables
You must add DB username and password in `index.js`

```js
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.gnkjwte.mongodb.net/shop?retryWrites=true&w=majority`)
    .then(() => console.log("DB Connection Sucessfull"))
    .catch((err) => console.log(err));
```