import { appSchema } from "@nozbe/watermelondb";

import { userSchema } from "./userSchema";
import { carSchema } from "./carSchema";

export const schema = appSchema({
  version: 2,
  tables: [userSchema, carSchema],
});
