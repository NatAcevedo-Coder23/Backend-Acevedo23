<<<<<<< HEAD
const express = require("express");
const productsRouter = require("./routes/products.router");
const cartRouter = require("./routes/cart.router");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.use("/api/products", productsRouter);
app.use("/api/cart", cartRouter);

app.listen(8080, () => {
	console.log("Escuchando el puerto 8080");
=======
const express = require("express");
const productsRouter = require("./routes/products.router");
const cartRouter = require("./routes/cart.router");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.use("/api/products", productsRouter);
app.use("/api/cart", cartRouter);

app.listen(8080, () => {
	console.log("Escuchando el puerto 8080");
>>>>>>> 12fe9da8e13fbbabb90323c54da3e75de9cb0195
});