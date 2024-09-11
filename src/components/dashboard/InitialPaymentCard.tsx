import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { DollarSign } from "lucide-react";

export function InitialPaymentCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Initial Payment</CardTitle>
        <DollarSign className="h-4 w-4 text-green-500" />
      </CardHeader>
      <CardContent>
        <div className="mb-2 text-2xl font-bold">$1,595</div>
        <Button className="w-full">Pay Now</Button>
      </CardContent>
    </Card>
  );
}
