import React from 'react'
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';

const CategoriePaper = (props) => {
    const theme = useTheme();
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(props.navigate)
    };

    const Categorie = styled(Paper)(({ theme }) => ({
        textAlign: 'center',
        lineHeight: '150px',
        width: '200px',
        fontSize: 80,
        fontWeight: 700,
        cursor: 'pointer',
        color: props.color,
        boxShadow: props.boxShadow,
        background : props.backgroundColor ? props.backgroundColor : 'transparent'  
    }));
    return (
        <Categorie onClick={handleClick} >{props.name}</Categorie>
    )
}

export default CategoriePaper