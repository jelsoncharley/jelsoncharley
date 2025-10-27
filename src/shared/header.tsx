import Person4Icon from '@mui/icons-material/Person4';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
// import GradeIcon from '@mui/icons-material/Grade';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';

export function Header() {
    return (
        <>
            <div className="row-start-3 flex gap-6 items-center justify-around p-5">
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="#/"
                >
                    <Person4Icon />
                    <div className="hidden sm:block">About me</div>
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="#/education"
                    rel="noopener noreferrer"
                >
                    <SchoolIcon />
                    <div className="hidden sm:block">Education</div>
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="#/experience"
                    rel="noopener noreferrer"
                >
                    <WorkIcon />
                    <div className="hidden sm:block">Experience</div>
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="#/projects"
                    rel="noopener noreferrer"
                >
                    <AppShortcutIcon />
                    <div className="hidden sm:block">Projects</div>
                </a>
                {/* <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="/achievements"
                    rel="noopener noreferrer"
                >
                    <GradeIcon />
                    Achievements
                </a> */}
            </div>
        </>
    )
}