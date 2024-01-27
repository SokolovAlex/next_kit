import { Metadata } from "next";
import { Play } from "./play";

export const metadata: Metadata = {
  title: 'Jenya 10 years old. Unfair game!',
};

export default function Page() {
    return (
      <div className="h-screen w-screen p-2 gradient-blue">
        <Play/>
      </div>
    );
  }