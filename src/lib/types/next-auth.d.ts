import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      image: any;
      id: number;
      name: string;
      email: string;
      accessToken: string;
    };
  }
}
