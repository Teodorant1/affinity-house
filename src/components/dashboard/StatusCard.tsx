import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { CheckCircle2, Clock } from "lucide-react";

interface StatusCardProps {
  item: {
    name: string;
    status: "success" | "pending";
    required: boolean;
  };
  children: React.ReactNode;
}

export function StatusCard({ item, children }: StatusCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {item.name}
          {!item.required && (
            <span className="ml-2 text-xs text-gray-400">(optional)</span>
          )}
        </CardTitle>
        {item.status === "success" ? (
          <CheckCircle2 className="h-4 w-4 text-green-500" />
        ) : (
          <Clock className="h-4 w-4 text-yellow-500" />
        )}
      </CardHeader>
      <CardContent>
        <div className="mb-2 text-2xl font-bold">
          {item.status === "success" ? "Completed" : "Pending"}
        </div>
        {children}
      </CardContent>
    </Card>
  );
}
