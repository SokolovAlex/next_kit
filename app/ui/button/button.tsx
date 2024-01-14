import { ReactNode } from "react"
import clsx from "clsx"

const variants = {
    primary: 'bg-blue-600 hover:bg-blue-500 text-white focus-visible:outline-blue-500 active:bg-blue-600',
    danger: 'bg-red-500 hover:bg-red-400 text-white',
    success: 'bg-green-500 hover:bg-green-400 text-white',
}

type ButtonProps = {
    children: ReactNode
    variant?:  keyof typeof variants
    className?:  string
}

export const Button = ({ variant = `primary`, className, children }: ButtonProps) => {
    return (
      <button className={clsx(
        `flex h-10 items-center rounded-lg px-4 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 aria-disabled:cursor-not-allowed aria-disabled:opacity-50`,
        variants[variant],
        className
      )}>
        {children}
      </button>
    )
}
