import { eduData } from "../../data/eduData";
import { EduCard } from "./eduCard";

export function Education() {
    return (
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
            <p>
            </p>
            <div className="lg:flex gap-5">
                {
                    eduData.map((education, idx) =>
                        <EduCard key={education.name + idx} image={education.image} name={education.name} description={education.description} duration={education.duration}></EduCard>
                    )
                }
            </div>
        </div>
    );
}