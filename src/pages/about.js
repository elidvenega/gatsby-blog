import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const AboutPage = () => {
    return(
       <Layout>
            <h1>About Me</h1>
            <p>Gatsby Blog Tutorial where I will learn Gatsby</p>
            <p>Need a developer? <Link to="/contact">Contact me</Link></p>
       </Layout>
    )
}

export default AboutPage;