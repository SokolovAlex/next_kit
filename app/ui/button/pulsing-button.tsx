import { ReactNode } from "react"
import styles from './pulsing-button.module.css'
import clsx from "clsx"
import { rubikMarkerHatch } from "../fonts"

type PulsingButtonProps = {
    children: ReactNode
    className?:  string
}

export const PulsingButton = ({ className, children }: PulsingButtonProps) => {
    return (
    <div className={clsx(styles[`pulse-button-wrapper`], rubikMarkerHatch.className, className)}>
        <div className={clsx(styles[`pulse-button`], `flex justify-center items-center text-2xl text-white`)}>{children}</div>
      </div>
    )
}
