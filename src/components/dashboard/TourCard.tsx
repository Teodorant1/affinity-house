import { Button } from "~/components/ui/button";
import { StatusCard } from "./StatusCard";

export function TourCard() {
  return (
    <StatusCard item={{ name: "Tour", status: "pending", required: false }}>
      <Button className="w-full">Schedule Now</Button>
    </StatusCard>
  );
}
