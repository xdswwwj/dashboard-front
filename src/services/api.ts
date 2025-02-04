import { JwtPayload } from "jwt-decode";

export interface JwtTokenPayload extends JwtPayload {
  id: string;
  email: string;
  provider: string;
}
