import { StatusCard } from './StatusCard'

export function BackgroundCheckCard() {
  return (
    <StatusCard item={{ name: "Background Check", status: "pending", required: true }}>
      <p className="text-sm text-gray-500 mb-2">
        Your background check is in progress.
      </p>
    </StatusCard>
  )
}
