import React from 'react';
import Button from '@mui/material/Button';
import './Agreement.scss';
import { Typography } from '@mui/material';
import { Stack, Alert, AlertTitle } from '@mui/material';

function Agreement({ onAccept }) {
    return (
        <Stack className="intro-agreement" spacing="50">
            <Alert severity="info" variant="filled" sx={{ fontSize: "large" }}>
                <AlertTitle sx={{ fontSize: "large" }}>         
                Aplikacja jest w trakcie tworzenia. Na ten moment obliczone dawki leków są nieprawidłowe
                </AlertTitle>
            </Alert>
            <Typography variant="h6" component="h1" textAlign="center">Kalkulator Medyczny pełni funkcję wyłącznie informacyjną. Korzystanie z usługi nie stanowi oraz nie zastępuje porady lekarskiej. Kliknięcie przycisku Rozumiem jest konieczne, by móc korzystać z aplikacji.</Typography>
            <Button variant="contained" color="primary" size="medium" onClick={onAccept}>
                Rozumiem
            </Button>
        </Stack>
    );
};

export default Agreement;
