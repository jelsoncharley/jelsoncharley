import { expData } from "../../data/expData";
import { ExpCard } from "./expCard";

export function Experience() {
    return (
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
            <p>
            </p>
            <div className="lg:flex gap-5">
                {
                    expData.map((exp, idx) =>
                        <ExpCard
                            key={exp.name + idx}
                            image={exp.image}
                            name={exp.name}
                            position={exp.position}
                            duration={exp.duration}
                            time={exp.time}></ExpCard>
                    )
                }
            </div>
        </div>
    )
}