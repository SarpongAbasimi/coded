export interface UserDetails {
  name: string;
  email: string;
  password: string;
}

export interface Registration {
  signUp(details: UserDetails): void;
}

export interface Secret {
  value: string;
}

export interface UnHashedPassword extends Secret {
  value: string;
}

export interface HashedPassword extends Secret {
  value: string;
}

export interface Encryptor {
  encrypt: (password: Secret) => Promise<Secret>;
}
