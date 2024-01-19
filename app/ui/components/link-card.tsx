import clsx from "clsx"
import Link from "next/link"
import styles from '@/app/ui/components/link-card.module.css';
import { ArrowRightIcon } from "@heroicons/react/24/outline"

type LinkCardProps = {
    title: string
    description: string
    href: string
    className?:  string
}

export const LinkCard = ({ className, href, title, description }: LinkCardProps) =>(
    <Link 
        href={href}
        className={clsx(
            styles[`link-card`],
            `block rounded-lg w-80 py-4 px-8  transition-colors border border-transparent hover:border hover:border-gray-300 hover:bg-spindle-100`,
            className
        )}>
        <div className="text-2xl font-bold flex gap-2">
            {title}
            <ArrowRightIcon className={clsx(`w-5 md:w-6`, styles[`arrow-icon`])} />
        </div>
        <div className="font-medium">{description}</div>
    </Link>
)

console.log(styles)
