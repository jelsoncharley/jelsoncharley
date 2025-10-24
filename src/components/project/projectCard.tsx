type ProjectProps = {
    name: string,
    description: string
}
export function ProjectCard({ name, description }: ProjectProps) {
    return <>
        <div className="w-full max-w-xs overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-950/5">
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
    </>
}