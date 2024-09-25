import {  ListItemUI } from "../atoms/ListItemUI"

interface ListUIProps {
    data: string[];
}

export const ListUI = ({data}: ListUIProps) => {
    return(
        <ul>
            {data.map((item, index) => (
                <ListItemUI key={index} label={item} />
            ))}
        </ul>
    )
}