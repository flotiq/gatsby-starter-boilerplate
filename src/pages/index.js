import React from 'react';
import { Helmet } from 'react-helmet';
import Logo from '../assets/Logo.svg';

const IndexPage = () => (
    <main>
        <Helmet>
            <title>Main page</title>
        </Helmet>
        <div className="text-center mt-5 mb-5">
            <img src={Logo} alt="Flotiq" width="300px" />
        </div>
        <h1 className="text-center mt-5 mb-5">Welcome to Flotiq gatsby starter boilerplate!</h1>
        <p className="text-center">
            You can learn more about Flotiq in the
            {' '}
            <a href="https://flotiq.com/docs/" target="_blank" rel="noreferrer">documentation</a>
        </p>
    </main>
);

export default IndexPage;
