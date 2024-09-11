import { StatusCard } from './StatusCard'

export function CreditCheckCard() {
  return (
    <StatusCard item={{ name: "Credit Check", status: "pending", required: true }}>
      <p className="text-sm text-gray-500 mb-2">
        Please make a payment to start your credit check
      </p>
    </StatusCard>
  )
}
