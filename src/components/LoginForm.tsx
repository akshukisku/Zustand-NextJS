"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import {
  Apple,
  Mail,
} from "lucide-react";
const LoginForm = () => {
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
            <div className="space-y-2 text-center">
              <h1 className="text-4xl font-bold">
                Unlock the Future
              </h1>

              <p className="text-muted-foreground">
                Log in and let AI supercharge your workflow.
              </p>
            </div>

            {/* Social Login */}
            <div className="space-y-3">

              <Button
                variant="outline"
                className="w-full"
              >
                <Mail className="mr-2 h-4 w-4" />
                Sign in with Outlook
              </Button>

              <Button
                variant="outline"
                className="w-full"
              >
                <Apple className="mr-2 h-4 w-4" />
                Login with Apple
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <Separator className="flex-1" />
              <span className="text-xs text-muted-foreground">
                OR
              </span>
              <Separator className="flex-1" />
            </div>

            <div className="space-y-4">
              <Input
                type="email"
                placeholder="E-mail"
              />

              <Input
                type="password"
                placeholder="Password"
              />

              <Button className="w-full">
                Sign In Now
              </Button>
            </div>

            <p className="text-center text-sm text-muted-foreground">
              New here?{" "}
              <Link
                href="/signup"
                className="font-medium text-foreground"
              >
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default LoginForm