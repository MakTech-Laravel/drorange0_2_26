import React from 'react';
import { Head } from '@inertiajs/react';

import FrontendLayout from '@/layouts/frontend-layout';

const termsSections = [
    {
        title: 'Acceptable use',
        copy: [
            'You agree to use this website only for lawful purposes and in a way that does not infringe on the rights of others, interfere with site operations, or violate any applicable laws. Prohibited behavior includes attempting to damage the site, interfere with security, transmit malicious code, or misuse website content.',
        ],
    },
    {
        title: 'Intellectual property',
        copy: [
            'Unless otherwise stated, all content on this website, including text, graphics, branding, logos, layout, and other materials, is owned by Rely Services Tampa or used with permission and is protected by applicable intellectual property laws. You may view and use the website for personal or business informational purposes only, but you may not copy, reproduce, republish, or distribute website content without prior written permission.',
        ],
    },
    {
        title: 'User submissions',
        copy: [
            'If you submit information through forms or other website features, you agree that the information you provide is accurate and does not violate any law or third-party rights. You also grant us the right to use that information as necessary to respond to your request, provide services, or operate the website.',
        ],
    },
    {
        title: 'Disclaimer of warranties',
        copy: [
            'This website is provided on an “as is” and “as available” basis. We do not guarantee that the website will always be available, error-free, secure, or uninterrupted, and we make no warranties regarding the accuracy or completeness of the website content.',
        ],
    },
    {
        title: 'Limitation of liability',
        copy: [
            'To the fullest extent permitted by law, Rely Services Tampa will not be liable for any indirect, incidental, special, or consequential damages arising out of or related to your use of this website. This includes loss of data, loss of business, loss of profits, or inability to use the website.',
        ],
    },
    {
        title: 'Third-party links',
        copy: [
            'This website may contain links to third-party websites for convenience or reference. We are not responsible for the content, policies, or practices of any third-party websites.',
        ],
    },
    {
        title: 'Access and availability',
        copy: [
            'We reserve the right to restrict, suspend, or terminate access to the website at any time without notice if we believe these Terms have been violated or the website is being used improperly. We may also change, suspend, or discontinue any part of the website at any time.',
        ],
    },
    {
        title: 'Governing law',
        copy: [
            'These Terms and Conditions are governed by the laws of the State of Florida. Any disputes related to the website will be handled in the appropriate courts located in Florida.',
        ],
    },
    {
        title: 'Changes to these terms',
        copy: [
            'We may update these Terms and Conditions from time to time by posting a revised version on this page. Continued use of the website after changes are posted means you accept the revised Terms.',
        ],
    },
    {
        title: 'Contact us',
        copy: [
            'If you have questions about these Terms and Conditions, please contact:',
            'Rely Services Tampa',
            'support@relyservicestampa.com',
            '8134373776',
        ],
    },
];

export default function TermsAndConditions() {
    return (
        <FrontendLayout>
            <Head title="Terms & Conditions | Rely Services Tampa" />
            <main className="bg-white py-14 sm:py-16">
                <section className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-10 sm:mb-12 text-center">
                            <p className="text-xs sm:text-sm uppercase tracking-[0.4em] text-primary-400">Terms & Conditions</p>
                            <h1 className="mt-4 text-3xl sm:text-4xl font-serif font-semibold text-primary-900">Terms and Conditions</h1>
                            <p className="mt-3 text-sm sm:text-base text-primary-700">Effective Date: July 15, 2026</p>
                            <p className="mt-4 text-sm sm:text-base text-primary-700">
                                Welcome to the website of Rely Services Tampa. By accessing or using this website, you agree
                                to be bound by these Terms and Conditions. If you do not agree with these Terms, you should
                                not use the website.
                            </p>
                        </div>
                        <div className="space-y-8 sm:space-y-10">
                            {termsSections.map((section) => (
                                <article key={section.title} className="rounded-3xl border border-slate-200/80 bg-white/70 p-6 sm:p-7 shadow-[0_15px_45px_rgba(15,23,42,0.08)]">
                                    <h2 className="text-xl sm:text-2xl font-semibold text-primary-900">{section.title}</h2>
                                    <div className="mt-4 space-y-3 text-sm sm:text-base leading-relaxed text-primary-700">
                                        {section.copy.map((paragraph) => (
                                            <p key={paragraph}>{paragraph}</p>
                                        ))}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </FrontendLayout>
    );
}
