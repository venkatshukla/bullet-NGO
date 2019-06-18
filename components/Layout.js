import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';


export default props => {
    const image='url("https://preview.ibb.co/iYH77p/cool_background_2.png")';
     return (
        <div style={{
        backgroundImage: image, height:'80vh', color:'#FFF' }}>
         <Head>
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css"></link>
            </Head>
        <Header style={{marginTop:0}}/>
        <Container>
            <div style={{marginTop:'75px'}}>
            <br></br>
            <br></br>
            {props.children}
           </div>
        </Container>
        <Footer />

        </div>
    );
};