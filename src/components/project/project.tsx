import { projectData } from "../../data/projectData";
import { ProjectCard } from "./projectCard";



export function Project() {
    return <>
        <div className="font-sans items-center justify-items-center sm:p-20 h-full">
            <div className="md:grid md:grid-cols-5 gap-5">
                {
                    projectData.map((project, idx) => <ProjectCard {...project} key={project.name + idx}></ProjectCard>)
                }
            </div>
        </div>
    </>
}