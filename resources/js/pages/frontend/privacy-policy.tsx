import React from 'react';
import { Head } from '@inertiajs/react';

import FrontendLayout from '@/layouts/frontend-layout';

const policySections = [
    {
        title: 'Information we collect',
        copy: [
            'We may collect personal information that you voluntarily provide, such as your name, email address, phone number, and any details you submit through contact forms or service inquiries.',
            'We may also collect certain non-personal information automatically, including IP address, browser type, device information, and website usage data through cookies or analytics tools.',
        ],
    },
    {
        title: 'How we use your information',
        copy: [
            'We use this information to operate the website, respond to inquiries, provide services, improve user experience, monitor site performance, and maintain security. We may also use information to comply with legal obligations and enforce our website policies.',
        ],
    },
    {
        title: 'Cookies',
        copy: [
            'Our website may use cookies and similar technologies to improve functionality, analyze traffic, and remember preferences. You can control cookie settings through your browser, but disabling cookies may affect some site features.',
        ],
    },
    {
        title: 'Sharing of information',
        copy: [
            'We do not sell personal information. We may share information with service providers that help us operate the website or support our business, such as hosting, analytics, email, or payment service providers, when necessary for legitimate business purposes or legal compliance.',
        ],
    },
    {
        title: 'Security',
        copy: [
            'We take reasonable measures to protect your information, but no method of transmission or storage is completely secure. Because of this, we cannot guarantee absolute security.',
        ],
    },
    {
        title: 'Your choices and rights',
        copy: [
            'Depending on your location, you may have the right to request access to, correction of, or deletion of your personal information. You may also opt out of marketing communications at any time.',
        ],
    },
    {
        title: 'Third-party links',
        copy: [
            'This website may contain links to third-party websites. We are not responsible for the privacy practices or content of those external sites.',
        ],
    },
    {
        title: 'Children’s privacy',
        copy: [
            'This website is not intended for children under 13, and we do not knowingly collect personal information from children. If such information is discovered, we will take steps to remove it.',
        ],
    },
    {
        title: 'Updates to this policy',
        copy: [
            'We may update this Privacy Policy from time to time, and any updates will be posted on this page with a revised effective date.',
        ],
    },
    {
        title: 'Contact us',
        copy: [
            'If you have questions about this Privacy Policy, please contact:',
            'Rely Services Tampa',
            'support@relyservicestampa.com',
            '8134373776',
        ],
    },
];

export default function PrivacyPolicy() {
    return (
        <FrontendLayout>
            <Head title="Privacy Policy | Rely Services Tampa" />
            <main className="bg-white py-14 sm:py-16">
                <section className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-10 sm:mb-12 text-center">
                            <p className="text-xs sm:text-sm uppercase tracking-[0.4em] text-primary-400">Privacy Policy</p>
                            <h1 className="mt-4 text-3xl sm:text-4xl font-serif font-semibold text-primary-900">Privacy Policy</h1>
                            <p className="mt-3 text-sm sm:text-base text-primary-700">Effective Date: July 15, 2026</p>
                            <p className="mt-4 text-sm sm:text-base text-primary-700">
                                Welcome to Rely Services Tampa. We respect your privacy and are committed to protecting the
                                information you provide when using our website. This Privacy Policy explains what information
                                we may collect, how we use it, and the choices you may have regarding your information.
                            </p>
                        </div>
                        <div className="space-y-8 sm:space-y-10">
                            {policySections.map((section) => (
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
