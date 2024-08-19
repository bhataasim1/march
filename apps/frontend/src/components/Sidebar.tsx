"use client"
import * as React from "react"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { useAuth } from "../contexts/AuthContext"
import Calender from "../lib/icons/Calender"
import PencilEditIcon from "../lib/icons/Edit"
import Gear from "../lib/icons/Gear"
import Help from "../lib/icons/Help"
import Inbox from "../lib/icons/Inbox"
import Meet from "../lib/icons/Meet"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { BACKEND_URL } from "../lib/constants/urls"
import { type User } from "../lib/@types/auth/user"
import AddNote from "../lib/icons/AddNote"

const navLinkClassName =
  "flex items-center gap-2 rounded-lg px-3 py-2.5 hover-bg text-sm text-gray-color hover:text-black cursor-pointer"

const pages = [{ title: "Business", slug: "business" }]

const Sidebar: React.FC = () => {
  const pathname = usePathname()
  const { session, logout } = useAuth()

  const { data, error, isFetched } = useQuery<User>({
    queryKey: ["user"],
    queryFn: async () => {
      try {
        const { data } = await axios.get(`${BACKEND_URL}/users/me`, {
          headers: {
            Authorization: `Bearer ${session}`,
          },
        })
        return data as User
      } catch (error) {
        return error
      }
    },
  })

  if (pathname.includes("auth")) {
    return null
  } else {
    return (
      <div className="flex max-w-16 flex-col items-center justify-center rounded-xl bg-white px-4 pt-12 shadow-lg shadow-black/40">
        <Link className={navLinkClassName} href={"/app/inbox/"}>
          <Inbox size={22} />
        </Link>
        <Link className={navLinkClassName} href={"/app/today/"}>
          <Calender size={22} />
        </Link>
        <div className="my-4 h-px w-full bg-gray-color" />
        <Link className={navLinkClassName} href={`/app/page/notes`}>
          <PencilEditIcon size={22} />
        </Link>
        <Link className={navLinkClassName} href={`/app/page/meeting`}>
          <Meet size={22} />
        </Link>
        {pages.map((page, index) => (
          <Link
            className={navLinkClassName}
            href={`/app/page/${page.slug}/`}
            key={index}
          >
            <PencilEditIcon size={22} />
          </Link>
        ))}
        <button className={navLinkClassName}>
          <AddNote size={22} />
        </button>
        <div className="mb-4 mt-auto flex flex-col items-center justify-center text-zinc-400">
          <button className="grid size-10 place-items-center">
            <Image
              src={data ? data.avatar : "/user.jpg"}
              alt="profile"
              width={26}
              height={26}
              className="rounded-full bg-gray-color"
            />
          </button>
          {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
          <button onClick={logout} className={navLinkClassName}>
            <Gear size={22} />
          </button>
          <Link className={navLinkClassName} href={"/app/profile/"}>
            <Help size={22} />
          </Link>
        </div>
      </div>
    )
  }
}

export default Sidebar
