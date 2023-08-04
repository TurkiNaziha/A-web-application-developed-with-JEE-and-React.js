import {
    Button, Dialog,DialogTitle,DialogContent,DialogContentText, DialogActions} from '@mui/material'
    import React, { useState } from "react";
import Tachemangement from './Tachemangement';
import TableDymique from './TableDymique'
// { employes, setemployes }
    export default function DialogTache({ selectedRow }) {
        const [open, setOpen]=useState(false)
        const [targetKeys, setTargetKeys] = useState([]);
        function test(){
            // setOpen(false);
            
            console.log("test",selectedRow);
            return (<div>
                <TableDymique   selectedRow ={ selectedRow }  />
            </div>);
             
        }
        return(
        <div>
        <Button style={{    marginLeft: "0px",
    width: "100px",
    marginRight: "0px"}} onClick={()=> setOpen(true)}>Planning</Button>
        <Dialog
        open={open}
        onClose={()=> setOpen(false)}
        aria-labelledBy='title'
        aria-describedly='descripti'>
            <DialogTitle id='tit'>Prepare your Planning!</DialogTitle>
            <DialogContent>
                {/* <DialogContentText id='desc'>u can do it</DialogContentText> */}
                {/* employes={employes} setemployes={setemployes} */}
                <Tachemangement  selectedRow ={ selectedRow } targetKeys={targetKeys} setTargetKeys={setTargetKeys}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={()=> setOpen(false)}>Cancel</Button>
                {/* <Button autoFocus onClick={()=> test()}>Apply</Button> */}
                <TableDymique   selectedRow ={ selectedRow } targetKeys={targetKeys}  setTargetKeys={setTargetKeys} />
            </DialogActions>
        </Dialog>
       </div>
       )

    }