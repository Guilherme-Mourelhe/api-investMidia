import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default async function connect() {
  await client.connect();

  const db = client.db("lucas-guidine");
  return { db, client };
}
