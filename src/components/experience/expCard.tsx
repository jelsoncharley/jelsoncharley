type ExperienceProps = {
    image: string,
    name: string,
    position: string,
    duration: Duration,
    time: string
}

type Duration = {
    from: string,
    to: string
}

export function ExpCard({ image, name, position, duration, time }: ExperienceProps) {
    return (
        <>
            <div className="w-full max-w-xs overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-950/5">
                {/* <img className="m-1.5 h-max w-[calc(100%-12px)]" src={image} alt="image" /> */}
                <div className="h-80 content-center">
                    <img className="m-1.5 h-max w-[calc(100%-12px)]" src={image} alt="image" />
                </div>
                <div className="h-max w-full rounded px-3 py-2 text-slate-600">
                    <h6 className="font-sans text-base font-bold text-current antialiased md:text-lg lg:text-xl">
                        {name}
                    </h6>
                    <p className="my-1 font-sans text-base antialiased">
                        {position}<br></br>
                        {time}
                        {/* {duration.from} - {duration.to} */}
                    </p>
                </div>
            </div>
        </>
    )

}