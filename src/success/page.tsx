import { Button } from "~/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function Component() {
  return (
    <div className="bg-background flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8 text-center">
        <CheckCircle
          className="mx-auto h-16 w-16 text-green-500"
          aria-hidden="true"
        />
        <h1 className="text-3xl font-bold tracking-tight">
          Sign Up Successful!
        </h1>
        <p className="text-muted-foreground">
          Thank you for creating an account. You can now log in to access your
          new account.
        </p>
        <div className="pt-4">
          <Button asChild className="w-full sm:w-auto">
            <Link href="/login" aria-label="Go to login page">
              Go to Login Page
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
