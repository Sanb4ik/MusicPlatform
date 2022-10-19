import React from 'react';
import Player from "../components/Player";
import Head from "next/head";
import Sidebar from '../components/sidebar';
import st from "../styles/layout.module.css"

interface MainLayoutProps {
    title?: string;
    description?: string;
    keywords?: string;
}

const MainLayout: React.FC<MainLayoutProps>
    = ({
           children,
           title,
            description,
            keywords
       }) => {
    return (
        <div className={st.wrapper}>
            <Head>
                <title>{title || 'Музыкальная площадка'}</title>
                <meta name="description" content={`Музыкальная площадка. Здесь каждый может оставить свой трек и стать знаменитым.` + description}/>
                <meta name="robots" content="index, follow"/>
                <meta name="keywords" content={keywords || "Музыка, треки, артисты"}/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            
            <div className={st.container}>
                <div className={st.sidebar}>
                    <Sidebar />
                </div>
                <div className={st.music_content}>
                    {children}
                </div>
            </div>
            <div className={st.player}>
            <Player/>
            </div>
        </div>
    );
};

export default MainLayout;