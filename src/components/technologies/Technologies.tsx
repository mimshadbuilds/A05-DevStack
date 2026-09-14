import { use, useState } from "react";
import type { Itechnology } from "../../types";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";
import { toast } from "react-toastify";

interface TechnologyProps {
    technologyPromise: Promise<Itechnology[]>
}

const Technologies = ({technologyPromise}: TechnologyProps) => {
    const technologies = use(technologyPromise);

    const [selectedTechnologies, setSelectedTechnologies] = useState<Itechnology[]>([]);

    const handleAddStack = (technology: Itechnology) => {
        const addedStacks = selectedTechnologies.find((item) => 
            item.id === technology.id
    );

    if(addedStacks) {
    toast.warning(`${technology.name} is already in your stack!`);
    return;
    }

    setSelectedTechnologies((selected) => [
    ...selected, technology,
    ]);

    toast.success(`${technology.name} added to your stack!`);
    };

    const handleRemove = (id: string) => {
        const technology = selectedTechnologies.find((tech) => tech.id === id);

        const updatedStack = selectedTechnologies.filter((technology) => technology.id !== id);
        setSelectedTechnologies(updatedStack);

        toast.error(`${technology?.name} has been removed.`);
    }
    


    const handleRemoveAll = () => {
        setSelectedTechnologies([]);
        toast.info("Your stack has been cleared.");
    };

    return (
        <section className="container mx-auto px-4 py-8">
            <div className="mb-8 p-2">
                <h2 className="text-4xl font-extrabold leading-relaxed">Explore the <span className="text-color">Technologies</span></h2>
                <p className="text-base leading-normal text-slate-600">Pick one technology per category to build your ideal stack.</p>
            </div>
            <div className="grid grid-cols-1 gap-5 xl:grid-cols-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:col-span-3 xl:grid-cols-3">
                    {technologies.map((technology) => {
                        const isAdded = selectedTechnologies.some((item) =>
                        item.id === technology.id);
                return (
                    <TechnologyCard key={technology.id} 
                    technology={technology}
                    isAdded={isAdded} 
                    handleAddStack={handleAddStack}  
                    />
                );
                })}
                </div>
                <YourStack selectedTechnologies={selectedTechnologies}
                    removeBtn={handleRemove}
                    removeAllBtn={handleRemoveAll}
                />
            </div>
        </section>
    );
};
export default Technologies;