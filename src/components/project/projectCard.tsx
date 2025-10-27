type ProjectProps = {
    name: string,
    description: string,
    techStack: string[]
}
export function ProjectCard({ name, description, techStack }: ProjectProps) {
    return <>
        <div className="group relative mb-8 md:mb-auto">
            <div className="group-hover:bg-amber-950 rotate-y-0 group-hover:opacity-0 group-hover:rotate-y-180 duration-500 ease-linear opacity-100 
        w-full max-w-xs overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-950/5">
                <div className="h-80 w-full rounded px-3 py-2 text-slate-600">
                    <div className="h-[6vh]">
                        <h6 className="font-sans text-base font-bold text-current antialiased md:text-lg lg:text-xl">
                            {name}
                        </h6>
                    </div>
                    <p className="my-1 font-sans text-base antialiased">
                        {description}<br></br>
                    </p>
                </div>
            </div>
            <div className=" absolute top-0 left-0 rotate-y-180 group-hover:opacity-100 group-hover:rotate-y-0 duration-500 ease-linear opacity-0
        w-full max-w-xs overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-950/5">
                <div className="h-80 w-full rounded px-3 py-2 text-slate-600 place-content-center">
                    <p className="my-1 font-sans text-base antialiased">
                        {techStack.map((tech, idx) =>
                            <div key={tech + idx}>{tech}</div>
                        )}
                    </p>
                </div>
            </div>
        </div>
    </>
}