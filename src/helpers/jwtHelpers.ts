/* eslint-disable @typescript-eslint/no-explicit-any */
import { jwtDecode } from "jwt-decode";

// export const verifyToken = (token: string) => {
//   try {
//     const decoded = jwt.verify(
//       token,
//       process.env.JWT_ACCESS_SECRET as string
//     ) as JwtPayload;
//     return decoded;
//   } catch (error: any) {
//     console.log(error);
//     return null;
//   }
// };

export const decodeToken = (token: string) => {
  try {
    const decoded = jwtDecode(token);
    return decoded;
  } catch (error: any) {
    console.log(error);
    return null;
  }
};
