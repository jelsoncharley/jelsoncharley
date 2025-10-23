export function Header() {
    return (
        <>
            <div className="row-start-3 flex gap-[24px] items-center justify-around p-10">
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="/"
                >
                    About me
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="/education"
                    rel="noopener noreferrer"
                >

                    Education
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="/experience"
                    rel="noopener noreferrer"
                >

                    Experience
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="/achievements"
                    rel="noopener noreferrer"
                >

                    Achievements
                </a>
            </div>
        </>
    )
}