import { ReactNode } from "react"
import clsx from "clsx"
import Link from 'next/link';

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
            className={clsx(className, active && `text-steel-500 underline`,
                `flex gap-3 px-6 pb-2 pt-2.5 font-medium text-lg duration-150 ease-in-out cursor-pointer transition-colors hover:underline hover:bg-neutral-100 hover:text-primary-600 active:text-primary-700`)}>
            {children}
        </Link>
    )
}



