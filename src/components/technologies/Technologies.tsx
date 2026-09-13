import { use, useState } from "react";
import type { Itechnology } from "../../types";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

interface TechnologyProps {
    technologyPromise: Promise<Itechnology[]>
}

const Technologies = ({technologyPromise}: TechnologyProps) => {
    const technologies = use(technologyPromise);

    const [selectedTechnologies, setSelectedTechnologies] = useState<Itechnology[]>([]);

    return (
        <section className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 gap-5 xl:grid-cols-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:col-span-3 xl:grid-cols-3">
                    {technologies.map((technology) => (
                        <TechnologyCard key={technology.id} technology={technology}  />
                    ))}
                </div>
                <YourStack selectedTechnologies={selectedTechnologies} />
            </div>
        </section>
    );
};
export default Technologies;