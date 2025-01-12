import React , { ComponentType, FunctionComponent } from "react";
import classes from './SheetContainer.module.css';
import Sheet from '../components/Sheet/Sheet';
export type SheetContainerProps = {}

const SheetContainer: FunctionComponent<SheetContainerProps> = (props) =>{
    return  <Sheet />
}  

export default SheetContainer;