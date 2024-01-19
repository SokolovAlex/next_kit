import { ReactNode } from "react"
import clsx from "clsx"
import Link from 'next/link';
import { lusitana } from "../fonts";

type LinkProps = {
    children: ReactNode
    className?:  string
    active?:  boolean
    href:  string
    onClick?:  () => void
}

export const NavLink = ({ className, href, children, active }: LinkProps) => {
    return (
        <Link
            href={href}
            className={clsx(className, active && `text-spindle-800 underline`,
                lusitana.className,
                `flex gap-3 px-6 py-2 my-2 align-baseline font-bold text-2xl duration-150 ease-in-out cursor-pointer transition-colors hover:underline hover:bg-neutral-100 hover:text-primary-600 active:text-primary-700`)}>
            {children}
        </Link>
    )
}



