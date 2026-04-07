import React from 'react'
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';

const CategoriePaper = (props) => {
    const theme = useTheme();
    const navigate = useNavigate()
    const handleClick = () => {
        if(props.navigate){
            navigate(props.navigate)
        }
    };

    const Categorie = styled(Paper)(({ theme }) => ({
        textAlign: 'center',
        fontSize: 'clamp(24px, 11vh, 120px)',
        fontWeight: 600,
        cursor: 'pointer',
        color: props.color,
        boxShadow: props.boxShadow,
        background : props.backgroundColor ? props.backgroundColor : 'transparent'  
    }));

    return (
        <Categorie className="flex justify-center font-Text-R" onClick={handleClick} >
            {props.name}
        </Categorie>
    )
}

export default CategoriePaper