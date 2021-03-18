import React from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Junta-se ao boletim informativo FikaFacil para
                    receber nossas melhores ofertas semanais
                </p>
                <p className="footer-subscription-text">
                    Você pode cancelar sua inscrição a qualquer momento.
                </p>
                <div className="input-areas">
                    <form>
                        <input
                            type="email"
                            name="email"
                            placeholder='Inscreva seu e-mail'
                            className="footer-input"
                        />
                        <Button buttonStyle='btn--outline'>Se inscrever</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Sobre nós</h2>
                        <Link to='/signUp'>Entre em contato conosco</Link>
                        <Link to='/'>Carreiras</Link>
                        <Link to='/'>Histórias da FikaFacil</Link>
                        <Link to='/'>Aperte</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Ajuda</h2>
                        <Link to='/signUp'>Pagamentos</Link>
                        <Link to='/'>Envio</Link>
                        <Link to='/'>Cancelamentos e devoluções</Link>
                        <Link to='/'>Perguntas frequentes</Link>
                        <Link to='/'>Denunciar violação</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Política</h2>
                        <Link to='/signUp'>Política de devolução</Link>
                        <Link to='/'>Termos de uso</Link>
                        <Link to='/'>Segurança</Link>
                        <Link to='/'>Privacidade</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Redes Sociais</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>
                            FIKAFACIL
                            <FontAwesomeIcon icon="shopping-cart" />
                        </Link>
                    </div>
                    <small class='website-rights'>FIKAFACIL © 2021</small>
                    <div class='social-icons'>
                        <Link
                            class='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i class='fab fa-facebook-f' />
                        </Link>
                        <Link
                            class='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i class='fab fa-instagram' />
                        </Link>
                        <Link
                            class='social-icon-link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i class='fab fa-youtube' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i class='fab fa-twitter' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i class='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
