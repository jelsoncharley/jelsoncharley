import { EduCard } from "./eduCard";

export function Education() {
    return (
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
            <p>
                Education
            </p>
            <div className="lg:flex gap-5">
                <EduCard image="/loyolaloogo.png" name="Loyola" description="Primary and Secondary"></EduCard>
                <EduCard image="/media-304634621.jpg" name="Fergusson College" description="Higher Secondary"></EduCard>
                <EduCard image="/uop_logo.jpg" name="University of Pune" description="College"></EduCard>
                <EduCard image="/Saint-Mary-University-2991839189.jpg" name="Saint Mary's University" description="Masters"></EduCard>
            </div>
        </div>
    );
}