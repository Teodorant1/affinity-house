import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { MapPin } from "lucide-react";

export function LocationSelectionCard() {
  const [location, setLocation] = useState("");

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          Location Selection
        </CardTitle>
        <MapPin className="h-4 w-4 text-blue-500" />
      </CardHeader>
      <CardContent>
        <Select value={location} onValueChange={setLocation}>
          <SelectTrigger className="mb-2 w-full">
            <SelectValue placeholder="Select a location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="penmar">2478 Penmar Avenue</SelectItem>
            <SelectItem value="hilgard">624 Hilgard Avenue</SelectItem>
          </SelectContent>
        </Select>
        <Button className="w-full" disabled={!location}>
          Confirm Location
        </Button>
      </CardContent>
    </Card>
  );
}
