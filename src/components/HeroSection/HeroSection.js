import React from 'react';
import '../../App.css'; // Estilos globais
import { Button } from '../Button/Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/FikaFacil.mp4'
                autoPlay loop muted />
            <div className='title-info-container'>
                <h1>VENHA CONFERIR AS PROMOÇÕES DO FIKAFACIL</h1>
                <p>O que você está esperando?</p>
            </div>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    <td
                        onClick={() =>
                            window.open("https://www.youtube.com/watch?v=QonyO-tSxuc",
                                "_blank")}
                    >
                        ASSISTA O TRAILER <i className='far fa-play-circle' />
                    </td>
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;
