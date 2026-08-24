import React from 'react';

import { Link } from '@inertiajs/react';
import { PoundSterling } from 'lucide-react';

import { WhyCreateWillHeroSection } from './why-create-will-hero-section';
import { WhyCreateWillCardsGrid } from './why-create-will-cards-grid';
import { useReveal } from '@/hooks/use-reveal';
 

export function WhyCreateWillSection() {
    const [headerRef, headerVisible] = useReveal<HTMLDivElement>();
    const [videoRef, videoVisible] = useReveal<HTMLDivElement>(0.1);
    const [gridRef, gridVisible] = useReveal<HTMLDivElement>(0.1);
    

    return (
        <section className="bg-white overflow-hidden">
              {/* Stats */}
        <section className="lg:py-14 py-8 border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="stat-num font-bold text-3xl font-inter text-blue-600">Since 2014</div>
              <p className="text-base text-gray-600 mt-1 font-inter font-normal">Serving the Tampa Bay Area</p>
            </div>
            <div>
              <div className="stat-num font-bold text-3xl font-inter text-blue-600">25+ Years</div>
              <p className="text-base text-gray-600 mt-1 font-inter font-normal">Combined construction experience</p>
            </div>
            <div>
              <div className="stat-num font-bold text-3xl font-inter text-blue-600">Homeowners and Businesses</div>
              <p className="text-base text-gray-600 mt-1 font-inter font-normal">Residential and commercial remodeling</p>
            </div>
            <div>
              <div className="stat-num font-bold text-3xl font-inter text-blue-600">State Certified</div>
              <p className="text-base text-gray-600 mt-1 font-inter font-normal">Building, plumbing, and air conditioning</p>
            </div>
          </div>
        </section>
        </section>
    );
}
