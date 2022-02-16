import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import { Button, Header } from 'flotiq-components-react';
import Logo from '../assets/Logo.svg';

/**
 * Content of index page
 */
const IndexPage = () => {
    // Extracting data from GraphQL query, the query is on the bottom of this file
    const data = useStaticQuery(query);
    return (
        <main className="flex flex-col h-screen justify-center items-center text-light-blue">
            {/* Content of <head> tag */}
            <Helmet>
                <html className="bg-dark-blue" lang="en" />
                <title>{data.allExample.nodes[0].title}</title>
            </Helmet>
            <div className="m-5">
                <img src={Logo} alt="Flotiq" width="300px" className="mx-auto" />
            </div>
            {/* Example usage of Header component with text from Flotiq Content Object */}
            <Header
                text={data.allExample.nodes[0].header}
                alignement="center"
                additionalClasses={['mt-24', 'mb-12']}
            />
            {/* Example usage of Header component with static text */}
            <Header
                additionalClasses={['mb-5']}
                level={3}
                text={(
                    <>
                        You can learn more about Flotiq in the
                        {' '}
                        <a href="https://flotiq.com/docs/" target="_blank" rel="noreferrer" className="underline">
                            documentation
                        </a>
                    </>
                )}
            />
            <div className="text-center mt-5 pt-5">
                {/* Example usage of button */}
                <Button label="Go to Flotiq page" onClick={() => window.open('https://flotiq.com', '_blank').focus()} />
            </div>
        </main>
    );
};

/**
 * GraphQL query getting data for the page
 * Here it request `header` and `title` properties from `example` content type
 */
const query = graphql`
    query IndexQuery {
        allExample {
            nodes {
                header
                title
            }
        }
    }
`;

export default IndexPage;
