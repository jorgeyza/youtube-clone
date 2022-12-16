import 'express';

interface UserLocal {
  _id: string;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  iat: number;
  exp: number;
}

interface Locals {
  user: UserLocal;
}

declare module 'express' {
  export interface Response {
    locals: Locals;
  }
}
