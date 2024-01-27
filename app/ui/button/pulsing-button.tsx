import { ReactNode } from "react"
import styles from './pulsing-button.module.css'
import clsx from "clsx"
import { Oleo, rubikMarkerHatch } from "../fonts"

type PulsingButtonProps = {
    children: ReactNode
    className?:  string
}

export const PulsingButton = ({ className, children }: PulsingButtonProps) => {
    return (
    <div className={clsx(styles[`pulse-button-wrapper`], rubikMarkerHatch.className, className)}>
        <div className={clsx(styles[`pulse-button`], `flex justify-center items-center text-4xl text-white`)}>{children}</div>
      </div>
    )
}

export const HighButton = ({ className, children }: PulsingButtonProps) => {
    return (
    <div className={clsx(styles[`d-button-wrapper`], Oleo.className, className)}>
        <div className={clsx(styles[`d-button`], `flex justify-center items-center text-4xl text-white`)}>{children}</div>
      </div>
    )
}
