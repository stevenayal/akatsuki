import React from 'react';
import { FaGithub } from 'react-icons/fa';

function SobreNosotros() {
    const teamMembers = [
        {
            name: 'Steven Ayala',
            github: 'https://github.com/stevenayal',
            username: '@stevenayal'
        },
        {
            name: 'Gustavo Acosta',
            github: 'https://github.com/Gustavo-cpu142',
            username: '@Gustavo-cpu142'
        },
        {
            name: 'Saulo Caceres',
            github: 'https://github.com/R0BE3RT',
            username: '@R0BE3RT'
        }
    ];

    return (
        <div className="container py-5">
            <div className="text-center mb-5">
                <h1 className="display-4 mb-4">Sobre Nosotros</h1>
                <div className="bg-danger text-white p-4 rounded-3 mb-5">
                    <p className="lead mb-0">
                        Somos un equipo apasionado por el desarrollo web, comprometidos con 
                        crear soluciones innovadoras y experiencias de usuario excepcionales.
                    </p>
                </div>
            </div>

            <div className="row justify-content-center g-4">
                {teamMembers.map((member, index) => (
                    <div key={index} className="col-md-4">
                        <div className="card h-100 shadow-sm hover-card">
                            <div className="card-body text-center">
                                <h5 className="card-title mb-3">{member.name}</h5>
                                <a 
                                    href={member.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="btn btn-dark d-flex align-items-center justify-content-center gap-2"
                                >
                                    <FaGithub size={20} />
                                    {member.username}
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-5">
                <img 
                    src={process.env.PUBLIC_URL + '/logo/logo_pain.jpg'} 
                    alt="Pain Logo" 
                    className="img-fluid rounded-3 shadow-lg"
                    style={{ 
                        width: '100%',
                        maxHeight: '600px',
                        objectFit: 'cover',
                        borderRadius: '15px'
                    }}
                />
            </div>
        </div>
    );
}

export default SobreNosotros; 