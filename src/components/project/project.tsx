import { projectData } from "../../data/projectData";
import { ProjectCard } from "./projectCard";



export function Project() {
    return <>
        <div className="font-sans items-center justify-items-center sm:p-20 h-full">
            <div className="grid grid-cols-5 gap-5 overflow-y-scroll max-h-[72vh] no-scrollbar">
                {
                    projectData.map((project, idx) => <ProjectCard name={project.name} description={project.description} key={project.name + idx}></ProjectCard>)
                }
            </div>
        </div>
    </>
}