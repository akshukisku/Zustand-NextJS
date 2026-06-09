
import { supabase } from "@/lib/supabsae.config";
import { SignupPayload } from "@/types/interface/auth.interface";
import { data } from "motion/react-client";

export const signupFns = async (payload: SignupPayload) => {
  try {
    const {data:authdata, error:autherror} = await supabase.auth.signUp({
        email: payload.email,
        password: payload.password,
    })
    if(autherror){
        throw autherror
    }
    if(autherror){
        throw new Error('Auth user not created')
    }
    const userId = authdata.user?.id

    let imageURL: string | null = null
    if(payload.profilePic){
        const {data: imageData}= supabase.storage.from('profile-pic')
        }

    return {
      success: true,
      message: "Signup Successfully",
      data: null,
    };
  } catch (error) {
    const err = error as { message: string };
    return {
      success: false,
      message: err.message || "Signup Failed",
    };
  }
};
