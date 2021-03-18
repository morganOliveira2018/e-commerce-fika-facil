import React from 'react';
import CardItem from '../CardItem/CardItem';
import '../Cards/Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Confira as categorias em destaque na loja!</h1>
            <h2> Eletrônicos e Tecnologia </h2>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src="images/Celulares_Smartphones.jpg"
                            text='Celulares, Smartphones, Smartwatches e Acessórios'
                            label='Celulares e comunicações'
                            path='/services'
                        />
                        <CardItem
                            src="images/Tvs.jpg"
                            text='Tvs, Acessórios e Alto-Falantes e Caixas de Som'
                            label='TV, Áudio e Cinema em Casa'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src="images/Tablets.jpg"
                            text='Vários tamanhos e modelos'
                            label='Tablets'
                            path='/services'
                        />
                        <CardItem
                            src="images/Computadores.jpg"
                            text='Notebooks, Monitores e Computadores Desktop'
                            label='Computadores e Informática'
                            path='/services'
                        />
                    </ul>
                    {/* Parei no minuto 1:08:16 */}
                </div>
            </div>
        </div>
    );
}

export default Cards;