import express from "express";
import * as homeController from "./controllers/home";
import * as searchController from "./controllers/search";

const app = express();
app.set("port", 3000);

app.get("/", homeController.index);
app.get("/search", searchController.index);

export default app;