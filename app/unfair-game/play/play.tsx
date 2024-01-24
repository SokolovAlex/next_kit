'use client';
import clsx from "clsx";
import { AcademicCapIcon } from '@heroicons/react/24/outline';
import { categories, Question, Category } from "./questions";
import { QuestionCard } from "@/app/ui/question-card/question-card";
import { rubikMarkerHatch, shantellSans } from "@/app/ui/fonts";
import { useState } from "react";

const getDefaultCategories = () => {
    const storaged = localStorage.getItem(`categories_state`)
    return storaged? JSON.parse(storaged) : categories
}

export const Play = () => {
    const [categoriesState, updateCategories] = useState<Category[]>(getDefaultCategories())
    const [_, rerender] = useState(0)

    const onCardActive = (question: Question) => {
        question.active = true;
        rerender(x => x + 1)
    }

    const onCloseCard = (question: Question) => {
        question.active = false;
        question.opened = true;
        rerender(x => x + 1)
        localStorage.setItem(`categories_state`, JSON.stringify(categoriesState))
    }

    return (
        <div className={clsx(`h-full w-full flex justify-stretch`)}>
        <div className="flex flex-col flex-1">
            <div className="h-24 border-b-4 flex justify-center items-center border-r"><AcademicCapIcon className="w-10 h-10"/></div>
            <div className={clsx(rubikMarkerHatch.className, `flex-1 text-4xl flex justify-center items-center`)}>100</div>
            <div className={clsx(rubikMarkerHatch.className, `flex-1 text-4xl flex justify-center items-center`)}>200</div>
            <div className={clsx(rubikMarkerHatch.className, `flex-1 text-4xl flex justify-center items-center`)}>300</div>
            <div className={clsx(rubikMarkerHatch.className, `flex-1 text-4xl flex justify-center items-center`)}>400</div>
            <div className={clsx(rubikMarkerHatch.className, `flex-1 text-4xl flex justify-center items-center`)}>500</div>
        </div>
        {categoriesState.map((cat, i) => (
            <div key={i} className="flex flex-col flex-1">
                <div className={clsx(
                    shantellSans.className,
                    i !== categoriesState.length - 1 && `border-r`,
                    `h-24 p-2 text-center border-b-4 text-2xl flex justify-center items-center`
                )}>{cat.name}</div>
                {cat.questions.map((question, i) => (
                    <div key={i} className="flex-1 m-2 relative">
                        <QuestionCard
                            text={question.text}
                            opened={question.opened}
                            active={question.active}
                            icon={question.icon}
                            onActive={() => onCardActive(question)}
                            onClose={() => onCloseCard(question)}
                        />
                    </div>
                ))}
            </div>
        ))}
    </div>
    );
  }