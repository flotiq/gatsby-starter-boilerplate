const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await graphql(`
        query GetExamples {
            allExample(
                sort: { fields: flotiqInternal___createdAt, order: DESC }
            ) {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `);

    if (result.errors) {
        throw result.errors;
    }
    const examples = result.data.allExample.edges;

    // Create paginated index
    const examplesPerPage = 2;
    const numPages = Math.ceil(examples.length / examplesPerPage);

    Array.from({ length: numPages }).forEach((item, i) => {
        createPage({
            path: i === 0 ? '/' : `/${i + 1}`,
            component: path.resolve('./src/templates/index.js'),
            context: {
                limit: examplesPerPage,
                skip: i * examplesPerPage,
                numPages,
                currentPage: i + 1,
            },
        });
    });
};
