import { Skills } from "./skills";

export function Intro() {
    return <div className="w-4xl justify-self-center">
        <div>Jelson Chacko</div>
        <div>Strategic, motivated, and reliable Master of Computing and Data Analytics student with previous experience developing web-based applications and data management systems,
            predominantly in the software development industry. Experienced in all stages of SDLC on both the development and testing side. A dynamic team player who collaborates with others
            to deliver results within tight timeframes. Dedicated to continuous learning and growth that ensures relevance and competencies in a dynamic industry.</div>
        <br />
        <Skills />
    </div>
}