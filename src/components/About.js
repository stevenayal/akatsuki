import React from 'react';

function About() {
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Sobre Nosotros</h2>
            <div className="row">
                <div className="col-md-8 mx-auto">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">Bienvenidos a Tienda Online Akatsuki</h3>
                            <p className="card-text">
                                Somos una tienda especializada en ofrecer los mejores productos
                                con la más alta calidad. Nuestra misión es proporcionar una
                                experiencia de compra excepcional a nuestros clientes.
                            </p>
                            <p className="card-text">
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