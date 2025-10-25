import { skillsAll } from "../../data/skillData";
// import { skills} from "../../data/skillData";
import { Skills } from "./skills";

export function Intro() {
    return <>
        <div className="w-4xl justify-self-center font-mono mb-10 mt-10">
            <div className="font-bold text-3xl mb-10">Jelson Chacko</div>
            <div>Strategic, motivated, individual with experience developing web-based applications and data management systems,
                predominantly in the software development industry. Experienced in all stages of SDLC on both the development and testing side.
                A dynamic team player who collaborates with others to deliver results within tight timeframes. Dedicated to continuous learning and growth that ensures relevance and competencies in a dynamic industry.
            </div>
        </div>
        {/* <div className="flex w-6xl justify-self-center mb-10">
            <div className="row-auto gap-5">Containers: </div>
            <div className="grid grid-cols-11 gap-5">
                {
                    skills.containers.map((skill) => <Skills skill={skill} />)
                }
            </div>
        </div>
        <div className="flex w-6xl justify-self-center mb-10">
            <div className="grid grid-cols-1 gap-5">Containers: </div>
            <div className="grid grid-cols-11 gap-5">
                {
                    skills.containers.map((skill) => <Skills skill={skill} />)
                }
            </div>
        </div>
        <div className="flex w-6xl justify-self-center mb-10">
            <div className="row-auto  gap-5">test: </div>
            <div className="grid grid-cols-11 gap-5">
                {
                    skills.cicds.map((skill) => <Skills skill={skill} />)
                }
            </div>
        </div>
        <div className="flex w-6xl justify-self-center mb-10">
            <div className="grid grid-cols-1 gap-5">test: </div>
            <div className="grid grid-cols-11 gap-5">
                {
                    skills.dbs.map((skill) => <Skills skill={skill} />)
                }
            </div>
        </div>
        <div className="flex w-6xl justify-self-center mb-10">
            <div className="row-auto  gap-5">Domains: </div>
            <div className="grid grid-cols-11 gap-5">
                {
                    skills.domains.map((skill) => <Skills skill={skill} />)
                }
            </div>
        </div>
        <div className="flex w-6xl justify-self-center mb-10">
            <div className="grid grid-cols-1 gap-5">test: </div>
            <div className="grid grid-cols-11 gap-5">
                {
                    skillsAll.map((skill) => <Skills skill={skill} />)
                }
            </div>
        </div> */}
        <div className="flex w-1xl justify-self-center">

            <div className="grid grid-cols-6 gap-5">
                {
                    skillsAll.map((skill) => <Skills skill={skill} />)
                }
            </div>
        </div>
        <div className="w-4xl justify-self-center font-mono font-bold text-2xl mb-10 mt-10">
            <div>
                Just Enjoys Learning Sciences Of Novelty
            </div>
        </div>
    </>
}