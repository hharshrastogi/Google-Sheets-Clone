import React, {ComponentType, FunctionComponent, useEffect, useRef, useState} from 'react'
import classes from './Cell.module.css'



export type CellProps = {
      cellid: string;
      children: string;
}


const Cell: FunctionComponent<CellProps> = (props) => {

  const [isEditMode,setIsEditMode] = useState(false);
  const inputRef= useRef(null);

  const changeLabelToInput = () => setIsEditMode(true);
  const changeInputToLabel = () => setIsEditMode(false);

  const onClickOutsideInputHandler = (event : MouseEvent) => {
    if((event.target as HTMLElement)?.dataset?.cellId !== "2"){
      changeInputToLabel()
    }
  };
  useEffect(()=>{
    document.addEventListener("click",onClickOutsideInputHandler);

    return () => {document.removeEventListener("click", onClickOutsideInputHandler);}

  },[])

    return( isEditMode ?
    (<input  ref={inputRef} data-cell-id={"2"}/>) 
    : 
    (<div 
      data-cell-id={"2"}
      onClick={changeLabelToInput}>
        {props.children}
      </div>)
    )
}


export default Cell
