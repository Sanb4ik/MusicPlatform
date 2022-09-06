import React from 'react';
import Button from '@mui/material/Button';
import Navbar from '../components/Navbar';
//import {css} from '../styles/globals.css'

const index = () => {
    return (
      <>
      <Navbar/>
        <div className="centre">
          
          <h1>Welcome to Listen and dot</h1>
          <h3>The best tracks are collected here</h3>
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
      </>
    );
};

export default index;