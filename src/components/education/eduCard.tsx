type EducationProps = {
    image: string,
    name: string,
    description: string,
    duration: {
        from: string
        to: string
    }
}

export function EduCard({ image, name, description, duration }: EducationProps) {
    return (
        <>
            <div className="w-full max-w-xs overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-950/5">
                {/* <img className="m-1.5 h-max w-[calc(100%-12px)]" src={image} alt="image" /> */}
                <div className="h-80 content-center">
                    <img className="m-1.5 h-max w-[calc(100%-12px)]" src={'/jelsoncharley' + image} alt="image" />
                </div>
                <div className="h-max w-full rounded px-3 py-2 text-slate-600">
                    <h6 className="font-sans text-base font-bold text-current antialiased md:text-lg lg:text-xl">
                        {name}
                    </h6>
                    <p className="my-1 font-sans text-base antialiased">
                        {description}<br></br>
                        {duration.from} - {duration.to}
                    </p>

                    {/* <span className='bg-emerald-50 text-emerald-600 text-xs font-medium mr-2 px-1.5 py-1 rounded-full'>Pass Class</span> */}
                </div>
            </div>
            <br></br>
        </>
    )
}