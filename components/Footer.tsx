"use client";
import React from 'react';

export default function Footer() {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=917019951526&text=Hello%20Doctor,%20I%20would%20like%20to%20book%20an%20appointment.&type=phone_number&app_absent=0";
  const mapsLink = "https://www.google.com/maps?q=Dr.+Shetty's+Children's+Clinic,+HSR+Layout,+Bengaluru&output=embed";
  const emailAddress = "drshettyschildrensclinic@gmail.com";
  const phoneNumber = "+917019951526";

  return (
    <footer className="bg-[#001321] text-white pt-16 pb-8 px-6 lg:px-12 font-sans border-t-[6px] border-[#009ffa]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
        
        {/* Column 1 */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold leading-tight relative pb-3">
            Your Child's <span className="text-[#009ffa]">Health</span><br/>Matters
            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#009ffa] rounded-full"></span>
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed pt-2">
            Compassionate pediatric care for newborns, infants, children, and adolescents. We are committed to providing expert medical care in a warm, child-friendly environment.
          </p>
          <div className="flex items-center space-x-3 text-sm font-semibold">
            <span className="text-[#009ffa]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
            </span>
            <a href={`tel:${phoneNumber}`} className="hover:text-[#009ffa] transition-colors">+91 70199 51526</a>
          </div>
          <div className="flex items-center space-x-3 text-sm font-semibold pb-2">
            <span className="text-[#009ffa]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </span>
            <span>Mon – Sat: 6:00 PM – 10:00 PM (Sun: Closed)</span>
          </div>
          <a 
            href={whatsappLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-[#009ffa] hover:bg-[#008be0] text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-colors shadow-md"
          >
            Book Appointment
          </a>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-lg font-bold relative pb-3 mb-4">
            Quick Links
            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#009ffa] rounded-full"></span>
          </h3>
          
          <div className="grid grid-cols-2 gap-y-5 gap-x-6 text-sm text-gray-300 items-start pt-2">
            <a href="https://drshettyschildrensclinic.com/" className="hover:text-[#009ffa] flex items-center transition-colors font-medium">
              <span className="text-gray-500 text-[10px] mr-2">▶</span> Home
            </a>
            <a href="https://drshettyschildrensclinic.com/general-pediatric-consultation/" className="hover:text-[#009ffa] flex items-start transition-colors font-medium">
              <span className="text-gray-500 text-[10px] mr-2 mt-1">▶</span> General Pediatric Consultation
            </a>
            <a href="https://drshettyschildrensclinic.com/vaccination-immunization/" className="hover:text-[#009ffa] flex items-start transition-colors font-medium">
              <span className="text-gray-500 text-[10px] mr-2 mt-1">▶</span> Vaccination & Immunization
            </a>
            <a href="https://drshettyschildrensclinic.com/newborn-infant-care/" className="hover:text-[#009ffa] flex items-start transition-colors font-medium">
              <span className="text-gray-500 text-[10px] mr-2 mt-1">▶</span> Newborn & Infant Care
            </a>
            <a href="https://drshettyschildrensclinic.com/developmental-screening/" className="hover:text-[#009ffa] flex items-start transition-colors font-medium">
              <span className="text-gray-500 text-[10px] mr-2 mt-1">▶</span> Developmental Screening
            </a>
            <a href="https://drshettyschildrensclinic.com/baby-feeding-consultation/" className="hover:text-[#009ffa] flex items-start transition-colors font-medium">
              <span className="text-gray-500 text-[10px] mr-2 mt-1">▶</span> Baby Feeding Consultation
            </a>
            <a href="https://drshettyschildrensclinic.com/wheezing-asthma-care/" className="hover:text-[#009ffa] flex items-start transition-colors font-medium">
              <span className="text-gray-500 text-[10px] mr-2 mt-1">▶</span> Wheezing & Asthma Care
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-[#009ffa] flex items-start transition-colors font-medium">
              <span className="text-gray-500 text-[10px] mr-2 mt-1">▶</span> Book Appointment
            </a>
          </div>
        </div>

        {/* Column 3 - Reach Out */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold relative pb-3 mb-4">
            Reach Out
            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#009ffa] rounded-full"></span>
          </h3>
          
          <div className="pt-2">
            <p className="text-gray-400 text-xs mb-0.5">Email</p>
            <a href={`mailto:${emailAddress}`} className="text-sm font-semibold break-words hover:text-[#009ffa] transition-colors">
              {emailAddress}
            </a>
          </div>
          
          <div>
            <p className="text-gray-400 text-xs mb-0.5">Phone</p>
            <a href={`tel:${phoneNumber}`} className="text-sm font-semibold hover:text-[#009ffa] transition-colors">
              +91 70199 51526
            </a>
          </div>
          
          <div>
            <p className="text-gray-400 text-xs mb-0.5">Address</p>
            <a 
              href={mapsLink}
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm font-semibold leading-relaxed hover:text-[#009ffa] transition-colors block"
            >
              Dr. Shetty's Children's Clinic<br/>
              529, 15th Cross Rd,<br/>
              Sector 4, HSR Layout,<br/>
              Bengaluru, Karnataka 560102
            </a>
          </div>

          <div className="pt-2">
            <div className="flex items-center space-x-2">
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/dr.shettyschildrensclinic?igsh=MTVpaTBweG8xazg3ZA==" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 hover:bg-[#009ffa] transition-colors"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.169a1.44 1.44 0 11-2.879 0 1.44 1.44 0 012.878 0z"/></svg>
              </a>

              {/* Phone */}
              <a 
                href={`tel:${phoneNumber}`} 
                aria-label="Call Clinic"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 hover:bg-[#009ffa] transition-colors"
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              </a>

              {/* WhatsApp */}
              <a 
                href={whatsappLink}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 hover:bg-[#009ffa] transition-colors"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.517 2.266 2.27 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.734-1.453L0 24zm6.59-4.846c1.657.983 3.283 1.498 4.884 1.5l.562-.003c5.388 0 9.773-4.385 9.776-9.774.002-2.611-1.015-5.066-2.86-6.914C17.11 2.112 14.659.97 12.008.969c-5.39 0-9.778 4.386-9.782 9.776-.001 1.777.49 3.505 1.424 5.008l-.936 3.42 3.533-.927z"/></svg>
              </a>

              {/* Email */}
              <a 
                href={`mailto:${emailAddress}`} 
                aria-label="Email"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 hover:bg-[#009ffa] transition-colors"
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </a>

              {/* Location */}
              <a 
                href={mapsLink}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Location"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 hover:bg-[#009ffa] transition-colors"
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Column 4 - Need Pediatric Advice & Map */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-bold relative pb-3">
            Need Pediatric Advice?
            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#009ffa] rounded-full"></span>
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed pt-2">
            Have questions about your child's health? Contact Dr. Shetty's Children's Clinic to schedule an appointment or speak with our team.
          </p>
          
          {/* Embedded Interactive Map Container */}
          <div className="w-full pt-1">
            <iframe
              src="https://www.google.com/maps?q=Dr.+Shetty's+Children's+Clinic,+HSR+Layout,+Bengaluru&output=embed"
              width="100%"
              height="220"
              style={{ border: 0, borderRadius: '10px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <a 
            href={mapsLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full text-center bg-[#009ffa] hover:bg-[#008be0] text-white py-3 rounded-full font-semibold text-sm transition-colors shadow-md mt-2"
          >
            Find Us on Google Maps
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-6 border-t border-gray-800 text-center text-xs text-gray-400 flex flex-col items-center justify-center relative">
        <p>Copyright © 2026 Dr Shettys Childrens Clinic | Powered by Desert Themes</p>
        
        {/* Back to top button */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="absolute right-0 bg-[#009ffa] p-2.5 rounded-full text-white hover:bg-[#008be0] transition-colors shadow-md"
          aria-label="Scroll to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </button>
      </div>
    </footer>
  );
}