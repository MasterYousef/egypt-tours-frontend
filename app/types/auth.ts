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
export type {loginForm,signUpForm}