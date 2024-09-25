import useList from "../../functional/organisms/useList"
import { ListUI } from "../../ui/organisms/ListUI"

export const ListUIContainer = () => {
    const {data} = useList()
    return (
        <ListUI data={data}/>
    )
}