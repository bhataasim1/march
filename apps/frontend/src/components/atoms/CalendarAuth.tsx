import { GoogleColored } from "@/src/lib/icons/GoogleColored"

const CalendarAuth = (): JSX.Element => {
  return (
    <button className="flex w-96 items-center justify-center gap-x-6 rounded-2xl border border-button-stroke bg-transparent p-3.5 text-black font-semibold">
      <GoogleColored />
      Authorize with Google
    </button>
  )
}

export default CalendarAuth
