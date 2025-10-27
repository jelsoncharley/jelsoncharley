import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export function Footer() {
    return (
        <>
            <footer className="text-center fixed inset-x-0 bottom-0 p-4 flex justify-around justify-self-center">
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://www.linkedin.com/in/jelsoncharley/"
                    rel="noopener noreferrer"
                    target='_blank'
                >
                    <LinkedInIcon />
                </a>
                <a
                    className="flex items-center px-24 hover:underline hover:underline-offset-4 md:px-80"
                    href="https://github.com/jelsoncharley"
                    rel="noopener noreferrer"
                    target='_blank'
                >
                    <GitHubIcon />
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="mailto://jelsoncharley@gmail.com"
                    rel="noopener noreferrer"
                >
                    <EmailIcon />
                </a>
            </footer>
        </>
    )
}