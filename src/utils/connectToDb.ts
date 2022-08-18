import { AppDataSource } from "../utils/data-source";

async function connectToDb() {
  try {
    await AppDataSource.initialize();
    console.log("Connected to PostgreSQL DB");
  } catch (error) {
    console.error("DB Connection Error", error);
  }
}

export default connectToDb;
