import express from "express";
import { getCustomers, getGeography, getProduct, getProducts, getTransactions } from "../controller/client.js";

const router = express.Router();

router.get("/products", getProducts);
router.get("/product/:id", getProduct);
router.get("/customers/", getCustomers);
router.get("/transactions/",getTransactions);
router.get("/geography/",getGeography);

export default router;
