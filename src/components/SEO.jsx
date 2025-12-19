import { Helmet } from 'react-helmet-async';
import resumeData from '../data/resume.json';

const SEO = () => {
    const { basics } = resumeData;

    const title = "Prince Paulose | Senior Full Stack Developer | React, Node.js, Java";
    const description = "Prince Paulose - Senior Full Stack Developer specializing in React, Node.js, TypeScript, and Java microservices. Freelance developer based in Kerala, India with expertise in building scalable web applications, microservices architecture, and cloud solutions.";
    const keywords = "Prince Paulose, freelance React developer, Node.js developer, Java Full Stack developer, Senior Software Engineer Kerala, TypeScript developer, microservices developer India, React developer Kerala, freelance developer India, IBM developer, Capgemini developer";
    const url = "https://princepaulose.dev"; // Update with your actual domain
    const image = `${url}/portfolio-logo.svg`; // Update with actual preview image if you have one

    // Structured Data (JSON-LD) for Person schema
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Prince Paulose",
        "jobTitle": "Senior Java Full-Stack Engineer",
        "description": "Senior Full Stack Developer specializing in React, Node.js, TypeScript, and Java microservices",
        "url": url,
        "email": basics.email,
        "telephone": basics.phone,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kerala",
            "addressCountry": "India"
        },
        "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "University of Calicut"
        },
        "knowsAbout": [
            "React",
            "Node.js",
            "TypeScript",
            "JavaScript",
            "Java",
            "Spring Boot",
            "Microservices",
            "MongoDB",
            "GraphQL",
            "AWS",
            "Azure",
            "Full Stack Development",
            "Frontend Development",
            "Backend Development"
        ],
        "worksFor": [
            {
                "@type": "Organization",
                "name": "IBM India Software Labs"
            }
        ]
    };

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Prince Paulose" />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content="Prince Paulose Portfolio" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Additional SEO Tags */}
            <meta name="robots" content="index, follow" />
            <meta name="language" content="English" />
            <meta name="revisit-after" content="7 days" />
            <meta name="theme-color" content="#6366f1" />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
};

export default SEO;
