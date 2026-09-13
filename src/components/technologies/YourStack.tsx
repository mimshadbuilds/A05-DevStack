import { FiX } from "react-icons/fi";
import type { Itechnology } from "../../types";

interface YourStackProps {
    selectedTechnologies: Itechnology[];
    removeBtn: (id: string) => void;
    removeAllBtn: () => void
}

const YourStack = ({ selectedTechnologies, removeBtn, removeAllBtn }: YourStackProps) => {
    return (
        <aside className="h-fit rounded-xl border border-base-200 bg-base-100 p-4 shadow-sm">
        {selectedTechnologies.length === 0 ? (
            <div className="mt-5 flex min-h-24 items-center justify-center rounded-lg border border-dashed border-slate-200 px-4 text-center">
            <p className="text-xs text-slate-400">Your stack is empty.</p>
            </div>
        ) : (
            <div className="mt-4 space-y-2">
            {selectedTechnologies.map((technology) => (
                <div
                key={technology.id}
                className="flex items-center gap-3 rounded-lg border border-slate-200 p-2"
                >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center">
                    <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-7 w-7 object-contain"
                    />
                </div>

                <div className="min-w-0 flex-1">
                    <h3 className="truncate text-xs font-bold text-slate-800">
                    {technology.name}
                    </h3>

                    <p className="text-[9px] text-slate-400">
                    {technology.category}
                    </p>
                </div>

                <button
                    onClick={() => removeBtn(technology.id)}
                    className="btn btn-ghost btn-xs text-slate-400 hover:text-red-500"
                    aria-label={`Remove ${technology.name}`}
                >
                    <FiX className="text-base" />
                </button>
                </div>
            ))}

            <button onClick={removeAllBtn}
                className="btn mt-3 h-8 min-h-8 w-full rounded-lg border border-red-200 bg-transparent text-xs text-red-500 hover:bg-red-50"> Remove All
            </button>
            </div>
        )}
        </aside>
    );
};
export default YourStack;
