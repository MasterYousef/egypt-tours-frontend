type url = `/api/v1/${string}`;
interface loginForm extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
}
interface signUpForm extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  password: HTMLInputElement;
  passwordConfirm: HTMLInputElement;
}
interface tourForm extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  img: HTMLInputElement;
  duration: HTMLInputElement;
  guides: HTMLInputElement;
  maxPeople: HTMLInputElement;
  description: HTMLInputElement;
  price: HTMLInputElement;
}
interface oneTour {
  _id: string;
  title: string;
  imageCover: string;
  description: string;
  price: number;
  people: number;
  maxPeople: number;
  duration: number;
  guides: number;
  start: string;
  role: string;
  images?: string[];
  ratingsAverage?: number;
  ratingsQuantity?: number;
}
interface cookie {
  name: string;
  value: string;
}
type errors = {
  type: string;
  msg: string;
};
type ErrorResponse = {
  response: {
    data: {
      errors?: errors[];
      message?: string;
    };
  };
};
interface user {
  _id: string;
  username: string;
  password: string;
  email: string;
  image: string;
  role: string;
}
interface rate {
  _id: string;
  comment: string;
  rate: number;
  tour: string;
  user: user
}
interface rateResponse {
  status: string;
  data: rate;
}
interface reviews {
  status: string;
  data: rate[];
  result: number;
  paginationResult: paginationResult;
}
interface tour {
  status: string;
  data: oneTour;
}
interface userResponse {
  status: string;
  data?: user;
  token?: string;
}
interface resMessage {
  status: string;
  message: string;
}
interface paginationResult {
  page: number;
  limit: number;
  pages: number;
  prev?: number;
  next?: number;
}
interface tourResponse {
  status: string;
  result: number;
  data: oneTour[];
  paginationResult: paginationResult;
}
interface coupon {
  _id:string;
  name:string;
  discount:number;
  expire:string
}
interface couponRes {
  status: string;
  paginationResult: paginationResult;
  data:coupon[]
}
type CouponState = {
  success?: string;
  error?: string;
  errors?: errors[];
}
interface query {
  sort?: string;
  keyword?: string;
  scroll?: string;
}
export type {
  loginForm,
  signUpForm,
  cookie,
  ErrorResponse,
  errors,
  url,
  user,
  userResponse,
  resMessage,
  tourForm,
  tour,
  tourResponse,
  oneTour,
  query,
  paginationResult,
  rateResponse,
  reviews,
  coupon,
  couponRes,
  CouponState
};
