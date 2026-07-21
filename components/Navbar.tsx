"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  // Helper function to close the menu when a link is clicked
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  // Service Links Array
  const services = [
    { name: 'General Pediatric Consultation', href: 'https://drshettyschildrensclinic.com/general-pediatric-consultation/' },
    { name: 'Vaccination & Immunization', href: 'https://drshettyschildrensclinic.com/vaccination-immunization/' },
    { name: 'Newborn & Infant Care', href: 'https://drshettyschildrensclinic.com/newborn-infant-care/' },
    { name: 'Developmental Screening', href: 'https://drshettyschildrensclinic.com/developmental-screening/' },
    { name: 'Baby Feeding Consultation', href: 'https://drshettyschildrensclinic.com/baby-feeding-consultation/' },
    { name: 'Fever in children', href: 'https://drshettyschildrensclinic.com/fever-in-children/' },
    { name: 'Diarrhea Treatment', href: 'https://drshettyschildrensclinic.com/diarrhea-in-children/' },
    { name: 'Wheezing & Asthma Care', href: 'https://drshettyschildrensclinic.com/wheezing-asthma-care/' },
    { name: 'Adolescent Health', href: 'https://drshettyschildrensclinic.com/adolescent-health/' },
    { name: 'School Health Checkups', href: 'https://drshettyschildrensclinic.com/school-health-checkups/' },
    { name: 'Sports Fitness Checkups', href: 'https://drshettyschildrensclinic.com/sports-fitness-checkups/' },
  ];

  return (
    <>
      <nav className="w-full bg-[#f8fafc] sm:bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo Area */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="https://drshettyschildrensclinic.com/" onClick={closeMenu}>
                <div className="relative w-48 h-16">
                   <Image 
                     src="/logo.png" 
                     alt="Dr Shetty's Clinic Logo" 
                     fill 
                     className="object-contain object-left" 
                     priority 
                   />
                </div>
              </Link>
            </div>

            {/* Desktop Center Links */}
            <div className="hidden md:flex space-x-8 items-center h-full">
              <Link href="https://drshettyschildrensclinic.com/" className="text-[#009ffa] font-medium text-lg h-full flex items-center">
                Home
              </Link>
              <Link href="https://drshettyschildrensclinic.com/about-us/" className="text-gray-800 hover:text-[#009ffa] font-medium text-lg transition-colors h-full flex items-center">
                About Us
              </Link>
              
              {/* Dropdown for Our Services */}
              <div className="relative group h-full flex items-center">
                <Link 
                  href="https://drshettyschildrensclinic.com/explore-pediatric-services-including-vaccinations-newborn-care-developmental-screening-fever-treatment-nutrition-guidance-and-routine-child-health-checkups/" 
                  className="text-[#009ffa] font-medium text-lg transition-colors flex items-center gap-1"
                >
                  Our Services
                  <svg className="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>

                <div className="absolute top-full left-0 w-[280px] bg-white shadow-lg border border-gray-100 rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-2">
                  {services.map((service, index) => (
                    <Link 
                      key={index}
                      href={service.href}
                      className="block px-6 py-2.5 text-gray-700 hover:text-[#009ffa] hover:bg-blue-50/50 text-[15px] transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="https://drshettyschildrensclinic.com/gallery/" className="text-gray-800 hover:text-[#009ffa] font-medium text-lg transition-colors h-full flex items-center">
                Gallery
              </Link>
              <Link href="https://book.drshettyschildrensclinic.com/" className="text-gray-800 hover:text-[#009ffa] font-medium text-lg transition-colors h-full flex items-center">
                Book Appointment
              </Link>
            </div>

            {/* Desktop Contact Button & Divider */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="h-10 w-px bg-gray-200"></div>
              <a 
                href="https://wa.me/917019951526" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#009ffa] hover:bg-[#008be0] text-white px-5 py-2.5 rounded-full font-semibold transition-colors flex items-center gap-2 text-sm sm:text-base shadow-md"
              >
                Contact Us
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
            </div>

            {/* Mobile Hamburger Icon */}
            <div className="md:hidden flex items-center pr-2">
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-gray-900 focus:outline-none"
                aria-label="Open menu"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Full-Screen Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-[100] flex flex-col md:hidden overflow-y-auto">
          
          {/* Top Bar with Close Icon */}
          <div className="flex justify-end items-center h-20 px-6 shrink-0 border-b border-gray-100">
            <button 
              onClick={closeMenu} 
              className="text-gray-900 focus:outline-none"
              aria-label="Close menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Links Container */}
          <div className="flex flex-col w-full text-[17px] font-normal text-gray-800">
            <Link 
              href="https://drshettyschildrensclinic.com/" 
              onClick={closeMenu}
              className="px-6 py-4 border-b border-gray-100"
            >
              Home
            </Link>
            <Link 
              href="https://drshettyschildrensclinic.com/about-us/" 
              onClick={closeMenu}
              className="px-6 py-4 border-b border-gray-100"
            >
              About Us
            </Link>
            
            {/* Split row for Services Link & Accordion Arrow */}
            <div className="flex flex-col border-b border-gray-100">
              <div className="flex items-stretch justify-between w-full">
                <Link 
                  href="https://drshettyschildrensclinic.com/explore-pediatric-services-including-vaccinations-newborn-care-developmental-screening-fever-treatment-nutrition-guidance-and-routine-child-health-checkups/" 
                  onClick={closeMenu}
                  className="px-6 py-4 text-[#009ffa] flex-grow"
                >
                  Our Services
                </Link>
                <button 
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="w-16 flex items-center justify-center border-l border-gray-100 active:bg-gray-50 focus:outline-none"
                  aria-label="Toggle services menu"
                >
                  <svg 
                    className={`w-4 h-4 text-gray-800 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-90' : ''}`} 
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Nested Dropdown Links */}
              {isMobileServicesOpen && (
                <div className="bg-white border-t border-gray-50 flex flex-col">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      onClick={closeMenu}
                      className="px-8 py-3.5 text-[16px] text-gray-800 border-b border-gray-50 last:border-0 hover:bg-gray-50 active:bg-gray-100 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              href="https://drshettyschildrensclinic.com/gallery/" 
              onClick={closeMenu}
              className="px-6 py-4 border-b border-gray-100"
            >
              Gallery
            </Link>
            <Link 
              href="https://book.drshettyschildrensclinic.com/" 
              onClick={closeMenu}
              className="px-6 py-4 border-b border-gray-100"
            >
              Book Appointment
            </Link>
          </div>

          {/* Phone Icon Link at the bottom */}
          <div className="mt-8 px-6 pb-12">
            <a 
              href="tel:+917019951526" 
              className="w-16 h-16 bg-[#009ffa] rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95"
              aria-label="Call Clinic"
            >
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.27 1.11l-2.18 2.1z"/>
              </svg>
            </a>
          </div>
          
        </div>
      )}
    </>
  );
}