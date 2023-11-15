import { User, Session } from "next-auth";
export interface SessionInterface extends Session {
  user: User & {
    id: string;
    name: string;
    email: string;
    avatarUrl: string;
  };
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  perform: {
    score: Number;
    streak: Number;
    level: Number;
  };
}
