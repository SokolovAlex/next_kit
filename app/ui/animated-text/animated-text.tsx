import { clsx } from 'clsx'
import styles from './animated-text.module.css'
import { kablammo, rubikMarkerHatch } from '../fonts'

type WaterWaveTextProps = {
    text: string
}

export const WaterWaveText = ({ text }: WaterWaveTextProps) => (
    <div className={clsx(styles[`water-wave`], kablammo.className)}>
        <h3>{text}</h3>
        <h3>{text}</h3>
    </div>
)

type WaviyProps = {
    text: string
}

export const WaviyText = ({ text }: WaviyProps) => (
    <div className={clsx(styles[`waviy`], rubikMarkerHatch.className)}>
        {text.split(``).map((sign) => (
             <span className={sign === " " ? `w-4` : ``} key={sign}>{sign}</span>
        ))}
    </div>
)