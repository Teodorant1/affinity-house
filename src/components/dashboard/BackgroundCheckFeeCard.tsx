import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { CreditCard } from "lucide-react";

export function BackgroundCheckFeeCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          Background Check Fee
        </CardTitle>
        <CreditCard className="h-4 w-4 text-blue-500" />
      </CardHeader>
      <CardContent>
        <div className="mb-2 text-2xl font-bold">$35</div>
        <Button className="w-full">Pay Now</Button>
      </CardContent>
    </Card>
  );
}
