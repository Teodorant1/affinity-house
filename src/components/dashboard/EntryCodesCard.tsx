import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Key } from "lucide-react";

export function EntryCodesCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Entry Codes</CardTitle>
        <Key className="h-4 w-4 text-yellow-500" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">Pending</div>
        <p className="text-xs text-gray-500">
          Entry codes will be provided after initial payment.
        </p>
      </CardContent>
    </Card>
  );
}
