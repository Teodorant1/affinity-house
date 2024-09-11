"use client";

import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { User, MapPin, Pencil } from "lucide-react";
import {
  StatusCard,
  TourCard,
  BackgroundCheckFeeCard,
  BackgroundCheckCard,
  CreditCheckCard,
  MoveInDateCard,
  BeddingRequestCard,
  InitialPaymentCard,
  EntryCodesCard,
} from "~/components/dashboard";

import { User as SupabaseUser } from "@supabase/supabase-js";

type User = SupabaseUser;

interface Profile {
  full_name: string | null;
  phone_number: string | null;
  location: string | null;
}

function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="mb-4 mt-8 text-2xl font-semibold text-gray-800">{title}</h2>
  );
}

function LocationSelector({
  initialLocation,
  onLocationChange,
}: {
  initialLocation: string;
  onLocationChange: (location: string) => void;
}) {
  const [location, setLocation] = useState(initialLocation);
  const supabase = createClientComponentClient();

  const handleLocationChange = async (newLocation: string) => {
    setLocation(newLocation);
    onLocationChange(newLocation);
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) {
      const { error } = await supabase
        .from("profiles")
        .update({ location: newLocation })
        .eq("id", user.id);
      if (error) console.error("Error updating location:", error);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="ml-2">
          <MapPin className="mr-2 h-4 w-4" />
          {location || "Select a location"}
          <Pencil className="ml-2 h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <Select value={location} onValueChange={handleLocationChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2478 Penmar Ave">2478 Penmar Ave</SelectItem>
            <SelectItem value="624 Hilgard Ave">624 Hilgard Ave</SelectItem>
          </SelectContent>
        </Select>
      </PopoverContent>
    </Popover>
  );
}

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    // const checkUser = async () => {
    //   const {
    //     data: { user },
    //   } = await supabase.auth.getUser();
    //   if (user) {
    //     setUser(user as User);
    //     const { data: profileData, error } = await supabase
    //       .from("profiles")
    //       .select("full_name, phone_number, location")
    //       .eq("id", user.id)
    //       .single();
    //     if (profileData && !error) {
    //       setProfile(profileData);
    //     }
    //   } else {
    //     router.push("/login");
    //   }
    //   setLoading(false);
    // };
    // checkUser();
  }, [supabase, router]);

  const handleLocationChange = (newLocation: string) => {
    setProfile((prev) => (prev ? { ...prev, location: newLocation } : null));
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8">
          <div className="mb-4 flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">
              Hi, {profile?.full_name?.split(" ")[0] ?? user.email ?? "User"} 👋
            </h1>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="text-sm">
                {profile?.full_name ?? "Future Member"}
              </Badge>
              <User className="h-8 w-8 text-gray-400" />
              <Button onClick={handleSignOut}>Sign Out</Button>
            </div>
          </div>
          <div className="flex items-center">
            <p className="text-gray-600">Here&apos;s your setup progress for</p>
            <LocationSelector
              initialLocation={profile?.location ?? ""}
              onLocationChange={handleLocationChange}
            />
          </div>
        </header>

        <SectionTitle title="Pre-Approval" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <TourCard />
          <BackgroundCheckFeeCard />
          <BackgroundCheckCard />
          <CreditCheckCard />
        </div>

        <SectionTitle title="Getting You Setup" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <MoveInDateCard />
          <StatusCard
            item={{
              name: "Contract Status",
              status: "success",
              required: true,
            }}
          >
            <p className="text-sm text-gray-500">
              Your contract has been signed and processed.
            </p>
          </StatusCard>
          <BeddingRequestCard />
          <InitialPaymentCard />
          <EntryCodesCard />
          <StatusCard
            item={{
              name: "Room or Bed Assignment",
              status: "success",
              required: true,
            }}
          >
            <p className="text-sm text-gray-500">
              Your room has been assigned.
            </p>
          </StatusCard>
        </div>
      </div>
    </div>
  );
}
