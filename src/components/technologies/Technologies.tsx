import { use } from "react";
import type { Itechnology } from "../../types";

interface TechnologyProps {
    technologyPromise: Promise<Itechnology[]>
}
const Technologies = ({technologyPromise}: TechnologyProps) => {
    const technologies = use(technologyPromise);
    console.log(technologies);
    return <div>
        {
            
        }
        </div>;
};
export default Technologies;