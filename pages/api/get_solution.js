import { db } from "../../db/db";

export default function getSolution(req, res) {
  //   res.status(200).json({ name: "John Doe" });
  res.status(200).json(db.stepCard);
}
