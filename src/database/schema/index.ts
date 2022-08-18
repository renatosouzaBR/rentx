import { appSchema } from "@nozbe/watermelondb";

import { userSchema } from "./userSchema";

export const schema = appSchema({
  version: 1,
  tables: [userSchema],
});
