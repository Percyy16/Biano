import React from 'react';

import { images } from '../../constants';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Mainbar.scss';

const Mainbar = () => {
    return (
        <div className='bia__content'>
            <h1 className='bia__headtext'>Nábytek</h1>
            <div className='bia__content-menu'>
                <a className='bia__content-menu-wrap'>
                    <img src={images.kozenap} />
                    <p>Kožené</p>
                </a>

                <a className='bia__content-menu-wrap'>
                    <img src={images.moderni} />
                    <p>Moderní</p>
                </a>

                <a className='bia__content-menu-wrap'>
                    <img src={images.rozkladaci} />
                    <p>Rozkládací</p>
                </a>

                <a className='bia__content-menu-wrap'>
                    <img src={images.seda} />
                    <p>Šedé</p>
                </a>

                <a className='bia__content-menu-wrap'>
                    <img src={images.skandinavska} />
                    <p>Skandinávské</p>
                </a>

                <a className='bia__content-menu-wrap'>
                    <img src={images.retro} />
                    <p>Retro</p>
                </a>
            </div>
            <Container className="bia__container">
                <Row>
                    <Col xs={6} md={4} className="bia__row-box">
                        <img src={images.retro} />
                        <h1>Skladem</h1>
                        <p>4Home Vanocni povlak</p>
                        <p className='bia__row-box-price'>149 Kč</p>
                        <button>+ Do studia</button>
                    </Col>
                    <Col xs={6} md={4} className="bia__row-box">
                        <img src={images.retro} />
                        <h1>Skladem</h1>
                        <p>4Home Vanocni povlak</p>
                        <p className='bia__row-box-price'>149 Kč</p>
                        <button>+ Do studia</button>
                    </Col>
                    <Col xs={6} md={4} className="bia__row-box">
                        <img src={images.retro} />
                        <h1>Skladem</h1>
                        <p>4Home Vanocni povlak</p>
                        <p className='bia__row-box-price'>149 Kč</p>
                        <button>+ Do studia</button>
                    </Col>
                    <Col xs={6} md={4} className="bia__row-box">
                        <img src={images.retro} />
                        <h1>Skladem</h1>
                        <p>4Home Vanocni povlak</p>
                        <p className='bia__row-box-price'>149 Kč</p>
                        <button>+ Do studia</button>
                    </Col>
                    <Col xs={6} md={4} className="bia__row-box">
                        <img src={images.retro} />
                        <h1>Skladem</h1>
                        <p>4Home Vanocni povlak</p>
                        <p className='bia__row-box-price'>149 Kč</p>
                        <button>+ Do studia</button>
                    </Col>
                    <Col xs={6} md={4} className="bia__row-box">
                        <img src={images.retro} />
                        <h1>Skladem</h1>
                        <p>4Home Vanocni povlak</p>
                        <p className='bia__row-box-price'>149 Kč</p>
                        <button>+ Do studia</button>
                    </Col>
                    <Col xs={6} md={4} className="bia__row-box">
                        <img src={images.retro} />
                        <h1>Skladem</h1>
                        <p>4Home Vanocni povlak</p>
                        <p className='bia__row-box-price'>149 Kč</p>
                        <button>+ Do studia</button>
                    </Col>
                    <Col xs={6} md={4} className="bia__row-box">
                        <img src={images.retro} />
                        <h1>Skladem</h1>
                        <p>4Home Vanocni povlak</p>
                        <p className='bia__row-box-price'>149 Kč</p>
                        <button>+ Do studia</button>
                    </Col>
                    <Col xs={6} md={4} className="bia__row-box">
                        <img src={images.retro} />
                        <h1>Skladem</h1>
                        <p>4Home Vanocni povlak</p>
                        <p className='bia__row-box-price'>149 Kč</p>
                        <button>+ Do studia</button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Mainbar