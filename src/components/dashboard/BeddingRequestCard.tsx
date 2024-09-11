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
import { Bed } from "lucide-react";

export function BeddingRequestCard() {
  const [bedding, setBedding] = useState("");

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Bedding Request</CardTitle>
        <Bed className="h-4 w-4 text-purple-500" />
      </CardHeader>
      <CardContent>
        <Select value={bedding} onValueChange={setBedding}>
          <SelectTrigger className="mb-2 w-full">
            <SelectValue placeholder="Select bedding size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="twin">Twin ($60)</SelectItem>
            <SelectItem value="full">Full ($75)</SelectItem>
          </SelectContent>
        </Select>
        <Button className="w-full" disabled={!bedding}>
          Submit
        </Button>
      </CardContent>
    </Card>
  );
}
