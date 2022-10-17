import { Button } from '@mui/material'
import React,{useState,useEffect} from 'react'
import { useDokumentTitle } from './custom-hooks/useDokumentTitle'
 
export const DocTitleOne = () =>
{
    const [count, setCount] = useState(0)
   useDokumentTitle(count)
    return (
    <>
            <Button variant='contained' onClick={()=>setCount(count+1)} >Count - ({count})</Button>
    </>)
}