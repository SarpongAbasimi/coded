export interface UserDetails {
  name: String;
  email: String;
  password: String;
}

export interface Registration {
  signUp(details: UserDetails): void;
}
