import { Product } from "./../entity/Product";
import { Order } from "./../entity/Order";
import { Router } from "express";
import { OrderLine } from "../entity/OrderLine";

const router = Router();

router.get("/", async (req, res) => {
  const orders = await Order.find({
    relations: { orderlines: { product: true } },
  });
  res.json({ data: orders });
});

router.post("/create", async (req, res) => {
  try {
    const { firstName, lastName, mobileNum, city, address, orderNumber, orderlines, } = req.body;

    const order = Order.create({
      firstName,
      lastName,
      mobileNum,
      city,
      address,
      orderNumber,
    });
    await order.save();

    for (let i = 0; i < orderlines.length; i++) {
      const item = await Product.findOne({ where: { id: orderlines[i].productId  },});
       if (!item) return res.status(404).json({ message: "item not found" });

      const orderline = OrderLine.create({
        quantity: orderlines[i].quantity,
        product: item,
        order,
      });
      await orderline.save();
    }

    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = +req.params.id;
    const order = await Order.findOne({
      where: { id: id },
    });
    if (!order) return res.status(404).json({ message: "Not found" });
    res.json({ order });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

export default router;
