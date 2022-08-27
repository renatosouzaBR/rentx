import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";

import { User } from "./model/user";
import { Car } from "./model/car";
import { schema } from "./schema";

const adapter = new SQLiteAdapter({
  schema,
});

const database = new Database({
  adapter,
  modelClasses: [User, Car],
});

export { database };
