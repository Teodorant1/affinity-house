import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Calendar } from "lucide-react";

export function MoveInDateCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Move In Date Set</CardTitle>
        <Calendar className="h-4 w-4 text-blue-500" />
      </CardHeader>
      <CardContent>
        <div className="mb-2 text-2xl font-bold">Sept 17</div>
        <Button variant="outline" size="sm">
          Reschedule
        </Button>
      </CardContent>
    </Card>
  );
}
