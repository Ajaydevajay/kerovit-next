import HomeImageslider from "@/components/HomeImageSlider/HomeImageSlider";
import SecondSectionSlider from "@/components/HomeImageSlider/SecondSectionSlider/SecondSectionSlider";
import Image from "next/image";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <header className="flex items-center justify-between px-[24px] md:px-[64px] py-[26px] border-b border-gray-200">
        <div className="flex items-center">
          <img src="./Group.png" alt="Logo" />
        </div>
      </header>
      <section className="flex flex-col items-center justify-center text-center py-[64px] md:py-[124px] px-4">
        <h1 className="section_1_header">Kerovit Experience Center, Bhiwadi</h1>
        <p className="section_1_description">Open Today: 10:00 AM to 7:00 PM</p>
        <div className="button1 mt-[40px]">
          <span className="btn-text">Book a Tour</span>
        </div>
      </section>

      <HomeImageslider />
      <section className="mx-auto py-[124px] px-[64px] flex flex-col md:flex-row justify-between gap-12">
        <div className="md:w-2/3">
          <h2 className="section_3_header">We're Here When You Are</h2>
          <p className="section_3_description">
            All our Experience Centers are open 7 days a week, from 10:00 AM to
            6:00 PM. Whether you're starting your research or finalizing
            decisions, visit us on your schedule. Our team is ready to guide you
            through our collections, share expert insights, and help you
            visualize your perfect bathroom. We're here to help whenever you
            visit.
          </p>
          <p className="section_3_description mt-[16px]">
            Discover the new Roca Showroom in Jakarta. Roca Experience Center
            Indonesia is the new center of innovative bathroom concepts and
            bathroom inspiration. The Roca Experience Center features various
            types of complete bathroom products that prioritize design, comfort,
            functionality, and sustainable solutions.
          </p>
          <button className="button1 mt-[24px]">Book a Tour</button>
        </div>

        <div className="md:w-1/2 space-y-8">
          <div className="flex md:justify-end">
            <div>
              <h3 className="section_3_subheading mb-[32px]">Details</h3>
              <div className="text-gray-700">
                <div>
                  <h4 className="label_heading">Contact</h4>
                  <p className="label_discription mt-[8px]">+91 999 9999 991</p>
                </div>
                <div className="mt-[32px]">
                  <h4 className="label_heading">Address</h4>
                  <p className="label_discription mt-[8px]">
                    Kerovit Experience Center Bhiwadi
                  </p>
                  <p className="mt-[32px]">
                    119 Third Floor, Farah Icon, Laal Bagh Main Rd,
                    <br />
                    opp. New Passport Kendra, Bhiwadi,
                    <br />
                    Rajasthan 560027
                  </p>
                </div>
                <a
                  href="#"
                  className="section_3_mapped_view flex gap-2 items-center mt-[24px]"
                >
                  Open Map
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="14"
                      viewBox="0 0 8 14"
                      fill="none"
                    >
                      <path
                        d="M0.75 0.75L6.75 6.75L0.75 12.75"
                        stroke="#003366"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SecondSectionSlider />
      <section className="mx-auto py-16 px-6 md:px-12 flex flex-col md:flex-row items-start gap-12">
        <div className="w-full md:w-1/2 space-y-8">
          <div className="md:w-[70%]">
            <h2 className="section_4_heading">Book a Tour</h2>

            <form className="space-y-6">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_name"
                  id="floating_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Full Name
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="email"
                    name="floating_email"
                    id="floating_email"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email
                  </label>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="tel"
                    name="floating_phone"
                    id="floating_phone"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_phone"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    10-digit Phone
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-600 mb-1">State</label>
                  <select className="w-full border-b text-gray-500 border-gray-300 focus:border-gray-800 outline-none py-2 bg-transparent">
                    <option value="">Select State</option>
                    <option>Rajasthan</option>
                    <option>Maharashtra</option>
                    <option>Delhi</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-600 mb-1">City</label>
                  <select className="w-full border-b text-gray-500 border-gray-300 focus:border-gray-800 outline-none py-2 bg-transparent">
                    <option value="">Select City</option>
                    <option>Jaipur</option>
                    <option>Mumbai</option>
                    <option>Delhi</option>
                  </select>
                </div>
              </div>

              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_message"
                  id="floating_message"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_message"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Message
                </label>
              </div>

              <p className="text-sm text-gray-500 leading-relaxed">
                By submitting this form you are allowing our lorem ipsum team to
                contact you. Lorem ipsum disclaimer lorem ipsum.
              </p>

              <button
                type="submit"
                className="bg-[#002A5C] text-white px-6 py-3 rounded-md hover:bg-[#003875] transition"
              >
                Send Enquiry
              </button>
            </form>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <img
            src="./assets/craft1.png"
            alt="Experience Center"
            className="w-full h-auto rounded-md shadow-sm"
          />
        </div>
      </section>

      <footer className="border-t border-[#E1E6E5] py-16 px-6 md:px-12">
        <div className="mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <img src="./assets/footer_image_1.png" alt="Logo" />
            </div>

            <div className="md:text-right">
              <p className="footer_label_first">support@kerovit.gov</p>
              <p className="footer_label_first mt-[1rem]">+91-9999999991</p>
            </div>
          </div>

          <hr className="my-6 border-[#3a7caa]" />

          <div className="flex flex-col md:flex-row justify-between md:items-center">
            <div className="visible md:hidden copyright_text">Copyright</div>
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="footer_label_second text-left md:text-center">
                Download our Customer Care App for more
              </p>
              <div className="flex gap-4 md:justify-center md:justify-start text-2xl pb-[32px] pt-[16px]">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  <img src="./assets/social-media/Frame 169.png" />
                </a>
                <a href="#" className="text-pink-600 hover:text-pink-800">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-black hover:text-gray-700">
                  <img src="./assets/social-media/Frame 170.png" />
                </a>
                <a href="#" className="text-red-600 hover:text-red-800">
                  <img src="./assets/social-media/Frame 171.png" />
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  <img src="./assets/social-media/Frame 172.png" />
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  <img src="./assets/social-media/Frame 173.png" />
                </a>
              </div>
            </div>

            <div className="text-gray-600 mb-4 md:mb-0 hidden invisible md:visible">
              <span className="">Copyright</span> © 2025 KEROVIT
            </div>

            <div className="flex gap-3">
              <a href="#">
                <img
                  src="./assets/social-media/Googleplay-icon.png"
                  alt="Google Play"
                  className="h-10"
                />
              </a>
              <a href="#">
                <img
                  src="./assets/social-media/apple-ios-icon.png"
                  alt="App Store"
                  className="h-10"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}
