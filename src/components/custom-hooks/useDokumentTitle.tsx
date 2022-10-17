import { useEffect } from "react"
type countType = number;
export const useDokumentTitle = (count:countType) =>
{
    useEffect(() =>
    {
        document.title = `Count - (${count})`
    },[count])
}