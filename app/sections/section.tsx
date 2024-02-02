'use client';

import { LevelContext } from "./levelContext";

type sectionProps = {
    children: string | JSX.Element | JSX.Element[],
    level: number
}

export default function Section({ children, level }: sectionProps) {
    return (
        <section className="section">
        <LevelContext.Provider value={level}>
        {children}
        </LevelContext.Provider>
        </section>
    );
}
  