import React from 'react';
import Image from 'next/image';
import BookingForm from '@/components/BookingForm';

export default function SchedulePage() {
  const staticSchedule = [
    { day: 'Monday', time: '6:00 PM – 10:00 PM' },
    { day: 'Tuesday', time: '6:00 PM – 10:00 PM' },
    { day: 'Wednesday', time: '6:00 PM – 10:00 PM' },
    { day: 'Thursday', time: '6:00 PM – 10:00 PM' },
    { day: 'Friday', time: '6:00 PM – 10:00 PM' },
    { day: 'Saturday', time: '6:00 PM – 10:00 PM' },
    { day: 'Sunday', time: 'Closed' }, // Updated to Closed
  ];

  return (
    <main className="bg-[#f3f7f9] min-h-screen pb-20 font-sans">
      
      {/* HERO SECTION with Background Image */}
      <section className="relative w-full bg-[#f3f7f9] px-4 sm:px-6 py-16 lg:py-20 flex items-center justify-center overflow-hidden border-b border-gray-200 shadow-sm">
        
        {/* Background Image - Add your bg.png to the public folder */}
        <div className="absolute inset-0 w-full h-full opacity-15 pointer-events-none mix-blend-multiply">
          <Image 
            src="/bg.png" 
            alt="Clinic Background" 
            fill
            priority
            className="object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#001321] leading-tight mb-4 tracking-tight">
            Schedule Your Visit
          </h1>
          <p className="text-[#009ffa] text-base md:text-lg font-bold leading-relaxed max-w-xl mx-auto px-2">
            Expert pediatric care is just a click away. Select a convenient date and time for your child's appointment.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start">
          
          {/* LEFT COLUMN: Location and Hours */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Location Info */}
            <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 border border-gray-100 flex items-start space-x-4">
              <div className="p-3 bg-[#e6f6ff] rounded-xl text-[#009ffa] mt-1 flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <div>
                <p className="text-lg font-black text-[#001321] mb-2">Dr Shetty's Children's Clinic</p>
                <p className="text-sm font-medium text-gray-500 leading-relaxed mb-4">
                  529, 15th Cross Rd, Sector 4,<br/>HSR Layout, Bengaluru,<br/>Karnataka 560102
                </p>
                <a 
                  href="https://maps.google.com/?q=Dr.+Shetty's+Children's+Clinic,+529,+15th+Cross+Rd,+Sector+4,+HSR+Layout,+Bengaluru,+Karnataka+560102" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm font-bold text-[#009ffa] hover:underline inline-flex items-center"
                >
                  Get Directions <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100 p-6 sm:p-8">
              <div className="mb-5 border-b-2 border-slate-50 pb-4 flex items-center space-x-3">
                <div className="p-2 bg-[#009ffa] rounded-xl text-white shadow-inner flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <h2 className="font-black text-xl text-[#001321] tracking-tight">Operating Hours</h2>
                </div>
              </div>

              <div className="space-y-3">
                {staticSchedule.map((item, idx) => {
                  const isClosed = item.time.toLowerCase() === 'closed';
                  return (
                    <div 
                      key={idx} 
                      className={`w-full flex justify-between items-center p-3 rounded-xl border-l-4 text-sm bg-slate-50 ${
                        isClosed ? 'border-gray-300 opacity-60' : 'border-[#009ffa]'
                      }`}
                    >
                      <span className={`font-bold tracking-tight ${isClosed ? 'text-gray-500' : 'text-[#001321]'}`}>
                        {item.day}
                      </span>
                      <span className={`text-xs font-bold px-2 py-1 rounded-lg bg-white shadow-sm ${
                        isClosed ? 'text-gray-500' : 'text-[#009ffa]'
                      }`}>
                        {item.time}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The Interactive Booking Form */}
          <div className="lg:col-span-7 relative z-10 pointer-events-auto">
            <div className="bg-white rounded-3xl shadow-sm p-6 sm:p-10 border border-gray-100">
              
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-black text-[#001321] tracking-tight">Request an Appointment</h3>
                <p className="text-sm font-medium text-gray-500 mt-2">Choose your preferred slot. We will confirm via email shortly.</p>
              </div>
              
              {/* Load the isolated interactive form */}
              <BookingForm />

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}