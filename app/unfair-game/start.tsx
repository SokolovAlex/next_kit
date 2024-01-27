'use client';
import { WaterWaveText, WaviyText } from "../ui/animated-text/animated-text";
import styles from '@/app/ui/dashboard.module.css';
import { HighButton } from "../ui/button/pulsing-button";
import Link from "next/link";

export const StartGame = () => (
    <div className={`flex flex-col h-screen w-screen justify-center items-center p-40 ${styles[`page-background`]}`}>
        <div className="flex h-40">
            <div><WaterWaveText text="Unfair" /></div>
        </div>
        <div className="flex h-40">
            <div><WaterWaveText text="Game" /></div>
        </div>
        <div className="flex h-60 flex-col">
            <div> <WaviyText text="Jenya" /></div>
            <div><WaviyText text="10 years" /></div>
        </div>
        
        <Link href="/unfair-game/play" onClick={() => localStorage.removeItem(`categories_state`)}>
            <HighButton>Start</HighButton>
        </Link>
    </div>
)