import { Gender } from "@/user/enums";

export interface SignUpUserDTO {
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  email: string;
  gender: Gender;
}
