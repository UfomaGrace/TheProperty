import React from 'react'
import { BsInfoCircle, BsDot, BsBell, BsEnvelope } from "react-icons/bs";
import { RxExclamationTriangle } from "react-icons/rx";
import { LuCircleX } from "react-icons/lu";
import { Link } from "react-router-dom";


export default function Terms() {
  return (
    <div className='py-24'>
        
      <div className="text-center mt-20 md:mt-10">
        <h1 className="md:text-5xl text-4xl text-center items-center font-semibold text-gray-800">Terms</h1>
        <p className="md:mt-8 mt-6 text-center text-base justify-center md:mx-30 mx-6 md:px-38 px-4 text-gray-700">
          Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas 
          consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. 
          Quasi ratione sint. Sit quaerat ipsum dolorem.
        </p>
      </div>

        <div className="w-full mt-14">
            <nav className="flex items-center bg-gray-200 px-3 py-5 max-w-full">
                <ol className="inline-flex md:items-center items-start space-x-1 md:space-x-4 md:mx-18 mx-0">
                    <li>
                        <Link to="/" className="text-[#2c7a7b]">
                            Home
                        </Link>
                    </li>

                    <li>
                        <span>/</span>
                    </li>

                    <li aria-current="page" className="text-gray-800">
                        Terms
                    </li>
                </ol>
            </nav>
        </div>

        <div className='mt-12 text-center justify-center items-center flex flex-col'>
            <div className='rounded-full px-4 py-2 bg-[#2a7c7b1f] text-[#2a7c7b] w-fit mb-3'>
                <p className='text-sm'>
                    Last Updated: February 27, 2025
                </p>
            </div>
            <h3 className='text-4xl font-semibold mb-2'>Terms of Service</h3>
            <p className='text-[#323b3bb3] text-lg mb-2'>
                Please read these terms of service carefully before using our services
            </p>
        </div>

        <div className='px-18 py-12'>

            {/* Terms 1 */}
            <div className='mt-4'>
                <h3 className='text-3xl mb-4'>1. Agreement to Terms</h3>
                <p className='text-[#323b3bcc] leading-relaxed'>
                    By accessing our website and services, you agree to be bound by these Terms of Service and all applicable 
                    laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
                </p>
                <div className='flex gap-2 bg-[#2c7a7b0d] rounded-2xl px-8 py-6 mt-5'>
                    <span className='transition-transform translate-y-0.5 text-[#2a7c7b] text-2xl'><BsInfoCircle /></span>
                    <p className='text-[#323b3bcc]'>
                        These terms apply to all users, visitors, and others who access or use our services.
                    </p>
                </div>
            </div>

            {/* Terms 2 */}
            <div className='mt-14'>
                <h3 className='text-3xl mb-4'>2. Intellectual Property Rights</h3>
                <p className='text-[#323b3bcc] leading-relaxed'>
                    Our service and its original content, features, and functionality are owned by us and are protected by international copyright, 
                    trademark, patent, trade secret, and other intellectual property laws.
                </p>
                <ul className='mt-4 space-y-2'>
                    <li className='flex gap-4'>
                        <span className='transition-transform  text-3xl text-[#2c7a7b]'><BsDot /></span>
                        <p className='text-[#323b3bcc]'>All content is our exclusive property</p>
                    </li>
                    <li className='flex gap-4'>
                        <span className='transition-transform  text-3xl text-[#2c7a7b]'><BsDot /></span>
                        <p className='text-[#323b3bcc]'>You may not copy or modify the content</p>
                    </li>
                    <li className='flex gap-4'>
                        <span className='transition-transform  text-3xl text-[#2c7a7b]'><BsDot /></span>
                        <p className='text-[#323b3bcc]'>Our trademarks may not be used without permission</p>
                    </li>
                    <li className='flex gap-4'>
                        <span className='transition-transform  text-3xl text-[#2c7a7b]'><BsDot /></span>
                        <p className='text-[#323b3bcc]'>Content is for personal, non-commercial use only</p>
                    </li>
                </ul>
            </div>

            {/* Terms 3 */}
            <div className='mt-14'>
                <h3 className='text-3xl mb-4'>3. User Accounts</h3>
                <p className='text-[#323b3bcc] leading-relaxed'>
                    When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms, 
                    which may result in immediate termination of your account.
                </p>
                <div className='flex gap-6 border-l-4 border-[#2c7a7b] rounded-2xl p-6 mt-4'>
                    <span className='text-3xl text-[#2c7a7b] transition-transform translate-y-3.5'>
                        <RxExclamationTriangle />
                    </span>
                    <div>
                        <p className='mb-2 text-lg text-[#163535]'>Important Notice</p>
                        <p className='text-[#323b3bcc] leading-relaxed'>You are responsible for safeguarding the password and for all activities that occur under your account.</p>
                    </div>
                </div>
            </div>

            {/* Terms 4 */}
            <div className='mt-14'>
                <h3 className='text-3xl mb-4'>4. Prohibited Activities</h3>
                <p className='text-[#323b3bcc] leading-relaxed'>
                    You may not access or use the Service for any purpose other than that for which we make it available.
                </p>
                <div className='mt-8 space-y-10 grid grid-cols-2 pl-4'>
                    <div className='flex gap-3'>
                        <span className='text-red-400 text-2xl'><LuCircleX /></span>
                        <p className='text-[#323b3bcc] leading-relaxed'>Systematic retrieval of data or content</p>
                    </div>
                    <div className='flex gap-3'>
                        <span className='text-red-400 text-2xl'><LuCircleX /></span>
                        <p className='text-[#323b3bcc] leading-relaxed'>Engaging in unauthorized framing</p>
                    </div>
                    <div className='flex gap-3'>
                        <span className='text-red-400 text-2xl'><LuCircleX /></span>
                        <p className='text-[#323b3bcc] leading-relaxed'>Publishing malicious content</p>
                    </div>
                    <div className='flex gap-3'>
                        <span className='text-red-400 text-2xl'><LuCircleX /></span>
                        <p className='text-[#323b3bcc] leading-relaxed'>Attempting to gain unauthorized access</p>
                    </div>
                </div>
            </div>

            {/* Terms 5 */}
            <div className='mt-14'>
                <h3 className='text-3xl mb-4'>5. Disclaimers</h3>
                <p className='text-[#323b3bcc] leading-relaxed'>
                    Your use of our service is at your sole risk. The service is provided "AS IS" 
                    and "AS AVAILABLE" without warranties of any kind, whether express or implied.
                </p>
                <div className='mt-8 pl-4'>
                    <p className='font-medium text-[#323b3bcc] leading-relaxed mb-3.5'>
                        We do not guarantee that:
                    </p>
                    <ul className='mt-4 space-y-2'>
                        <li className='flex gap-4'>
                            <span className='transition-transform  text-3xl text-[#2c7a7b]'><BsDot /></span>
                            <p className='text-[#323b3bcc]'>The service will meet your requirements</p>
                        </li>
                        <li className='flex gap-4'>
                            <span className='transition-transform  text-3xl text-[#2c7a7b]'><BsDot /></span>
                            <p className='text-[#323b3bcc]'>The service will be uninterrupted or error-free</p>
                        </li>
                        <li className='flex gap-4'>
                            <span className='transition-transform  text-3xl text-[#2c7a7b]'><BsDot /></span>
                            <p className='text-[#323b3bcc]'>Results from using the service will be accurate</p>
                        </li>
                        <li className='flex gap-4'>
                            <span className='transition-transform  text-3xl text-[#2c7a7b]'><BsDot /></span>
                            <p className='text-[#323b3bcc]'>Any errors will be corrected</p>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Terms 6 */}
            <div className='mt-14'>
                <h3 className='text-3xl mb-4'>6. Limitation of Liability</h3>
                <p className='text-[#323b3bcc] leading-relaxed'>
                    In no event shall we be liable for any indirect, punitive, incidental, special, consequential, or 
                    exemplary damages arising out of or in connection with your use of the service.
                </p>
            </div>

            {/* Terms 7 */}
            <div className='mt-14'>
                <h3 className='text-3xl mb-4'>7. Indemnification</h3>
                <p className='text-[#323b3bcc] leading-relaxed'>
                    You agree to defend, indemnify, and hold us harmless from and against any claims, 
                    liabilities, damages, losses, and expenses arising out of your use of the service.
                </p>
            </div>

            {/* Terms 8 */}
            <div className='mt-14'>
                <h3 className='text-3xl mb-4'>8. Termination</h3>
                <p className='text-[#323b3bcc] leading-relaxed'>
                    We may terminate or suspend your account immediately, without prior notice or liability, 
                    for any reason whatsoever, including without limitation if you breach the Terms.
                </p>
            </div>

            {/* Terms 9 */}
            <div className='mt-14'>
                <h3 className='text-3xl mb-4'>9. Governing Law</h3>
                <p className='text-[#323b3bcc] leading-relaxed'>
                    These Terms shall be governed by and construed in accordance with the laws 
                    of [Your Country], without regard to its conflict of law provisions.
                </p>
            </div>

            {/* Terms 10 */}
            <div className='mt-14'>
                <h3 className='text-3xl mb-4'>10. Changes to Terms</h3>
                <p className='text-[#323b3bcc] leading-relaxed'>
                    We reserve the right to modify or replace these Terms at any time. 
                    We will provide notice of any changes by posting the new Terms on this page.
                </p>
                <div className='flex gap-4 bg-[#2c7a7b0d] rounded-2xl px-8 py-6 mt-5'>
                    <span className='transition-transform translate-y-0.5 text-[#2a7c7b] text-2xl'><BsBell /></span>
                    <p className='text-[#323b3bcc] leading-relaxed'>
                        By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms.
                    </p>
                </div>
            </div>

            <div className='flex gap-8 bg-[#2c7a7b0d] rounded-2xl px-8 py-10 mt-16'>
                <div className='inline-block w-fit h-fit rounded-2xl bg-[#2c7a7b] p-5 text-white text-3xl transition-transform translate-y-8'>
                    <BsEnvelope/>
                </div>
                <div>
                    <h4 className='text-[#163535] font-medium mb-2 text-2xl leading-relaxed'>Questions About Terms?</h4>
                    <p className='text-[#323b3bcc] leading-relaxed mb-4'>If you have any questions about these Terms, please contact us.</p>
                    <a href="/contact" className='inline-block rounded-full bg-[#2c7a7b] px-6 py-3 text-white font-semibold w-fit transition-transform hover:-translate-y-1 duration-300 ease-in-out hover:shadow-lg hover:shadow-[#2c7a7b2a]'>
                        Contact Support
                    </a>
                </div>
            </div>
        </div>
    
    </div>
  )
}
