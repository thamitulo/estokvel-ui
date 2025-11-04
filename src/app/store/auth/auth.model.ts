export interface User {
  name?: string;
  email?: string;
  [key: string]: any;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isLoggedIn: boolean;
}

export const initialAuthState: AuthState = {
  user: null,
  token: null,
  isLoggedIn: false,
};
