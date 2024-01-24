'use client';
import { WaterWaveText, WaviyText } from "../ui/animated-text/animated-text";
import styles from '@/app/ui/dashboard.module.css';
import { PulsingButton } from "../ui/button/pulsing-button";
import Link from "next/link";

export const StartGame = () => {
    return (
        <div className={`flex flex-col h-screen w-screen justify-center items-center p-40 ${styles[`page-background`]}`}>
            <div className="flex h-40">
                <div><WaterWaveText text="Нечестная" /></div>
            </div>
            <div className="flex h-40">
                <div><WaterWaveText text="Игра" /></div>
            </div>
            <div className="flex h-60 flex-col">
                <div> <WaviyText text="Женя" /></div>
                <div><WaviyText text="10 лет" /></div>
            </div>
            
            <Link href="/unfair-game/play" onClick={() => localStorage.removeItem(`categories_state`)}>
                <PulsingButton>Start</PulsingButton>
            </Link>
        </div>
    );
}