import React from 'react';

function Footer() {
    return (
        <footer className="bg-dark text-white py-4 mt-auto">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
                        <img 
                            src={process.env.PUBLIC_URL + '/logo.png'} 
                            alt="Logo Universidad" 
                            className="img-fluid"
                            style={{ maxHeight: '60px' }}
                        />
                    </div>
                    <div className="col-md-8 text-center text-md-end">
                        <p className="mb-0">© 2024 Akatsuki. Todos los derechos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer; 