'use client';
import clsx from "clsx";
import { ChartBarSquareIcon, FireIcon, RocketLaunchIcon, TrophyIcon, HeartIcon} from '@heroicons/react/24/outline';
import './question-card.css'
import { useState } from "react";
import { shantellSans } from "../fonts";
import { AcademicCapIcon } from "@heroicons/react/24/solid";

type QuestionCardProps = {
    text: string;
    opened?: boolean;
    active?: boolean;
    icon?: string,
    onActive: () => void
    onClose: () => void
}

export const QuestionCard = ({ text, active, opened, icon, onActive, onClose }: QuestionCardProps) => {
  const [animationProgress, setProgress] = useState(false)
  
  const onClick = () => {
      if (opened) {
        return
      }
      if (active) {
        setProgress(false)
        setTimeout(onClose, 500)
        return;
      }
      setProgress(true)
      onActive()
    }

    return (
      <div className={clsx(`card`,
        opened && `opened`,
        active && `active`,
        animationProgress && `active-in`,
        `flex justify-center items-center border rounded-sm border-gray-200 shadow-md h-full`)}
        onClick={onClick}
      >
        <div className="content">
            <div className={clsx(`front gradient-gray flex justify-center items-center`)}>
              <div className={clsx(active ? `opacity-100`: `opacity-0`, `hidden-text p-5 text-center flex flex-col items-center`)}>
                {getIcon(icon)}
                <span className={clsx(shantellSans.className)}>{text}</span>
                <div className={clsx(`w-3/5 h-px mt-4 bg-amber-800`)} />
              </div>
            </div>
            <div className={clsx(`back flex justify-center items-center gradient-green`)}>
                <TrophyIcon className="h-10 w-10" />
            </div>
        </div>
    </div>
    );
}

const iconMap = new Map();
iconMap.set('RocketLaunchIcon', RocketLaunchIcon);
iconMap.set('ChartBarSquareIcon', ChartBarSquareIcon);
iconMap.set('FireIcon', FireIcon); 
iconMap.set('HeartIcon', HeartIcon); 

const getIcon = (name?: string) => {
    if (!name) {
      return <AcademicCapIcon className="w-10 h-10 mb-4"/>
    }
    const Icon = iconMap.get(name);

    return Icon ? <Icon className="w-10 h-10 mb-4" /> : <AcademicCapIcon className="w-10 h-10 mb-4"/>
}