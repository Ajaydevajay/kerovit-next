"use client";
import { useState } from "react";
import style from "./Newcontact.module.css";
export default function Newcontact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // TODO: Add form submission logic here
  };

  return (
    <section>
      <div className=" gap-16 sm:gap-12 ">
        {/* RIGHT SIDE - FORM */}
        <div className=" w-full ">
          <form onSubmit={handleSubmit} className=" desctext">
            <div className="relative mb-[20px]">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="caption text-[#3C3C3B]
      w-full border-b border-[#979795] focus:border-[black] outline-none pt-7 pb-2
      peer
    "
              />

              <label
                className="
      absolute left-0 top-1/2 -translate-y-1/2
      text-[#979795] transition-all duration-300 pointer-events-none
      peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#979795]
      peer-valid:top-2 peer-valid:text-xs
    "
              >
                <span className="text-[#B00003]">*</span> Full Name
              </label>
            </div>

            <div className="grid grid-cols-1 mb-[20px] sm:grid-cols-2 gap-4">
              <div className=" relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="caption  text-[#3C3C3B] w-full border-b border-[#979795] focus:border-black outline-none pt-7 pb-4 peer"
                  required
                />
                <label
                  className="
      absolute left-0 top-1/2 -translate-y-1/2
      text-[#979795] transition-all duration-300 pointer-events-none
      peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#979795]
      peer-valid:top-2 peer-valid:text-xs
    "
                >
                  <span className="text-[#B00003]">*</span>10-digit Phone
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder=" " /* 👈 important */
                  className="caption  text-[#3C3C3B]
      w-full border-b border-[#979795] focus:border-black outline-none
      pt-7 pb-4 peer
    "
                />

                <label
                  className="
      absolute left-0 top-1/2 -translate-y-1/2 text-[#979795]
      transition-all duration-300 pointer-events-none
 
      /* When input is focused */
      peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#979795]
 
      /* When input has NO value (placeholder shown) */
      peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base
 
      /* When input has value (label stays up) */
      peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs
    "
                >
                  <span className="text-[#B00003]">*</span> Email
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 mb-[20px]  gap-4">
              <div className="relative mb-3">
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="caption text-[#3C3C3B]
      w-full border-b border-[#979795] focus:border-[black] outline-none pt-7 pb-2
      peer
    "
                />

                <label
                  className="
      absolute left-0 top-1/2 -translate-y-1/2
      text-[#979795] transition-all duration-300 pointer-events-none
      peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#979795]
      peer-valid:top-2 peer-valid:text-xs
    "
                >
                  <span className="text-[#B00003]">*</span> City
                </label>
              </div>
            </div>

            <p className="bottom-text-design mt-[32px] mb-[16px]">
              By submitting this form, you agree to be contacted by our team
              regarding your inquiry and the next steps.
            </p>

            <button className="button1 ">
              <span className="btn-text">Book</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
