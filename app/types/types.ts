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
      errors: errors[];
      message: string;
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
interface tour {
  status: string;
  data: {
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
  };
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
export type {
  loginForm,
  signUpForm,
  cookie,
  ErrorResponse,
  url,
  user,
  userResponse,
  resMessage,
  tourForm,
  tour,
};
