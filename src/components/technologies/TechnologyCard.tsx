import type { Itechnology } from "../../types";
import { CiStar } from "react-icons/ci";

interface TechnologyCardProps {
    technology: Itechnology;
    isAdded: boolean;
    handleAddStack: (technology: Itechnology) => void
}

const TechnologyCard = ({ technology, isAdded, handleAddStack }: TechnologyCardProps) => {
    return (
        <div className="card h-full w-full rounded-xl border border-base-200 bg-base-100 shadow-sm">
            <div className="card-body gap-0 p-5">
                <div className="flex items-start justify-between">
                <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-9 w-9 object-contain" />

                <span className={`badge badge-xs ${
                    technology.badge === "Popular"
                    ? "badge-info"
                    : technology.badge === "Essential"
                        ? "badge-warning"
                        : technology.badge === "Fast"
                        ? "badge-success"
                        :technology.badge === "Top SQL"
                        ? "badge-neutral"
                        : "badge-accent"
                }`}>
                    {technology.badge}
                </span>
                </div>
                <h2 className="mt-4 text-base font-bold text-slate-900">
                {technology.name}
                </h2>
                <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-slate-500">
                {technology.description}
                </p>

                <div className="mt-4 flex items-center justify-between gap-2 text-[10px]">
                <div className="flex items-center gap-1">
                    <span className="rounded bg-slate-100 px-2 py-1 text-slate-600">
                    {technology.category}
                    </span>
                    <span className="rounded bg-slate-100 px-2 py-1 text-slate-600">
                    {technology.difficulty}
                    </span>
                </div>
                <span className="flex shrink-0 items-center gap-0.5 text-slate-700">
                    <CiStar className="text-sm text-amber-500" />
                    {technology.rating}
                </span>
                </div>

                <div className="mt-6">
                    <button onClick={() => handleAddStack(technology)} 
                    disabled={isAdded}
                    className={`btn mt-4 min-h-8 h-8 w-full rounded-lg border-0 text-xs 
                    ${isAdded
                    ? "bg-pink-100-100 text-pink-700"
                    : "bg-slate-950 text-white hover:bg-slate-800"
                        }`}>
                        {isAdded ? "Added to Stack" : "Add to Stack"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TechnologyCard;
