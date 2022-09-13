import React from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link'
import Container from '@mui/material/Container';
import MainLoayut from '../loayouts/MainLoayut';
import cl from '../styles/globals.module.css'


const index = () => {
    return (
      <div style = {{fontFamily: 'Roboto, sans-serif'}}>
        <MainLoayut>
       
        <div className="centre">
          <h1>Welcome to Listen and dot</h1>
          <h3>The best tracks are collected here</h3>
          <Link href="/tracks/search">
            <a>Home</a>
          </Link>

          <style>
            {`
                        .centre{
                            font: Roboto, 10px solid;
                            margin-top: 150px;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                        }
                    `}
          </style>
        </div>
        </MainLoayut>
        
      </div>
    );
};

export default index;