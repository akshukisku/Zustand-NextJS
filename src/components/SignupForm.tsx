"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import { Apple, Loader2, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "@/services/validation/signup.validation";
import { SignupPayload } from "@/types/interface/auth.interface";
import { signupInputFields } from "@/services/json/input-fields/signup.input";
import DyanmicInput from "./DyanmicInput";
import { useAuthStore } from "@/store/useAuthStore";
import { Avatar, AvatarImage } from "./ui/avatar";
const SignupForm = () => {
  const { signupUser, isLoading, isError, imagePreview, setImagePreview } =
    useAuthStore();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<SignupPayload>({
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = async (data: SignupPayload) => {
    // console.log('data on submit', data)
    try {
      const res = await signupUser(data);
      console.log("response in signup form", res);
    } catch (error: any) {
      console.log("err in submit", error.message);
    }
  };

  return (
    <main className="min-h-screen bg-background p-4">
      <div className="mx-auto flex min-h-[95vh] max-w-7xl overflow-hidden rounded-3xl border shadow-xl">
        {/* Left Image */}
        <div className="relative hidden w-1/2 lg:block">
          <Image
            src="https://images.unsplash.com/photo-1590796583326-afd3bb20d22d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Login"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Right Side */}
        <div className="flex flex-1 items-center justify-center p-8 lg:p-16">
          <div className="w-full max-w-md space-y-6">
            <div className="space-y-4">
              <form onSubmit={handleSubmit(onSubmit)}>
                {signupInputFields.map((field) => (
                  <div className="" key={field.name}>
                    <DyanmicInput
                      name={field.name}
                      label={field.label}
                      type={field.type}
                      register={register}
                      error={errors[field.name as keyof SignupPayload]?.message}
                    />
                  </div>
                ))}
                <div className="">
                  {/* <Input
                    type="file"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      setValue("profilePic", file);
                    }}
                  /> */}

                  <input
                    // ref={fileRef}
                    id="fileInput"
                    type="file"
                    // hidden
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (!file) return;
                      setValue("profilePic", file);

                      const imgUrl = URL.createObjectURL(file);
                      setImagePreview(imgUrl);
                    }}
                  ></input>

                  {/* img preview */}
                  {imagePreview && (
                    <Avatar>
                      <AvatarImage
                        src={imagePreview}
                        alt="@shadcn"
                        className="grayscale"
                      />
                    </Avatar>
                  )}
                </div>

                {isError && <p className=" text-red-400 text-2xl">{isError}</p>}
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <Loader2 className=" animate-spin" />
                  ) : (
                    "Sign In Now"
                  )}
                </Button>
              </form>
            </div>

            <p className="text-center text-sm text-muted-foreground">
              New already have an account?{" "}
              <Link href="/login" className="font-medium text-foreground">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignupForm;
