"use client";
import React from 'react';

export default function Footer() {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=917019951526&text=Hello%20Doctor,%20I%20would%20like%20to%20book%20an%20appointment.&type=phone_number&app_absent=0";

  return (
    <footer className="bg-[#001321] text-white pt-16 pb-8 px-6 lg:px-12 font-sans border-t-[6px] border-[#009ffa]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
        
        {/* Column 1 */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold leading-tight">Your Child's <span className="text-[#009ffa]">Health</span><br/>Matters</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Compassionate pediatric care for newborns, infants, children, and adolescents. We are committed to providing expert medical care in a warm, child-friendly environment.
          </p>
          <div className="flex items-center space-x-3 text-sm font-semibold">
            <span className="text-[#009ffa]"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></span>
            <a href="tel:+917019951526" className="hover:text-[#009ffa] transition-colors">+91 70199 51526</a>
          </div>
          <div className="flex items-center space-x-3 text-sm font-semibold pb-2">
            <span className="text-[#009ffa]"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></span>
            <span>Daily: 6:00 PM – 10:00 PM</span>
          </div>
          <a 
            href={whatsappLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-[#009ffa] hover:bg-[#008be0] text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-colors"
          >
            Book Appointment
          </a>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-bold mb-6 inline-block border-b-2 border-[#009ffa] pb-1">Quick Links</h3>
          <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm text-gray-300">
            <a href="https://drshettyschildrensclinic.com/" className="hover:text-[#009ffa] flex items-center transition-colors">
              <span className="text-[#009ffa] mr-2">▸</span> Home
            </a>
            <a href="https://drshettyschildrensclinic.com/#dt_information" className="hover:text-[#009ffa] flex items-center transition-colors">
              <span className="text-[#009ffa] mr-2">▸</span> Information
            </a>
            <a href="https://drshettyschildrensclinic.com/#dt_choose" className="hover:text-[#009ffa] flex items-center transition-colors">
              <span className="text-[#009ffa] mr-2">▸</span> Why Choose Us
            </a>
            <a href="https://drshettyschildrensclinic.com/#dt_service" className="hover:text-[#009ffa] flex items-center transition-colors">
              <span className="text-[#009ffa] mr-2">▸</span> Services
            </a>
            <a href="https://drshettyschildrensclinic.com/#dt_faq" className="hover:text-[#009ffa] flex items-center transition-colors">
              <span className="text-[#009ffa] mr-2">▸</span> FAQs
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-[#009ffa] flex items-center transition-colors">
              <span className="text-[#009ffa] mr-2">▸</span> Book Appointment
            </a>
          </div>
        </div>

        {/* Column 3 */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold mb-6 inline-block border-b-2 border-[#009ffa] pb-1">Reach Out</h3>
          
          <div>
            <p className="text-gray-400 text-xs mb-1">Email</p>
            <a href="mailto:DrshettyschildrensClinic@gmail.com" className="text-sm font-semibold break-words hover:text-[#009ffa] transition-colors">
              DrshettyschildrensClinic@gmail.com
            </a>
          </div>
          
          <div>
            <p className="text-gray-400 text-xs mb-1">Phone</p>
            <a href="tel:+917019951526" className="text-sm font-semibold hover:text-[#009ffa] transition-colors">
              +91 70199 51526
            </a>
          </div>
          
          <div>
            <p className="text-gray-400 text-xs mb-1">Address</p>
            <p className="text-sm font-semibold leading-relaxed">
              Dr. Shetty's Children's Clinic<br/>
              529, 15th Cross Rd,<br/>
              Sector 4, HSR Layout,<br/>
              Bengaluru, Karnataka 560102
            </p>
          </div>

          <div>
            <p className="text-gray-400 text-xs mb-2 mt-2">Follow Us</p>
            <a 
              href="https://www.instagram.com/dr.shettyschildrensclinic?igsh=MTVpaTBweG8xazg3ZA==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 hover:bg-[#009ffa] transition-colors"
            >
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.169a1.44 1.44 0 11-2.879 0 1.44 1.44 0 012.878 0z"/></svg>
            </a>
          </div>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-lg font-bold mb-6 inline-block border-b-2 border-[#009ffa] pb-1">Need Pediatric Advice?</h3>
          <p className="text-sm text-gray-300 leading-relaxed mb-6">
            Have questions about your child's health? Contact Dr. Shetty's Children's Clinic to schedule an appointment or speak with our team.
          </p>
          <a 
            href={whatsappLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-[#009ffa] hover:bg-[#008be0] text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-colors"
          >
            Book Appointment
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-6 border-t border-gray-800 text-center text-xs text-gray-400 flex flex-col items-center justify-center relative">
        <p>Copyright © 2026 Dr Shettys Childrens Clinic | Powered by Desert Themes</p>
        
        {/* Back to top button */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="absolute right-0 bg-[#009ffa] p-2 rounded-full text-white hover:bg-[#008be0] transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
        </button>
      </div>
    </footer>
  );
}