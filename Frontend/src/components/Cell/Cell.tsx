import React, {ChangeEvent, ComponentType, FunctionComponent, useEffect, useRef, useState} from 'react'
import classes from './Cell.module.css'
import { atom, useRecoilState } from 'recoil';
import {CellValueState} from '../../store/CellValueState.ts'


export type CellProps = {
      cellid: string;
      children: string;
}


const Cell: FunctionComponent<CellProps> = (props) => {

  const [cellValue,setCellValue]  = useRecoilState<string>(CellValueState);

  const [isEditMode,setIsEditMode] = useState(false);
  const inputRef= useRef(null);

  const changeLabelToInput = () => setIsEditMode(true);
  const changeInputToLabel = () => setIsEditMode(false);
  const updateCellValueState = (event : ChangeEvent <HTMLInputElement>) => setCellValue(event.target.value)
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
    (<input  ref={inputRef}
       data-cell-id={"2"}
       value={cellValue}
       onChange={updateCellValueState}/>) 
    : 
    (<div 
      data-cell-id={"2"}
      onClick={changeLabelToInput}>
        {cellValue}
      </div>)
    )
}


export default Cell
