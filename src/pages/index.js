import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const IndexPage = () => {
    return (
        <Layout>
            <h1>Hello.</h1>
            <h2>I'm Sidnei, a front-end developer living in (not) beautiful Brazil.</h2>
            <p>Internal link: <Link to="/contact">Here.</Link></p>
            <p>External link: <a href="https://github.com" rel="noreferrer" target="_blank">Here.</a></p>
        </Layout>
    )
}

export default IndexPage;