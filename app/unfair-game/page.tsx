import { Metadata } from "next";
import { StartGame } from "./start";

export const metadata: Metadata = {
  title: 'Jenya 10 years old. Unfair game!',
};

export default function Page() {
    return (
      <StartGame />
    );
  }