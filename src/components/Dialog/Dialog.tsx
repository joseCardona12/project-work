import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import Button from '../UI/Button/Button';
import { MdCancel } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { useElmentId } from '@/state-global/elementId';
import { updateCategoryService } from '@/services/categorieService';
import inputAlert from '../UI/Alert/Alert';
import { useRouter } from 'next/navigation';

interface UpdateDialogProps {
    open: boolean;
    onClose: () => void;
    onSave: (field1: string, field2: string) => void;
    title: string;
    label1:string;
    label2:string;
    action:string;
}

const UpdateDialog: React.FC<UpdateDialogProps> = ({ open, onClose, onSave, title, label1,label2,action}) => {
    const elementId = useElmentId((state)=>state.elementId);
    const router = useRouter();
    const [field1, setField1] = useState<string>('');
    const [field2, setField2] = useState<string>('');

    const handleSave = async() => {
        onSave(field1, field2);
        onClose(); 
        switch(action){
            case "update": 
                const data = await updateCategoryService(parseInt(elementId!),{nameCategory:field1,comment:field2});
                if(!data){
                    console.log("Is required all params")
                    return;
                }
                inputAlert("Updated category correctly", "success");
                router.refresh();
                return;
            case "create":
                console.log("create");
                break;
            default:
                break;
        }
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    label={label1}
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={field1}
                    onChange={(e) => setField1(e.target.value)}
                />
                <TextField
                    margin="dense"
                    label={label2}
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={field2}
                    onChange={(e) => setField2(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button
                icon={<MdCancel />}
                text='Cancel'
                background='blue'
                onClick={onClose} 
                />
                <Button
                icon={<FaSave />}
                text='Save'
                background='var(--background-color-button)'
                onClick={handleSave} 
                />
            </DialogActions>
        </Dialog>
    );
};

export default UpdateDialog;
