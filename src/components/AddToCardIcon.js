import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const AddToCardIcon = () => {
    const a = 5
    const counter =
    {
        position: "relative", top: "-35px", padding: " 1px 6px", borderRadius: "50%",
        backgroundColor: "red", color: "white", fontSize: "12px", left: "15px"
    }
    return (
        <>
            <AddShoppingCartIcon />
            <span style={counter}>{a}</span>
        </>

    )
}

export default AddToCardIcon