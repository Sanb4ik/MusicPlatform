import React from 'react';
import  Navbar  from '../components/Navbar';

const MainLoayut : React.FC = ({children}) => {
    return (
        <>
            <Navbar/>
            {children}
        </>
    );
};

export default MainLoayut;