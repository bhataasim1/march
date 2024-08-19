import * as React from "react"

import Container from "@/src/components/atoms/Container"
import InboxSection from "@/src/components/InboxSection"
import Inbox from "@/src/lib/icons/Inbox"
import Plus from "@/src/lib/icons/Plus"

const InboxPage: React.FC = () => {
  return (
    <section className="h-full overflow-y-auto rounded-xl border border-white/10 bg-white/10 px-6 pt-16 shadow-lg backdrop-blur-lg">
      <Container>
        <div className="mb-2 flex items-center gap-x-4 text-3xl font-semibold text-black">
          <Inbox size={36} />
          <span>Inbox</span>
        </div>
        <button className="my-6 flex items-center gap-x-2 text-sm text-gray-color hover:text-black">
          <Plus size={16} />
          <span>Click to add an item</span>
        </button>
        <InboxSection />
      </Container>
    </section>
  )
}

export default InboxPage
