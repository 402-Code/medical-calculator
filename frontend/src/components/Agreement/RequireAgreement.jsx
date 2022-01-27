import React, { useState } from 'react';
import Agreement from './Agreement';

function RequireAgreement({ children }) {
    const [isAccepted, setAccepted] = useState(() => !!localStorage.getItem('agreement'));

    function accept() {
        localStorage.setItem('agreement', true);
        setAccepted(true);
    }

    return isAccepted ? children : <Agreement onAccept={accept}/>; 
}

export default RequireAgreement;
