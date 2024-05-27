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
  username: string;
  password: string;
  email: string;
  image: string;
  role: string;
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
};
