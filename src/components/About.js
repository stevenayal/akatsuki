import React from 'react';

function About() {
    return (
        <div className="container mt-5" style={{
            background: 'linear-gradient(to bottom, #DC143C, #000000)',
            borderRadius: '8px',
            padding: '30px',
            color: 'white'
        }}>
            <h2 className="text-center mb-4" style={{ color: 'white' }}>Sobre Nosotros</h2>
            <div className="row">
                <div className="col-md-8 mx-auto">
                    <div className="card" style={{
                        background: 'linear-gradient(to bottom, #DC143C, #000000)',
                        color: 'white',
                        border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}>
                        <div className="card-body">
                            <h3 className="card-title" style={{ color: 'white' }}>Bienvenidos a Tienda Online Akatsuki</h3>
                            <p className="card-text" style={{ color: 'white' }}>
                                Somos una tienda especializada en ofrecer los mejores productos
                                con la más alta calidad. Nuestra misión es proporcionar una
                                experiencia de compra excepcional a nuestros clientes.
                            </p>
                            <p className="card-text" style={{ color: 'white' }}>
                                Con años de experiencia en el mercado, nos hemos convertido
                                en una referencia en el sector, ofreciendo productos
                                cuidadosamente seleccionados para satisfacer las necesidades
                                de nuestros clientes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About; 