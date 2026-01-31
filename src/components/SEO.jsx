import { Helmet } from 'react-helmet-async';

const SEO = () => {
    const siteUrl = 'https://princepaulose.netlify.app';
    const title = 'Prince Paulose - Senior Software Engineer | React, Node.js, Java Expert';
    const description = 'Prince Paulose is a Senior Software Engineer from Kerala, India specializing in React, Node.js, TypeScript, Java, and AI integration. 7+ years of experience building scalable web applications at IBM and Capgemini. Available for freelance projects and full-time opportunities.';
    const keywords = 'Prince Paulose, Prince Paulose Kerala, Prince Paulose Software Engineer, Prince Paulose IBM, Prince Paulose portfolio, React developer Kerala, Node.js developer India, Senior Software Engineer Kerala, Full Stack Developer India, TypeScript developer, Java Spring Boot developer, freelance React developer Kerala, software engineer Thrissur, web developer Kerala, AI integration specialist, frontend architect India';

    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Prince Paulose',
        alternateName: ['Prince Paulose Kerala', 'Prince Paulose Software Engineer'],
        jobTitle: 'Senior Software Engineer',
        description: 'Senior Software Engineer specializing in React, Node.js, TypeScript, Java, and AI integration with 7+ years of experience',
        url: siteUrl,
        email: 'princepaulose1996@gmail.com',
        telephone: '+917591944220',
        image: `${siteUrl}/portfolio-logo.svg`,
        sameAs: [
            'https://github.com/princepaulose46',
            'https://www.linkedin.com/in/princepaulose1996/',
            'https://princepaulose.netlify.app'
        ],
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Kerala',
            addressRegion: 'Kerala',
            addressCountry: 'India'
        },
        alumniOf: {
            '@type': 'EducationalOrganization',
            name: 'University of Calicut',
            sameAs: 'https://www.universityofcalicut.info/'
        },
        worksFor: {
            '@type': 'Organization',
            name: 'IBM India Software Labs',
            sameAs: 'https://www.ibm.com'
        },
        knowsAbout: [
            'React', 'Node.js', 'TypeScript', 'JavaScript', 'Java', 'Spring Boot',
            'Microservices', 'MongoDB', 'GraphQL', 'AWS', 'Next.js',
            'Full Stack Development', 'Frontend Development', 'Backend Development',
            'AI Integration', 'LLM', 'Generative AI', 'System Design', 'Web Performance'
        ],
        hasOccupation: {
            '@type': 'Occupation',
            name: 'Senior Software Engineer',
            occupationLocation: {
                '@type': 'City',
                name: 'Kerala'
            },
            estimatedSalary: {
                '@type': 'MonetaryAmountDistribution',
                name: 'base',
                currency: 'INR'
            },
            skills: 'React, Node.js, TypeScript, Java, Spring Boot, AWS, MongoDB, GraphQL, AI Integration'
        }
    };

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Prince Paulose" />
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            <meta name="googlebot" content="index, follow" />
            <meta name="google-site-verification" content="y4j3PyV3rnt7jbBgrY8Lu89aCgndw1IQey0q8m6fjpg" />
            <link rel="canonical" href={siteUrl} />

            {/* Geographic Tags */}
            <meta name="geo.region" content="IN-KL" />
            <meta name="geo.placename" content="Kerala" />
            <meta name="geo.position" content="10.8505;76.2711" />
            <meta name="ICBM" content="10.8505, 76.2711" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={`${siteUrl}/portfolio-logo.svg`} />
            <meta property="og:site_name" content="Prince Paulose Portfolio" />
            <meta property="og:locale" content="en_US" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={siteUrl} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${siteUrl}/portfolio-logo.svg`} />
            <meta name="twitter:creator" content="@princepaulose" />

            {/* Additional SEO Tags */}
            <meta name="theme-color" content="#00f0ff" />
            <meta name="language" content="English" />
            <meta name="revisit-after" content="7 days" />
            <meta name="rating" content="general" />
            <meta name="distribution" content="global" />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>

            {/* Additional Structured Data for Professional Profile */}
            <script type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'ProfilePage',
                    mainEntity: {
                        '@type': 'Person',
                        name: 'Prince Paulose',
                        description: description,
                        image: `${siteUrl}/portfolio-logo.svg`,
                        sameAs: [
                            'https://github.com/princepaulose46',
                            'https://www.linkedin.com/in/princepaulose1996/'
                        ]
                    }
                })}
            </script>

            {/* WebSite Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'WebSite',
                    name: 'Prince Paulose Portfolio',
                    url: siteUrl,
                    description: description,
                    author: {
                        '@type': 'Person',
                        name: 'Prince Paulose'
                    },
                    potentialAction: {
                        '@type': 'SearchAction',
                        target: `${siteUrl}/?s={search_term_string}`,
                        'query-input': 'required name=search_term_string'
                    }
                })}
            </script>
        </Helmet>
    );
};

export default SEO;
