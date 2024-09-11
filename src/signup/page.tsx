"use client";

import React, { useState } from "react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { PhoneInput } from "~/components/phone-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { AuthResponse } from "@supabase/supabase-js";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState<string>("");
  const [location, setLocation] = useState("");
  const supabase = createClientComponentClient();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // e.preventDefault();
    // // Clean the phone number by removing non-digit characters
    // const cleanedPhone = phone.replace(/\D/g, "");
    // try {
    //   const { data, error } = (await supabase.auth.signUp({
    //     email,
    //     password: password, // Make sure 'password' is defined
    //     options: {
    //       data: {
    //         full_name: name,
    //         phone_number: cleanedPhone,
    //         location: location,
    //       },
    //     },
    //   })) as AuthResponse;
    //   if (error) throw error;
    //   if (data.user) {
    //     const { error: profileError } = await supabase.from("profiles").upsert({
    //       id: data.user.id,
    //       full_name: name,
    //       phone_number: cleanedPhone,
    //       location: location,
    //     });
    //     if (profileError) throw profileError;
    //   }
    //   setIsSuccess(true);
    // } catch (error) {
    //   setError((error as Error).message);
    // } finally {
    //   setIsLoading(false);
    // }
  };
  return (
    <div className="bg-background flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Sign Up
          </CardTitle>
          <CardDescription className="text-center">
            Create a new account to get started
          </CardDescription>
        </CardHeader>
        {isSuccess ? (
          <CardContent>
            <p className="text-center text-green-600">
              Check your email for the magic link to log in.
            </p>
          </CardContent>
        ) : (
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <PhoneInput
                  placeholder="Enter phone number"
                  value={phone}
                  onChange={(value) => setPhone(value ?? "")}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2478 Penmar Ave">
                      2478 Penmar Ave
                    </SelectItem>
                    <SelectItem value="624 Hilgard Ave">
                      624 Hilgard Ave
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {error && <p className="text-sm text-red-500">{error}</p>}
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Sending..." : "Sign Up with Email"}
              </Button>
            </CardFooter>
          </form>
        )}
      </Card>
    </div>
  );
}
