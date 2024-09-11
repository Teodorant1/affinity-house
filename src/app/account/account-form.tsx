"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Alert, AlertDescription } from "~/components/ui/alert";

interface User {
  id: string;
  email?: string;
  // Add any other properties that your user object might have
}

export default function AccountPage({ user }: { user: User }) {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [website, setWebsite] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [updateSuccess, setUpdateSuccess] = useState(false);

  useEffect(() => {
    // async function getProfile() {
    //   try {
    //     setLoading(true);
    //     const { data, error } = await supabase
    //       .from("profiles")
    //       .select("full_name, username, website")
    //       .eq("id", user.id)
    //       .single();
    //     if (error) throw error;
    //     setFullName(data.full_name || "");
    //     setUsername(data.username || "");
    //     setWebsite(data.website || "");
    //   } catch (error) {
    //     setError("Error loading user data!");
    //   } finally {
    //     setLoading(false);
    //   }
    // }
    // getProfile();
  }, [user, supabase]);

  async function updateProfile() {
    // try {
    //   setLoading(true);
    //   setError(null);
    //   setUpdateSuccess(false);
    //   const { error } = await supabase.from("profiles").upsert({
    //     id: user.id,
    //     full_name: fullName,
    //     username,
    //     website,
    //     updated_at: new Date().toISOString(),
    //   });
    //   if (error) throw error;
    //   setUpdateSuccess(true);
    // } catch (error) {
    //   setError("Error updating the profile!");
    // } finally {
    //   setLoading(false);
    // }
  }

  async function signOut() {
    await supabase.auth.signOut();
    router.push("/");
  }

  return (
    <Card className="mx-auto mt-8 w-full max-w-md">
      <CardHeader>
        <CardTitle>Account Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            await updateProfile();
          }}
          className="space-y-4"
        >
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="text" value={user?.email} disabled />
          </div>
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="website">Website</Label>
            <Input
              id="website"
              type="url"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {updateSuccess && (
            <Alert>
              <AlertDescription>Profile updated successfully!</AlertDescription>
            </Alert>
          )}
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button type="submit" onClick={updateProfile} disabled={loading}>
          {loading ? "Loading..." : "Update"}
        </Button>
        <Button variant="outline" onClick={signOut}>
          Sign Out
        </Button>
      </CardFooter>
    </Card>
  );
}
