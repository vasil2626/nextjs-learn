import { db } from "@/db/db";

export default function getUsers(req, res) {
  res.status(200).json(db);
}
