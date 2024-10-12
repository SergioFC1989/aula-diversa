import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI || "";

export class MongoDb {
  private static client: MongoClient;
  private static db: string = "aula_diversa";

  public static async connect() {
    if (this.client) {
      return this.client;
    }

    this.client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    await this.client.connect();
    return this.client;
  }

  public static async disconnect() {
    if (this.client) {
      await this.client.close();
    }
  }

  public static async getAllDocuments(collection: string) {
    try {
      const db = this.client.db(this.db);
      const cursor = db.collection(collection).find({});
      return cursor.toArray();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
