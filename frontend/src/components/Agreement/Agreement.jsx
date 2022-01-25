import React from "react";
import Button from '@mui/material/Button';
import './Agreement.scss';

function Agreement({ onAccept }) {


    return (
        <div className="intro-agreement">
            <h2>Kalkulator Medyczny nie stanowi oraz nie zastępuje porady lekarskiej. Kliknięcie przycisku Rozumiem jest konieczne, by móc korzystać z aplikacji.</h2>
            <Button variant="contained" color="primary" onClick={onAccept}>
                Rozumiem
            </Button>
        </div>
    );
};

export default Agreement;