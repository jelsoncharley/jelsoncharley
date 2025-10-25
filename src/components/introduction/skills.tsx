import { Chip } from "@mui/material";

export function Skills({ skill }: any) {
    return <>
        {/* <div className="mr-0 border-solid border">{skill}</div> */}
        <Chip label={skill} />

    </>
}