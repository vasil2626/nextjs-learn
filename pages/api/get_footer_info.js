import { db } from "@/db/db";

export default function getFooterInfo(req, res) {
  res.status(200).json(db.footer);
}
