import { signupFns } from "@/api/api-function/auth.function";
import {
  AuthState,
  LoginPayload,
  SignupPayload,
} from "@/types/interface/auth.interface";
import { create } from "zustand";

export const useAuthStore = create<AuthState>((set) => ({
  isLoading: false,
  isError: null,
  isAuthenticate: false,
  role: null,
  user: null,
  imagePreview: null,
  setImagePreview: (payload: string)=> {
    set({imagePreview: payload})
  },
  signupUser: async (payload: SignupPayload) => {
    console.log('data in auth store', payload)
    const res = await signupFns(payload)
    return res
    
  },
  loginUser: async (payload: LoginPayload) => {
    return null;
  },
  logout: async () => {
    return null;
  },
}));
