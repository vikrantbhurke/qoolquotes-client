import { Clearance } from "@/user/enums/clearance.enum";

export const permissions = {
  "appshell.visible": Clearance.LevelOne,
  "user.update": Clearance.LevelTwo,
  "user.delete": Clearance.LevelThree,
};

export type Permissions = keyof typeof permissions;
