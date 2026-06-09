import { USER_ROLE } from "../enum/enum";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface SignupPayload extends LoginPayload {
  name: string;
  phone: string;
  role: USER_ROLE;
  profilePic?: File | null;
  auth_user_id?: string | null;
}

export interface User extends Omit<SignupPayload, "profilePic"> {
  id: string;
  created_at: string;
  profilePic?: string | null;
}

export interface AuthState {
  isLoading: boolean;
  isError: string | null;
  isAuthenticate: boolean;
  role: USER_ROLE | null;
  user: User | null;
  imagePreview: string | null;
  setImagePreview: (payload: string) => void;
  signupUser: (payload: SignupPayload) => Promise<any>;
  loginUser: (payload: LoginPayload) => Promise<any>;
  logout: () => Promise<any>;
}
