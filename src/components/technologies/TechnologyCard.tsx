import type { Itechnology } from "../../types";
import { CiStar } from "react-icons/ci";

interface TechnologyCardProps {
    technology: Itechnology
}

const TechnologyCard = ({ technology }: TechnologyCardProps) => {
    return (
        <div className="card w-96 bg-base-100 shadow-sm rounded-xl p-2">
            <div className="card-body">
                <div className="flex justify-between">
                    <img src={technology.icon} alt="" className="h-10 w-10 object-contain" />
                    <span className="badge badge-xs badge-info text-right">Popular</span>
                </div>
                <div className="text-left">
                    <h2 className="text-3xl font-bold">{technology.name}</h2>
                </div>
                <div>
                    <p className="text-xs text-[#64748bFF] max-w-xs">A declarative, component-based JavaScript library for building modern user interfaces.</p>
                </div>
                <div className="flex items-center gap-2 mt-3">
                    <button className="btn btn-soft text-gray-600 border border-gray-100 bg-gray-100 ">
                        {technology.difficulty}
                    </button>
                    <button>
                        {technology.category}
                    </button>
                    <span className="flex items-center gap-1 text-xl text-amber-600"> <CiStar /> {technology.rating}</span>
                </div>
                <div className="mt-6">
                    <button className="btn btn-active btn-block bg-black text-white px-4 py-4 rounded-xl">Add to Stack</button>
                </div>
            </div>
        </div>
    );
};

export default TechnologyCard;
