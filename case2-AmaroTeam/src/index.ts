import { app } from "./app";
import { getAllProducts } from "./endpoints/getAllProducts";
import { getProductById } from "./endpoints/getProductById";
import { postProduct } from "./endpoints/postProduct";

app.get("/products", getAllProducts)
app.get("/products/:id", getProductById)
app.post("/products", postProduct)