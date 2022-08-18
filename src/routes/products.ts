import { Product } from "./../entity/Product";
import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  const products = await Product.find({
    relations: { category: true  }
  });
  res.json({ data: products });
});

export default router;
