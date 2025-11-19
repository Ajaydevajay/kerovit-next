import HomeImageslider from "@/components/HomeImageSlider/HomeImageSlider";
import Newcontact from "@/components/HomeImageSlider/NewContact/NewContact";
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
      <section className="flex flex-col items-center justify-center text-center section_padding_px py-[64px] md:py-[124px] px-4">
        <h1 className="section_1_header">Kerovit Experience Center, Bhiwadi</h1>
        <p className="section_1_description">Open Today: 10:00 AM to 7:00 PM</p>
        <button className="button1 mt-[40px]">
          <span className="btn-text">Book a Tour</span>
        </button>
      </section>

      <HomeImageslider />
      <section className="mx-auto py-[124px] section_padding_px flex flex-col md:flex-row justify-between gap-12">
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
            Step into thoughtfully designed spaces that let you experience every
            product as it was meant to be—installed, illuminated, and alive
            within a real environment. Move through full bathroom setups,
            discover textures and finishes in natural light, and see how design,
            colour, and form come together. Each display helps you imagine
            possibilities for your own home, turning ideas into something you
            can feel, touch, and picture clearly. In every corner, inspiration
            finds you effortlessly.
          </p>
          <button className="button1 mt-[24px]">
            <span className="btn-text">Book a Tour</span>
          </button>
        </div>

        <div className="md:w-1/2 space-y-8">
          <div className="flex md:justify-end">
            <div>
              <h3 className="section_3_subheading mb-[32px] text-[24px]">
                Details
              </h3>
              <div className="text-[#979795]">
                <div>
                  <h4 className="label_heading">Contact</h4>
                  <p className="label_discription mt-[8px]">+91 999 9999 991</p>
                </div>
                <div className="mt-[32px]">
                  <h4 className="label_heading">Address</h4>
                  <p className="label_discription mt-[8px]">
                    Kerovit Experience Center Bhiwadi
                  </p>
                  <p className=" label_discription mt-[16px] text-[14px]">
                    119 Third Floor, Farah Icon, Laal Bagh Main Rd,
                    <br />
                    opp. New Passport Kendra, Bhiwadi,
                    <br />
                    Rajasthan 560027
                  </p>
                </div>
                <a
                  href="#"
                  className="section_3_mapped_view flex items-center gap-2 mt-[24px] group cursor-pointer"
                >
                  <span className="relative inline-block leading-none w-fit">
                    Open Map
                    <span
                      className="
        absolute left-0 bottom-[-6px] h-[1px] w-full bg-[#003366]
        origin-left scale-x-0 transition-transform duration-300 
        group-hover:scale-x-100
      "
                    />
                  </span>

                  <span className="flex items-center transition-transform duration-300 group-hover:translate-x-1">
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

      <section className="mx-auto pt-[124px] pb-[192px] section_padding_px px-6 md:px-12 flex flex-col md:flex-row items-start gap-12">
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="lg:w-[70%] ">
            <h2 className="section_4_heading mb-[32px]">Book a Tour</h2>

            <Newcontact />
          </div>
        </div>

        <div
          className="w-full md:w-1/2  hidden lg:block"
          style={{
            backgroundImage: `url(./assets/booktour.png)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            // width: "100%",
            height: "-webkit-fill-available",

            backgroundColor: "#D9D9D9",
          }}
        ></div>
      </section>

      <footer className="border-t border-[#E1E6E5] py-[80px] section_padding_px md:px-12">
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

          <hr className="my-[40px] border-[#3a7caa]" />

          <div className="flex flex-col md:flex-row justify-between">
            <div className="visible md:hidden copyright_text">Copyright</div>
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="footer_label_second text-left md:text-center">
                Download our Customer Care App for more
              </p>
              <div className="flex gap-4 md:justify-center md:justify-start text-2xl pb-[32px] pt-[16px]">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  <img src="./assets/social-media/Frame 169.png" />
                </a>

                <a href="#" className="text-black hover:text-[#979795]">
                  <img src="./assets/social-media/Frame 170.png" />
                </a>
                <a href="#" className="text-red-600 hover:text-red-800">
                  <img src="./assets/social-media/Frame 171.png" />
                </a>
                <a href="#" className="text-[#979795] hover:text-gray-900">
                  <img src="./assets/social-media/Frame 172.png" />
                </a>
                <a href="#" className="text-[#979795] hover:text-gray-900">
                  <img src="./assets/social-media/Frame 173.png" />
                </a>
              </div>
            </div>

            <div className=" mb-4 md:mb-0 hidden invisible md:visible md:block text-[14px] text-[#979795]">
              <span className="">Copyright</span> © 2025 KEROVIT
            </div>

            <div>
              <p className="footer_label_second text-left md:text-center">
                Download our Customer Care App for more
              </p>
              <div className="flex gap-3 pt-[16px]">
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
        </div>
      </footer>
    </Fragment>
  );
}
