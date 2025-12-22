"use client";
import { useState, useEffect } from "react";

const RECAPTCHA_SITE_KEY = "6Le-0RosAAAAAGjYHU1IzFO_EE3uwt05kzqSrLRK"; // Replace with your site key

export default function Newcontact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Load reCAPTCHA script
  useEffect(() => {
    const scriptId = "recaptcha-v3";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
      script.id = scriptId;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "phone") {
      newValue = value.replace(/\D/g, "").slice(0, 10); // Only digits, max 10
    }

    setFormData((prev) => ({ ...prev, [name]: newValue }));

    // Live validation
    let errorMessage = "";
    if (name === "name" && !newValue.trim()) errorMessage = "Name is required";
    if (name === "email") {
      if (!newValue.trim()) errorMessage = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(newValue))
        errorMessage = "Please enter a valid email address";
    }
    if (name === "phone") {
      if (!newValue.trim()) errorMessage = "Phone is required";
      else if (newValue.length < 10) errorMessage = "Phone must be 10 digits";
    }
    if (name === "city" && !newValue.trim()) errorMessage = "City is required";

    setFormErrors((prev) => ({ ...prev, [name]: errorMessage }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setIsSubmitted(true);
debugger
    // Final validation
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.email))
      errors.email = "Please enter a valid email address";
    if (!formData.phone.trim()) errors.phone = "Phone is required";
    else if (formData.phone.length < 10) errors.phone = "Phone must be 10 digits";
    if (!formData.city.trim()) errors.city = "City is required";

    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      setLoading(false);
      setIsSubmitted(false);
      return;
    }

    try {
      // Execute reCAPTCHA
      const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: "submit" });

      // Log payload to check
      const payload = { ...formData, recaptchaToken: token };
 

      // Submit to your backend or Zoho API
      const res = await fetch("https://www.zohoapis.in/crm/v7/functions/leadcreationapi1/actions/execute?auth_type=apikey&zapikey=1003.578c95da7fc447a87b7b3bfcc672d98d.54efb85fcfaafc399e6356502991521d", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result.error || "Form submission failed");

      setFormData({ name: "", email: "", phone: "", city: "" });
      setTimeout(() => {
        window.location.href = "https://kerovit.com/";
      }, 5000); // 5000 ms = 5 seconds
    } catch (err) {
      setError(err.message);
      console.error(err);
    } finally {
      setLoading(false);
      setIsSubmitted(false);
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit} className="desctext">
        {/* Name */}
        <div className="relative mb-5">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`caption text-[#3C3C3B] w-full border-b ${
              formErrors.name ? "border-[#B00003]" : "border-[#979795]"
            } focus:border-black outline-none pt-7 pb-4 peer`}
          />
          <label className="absolute left-0 top-1/2 -translate-y-1/2 text-[#979795] transition-all duration-300 pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#979795] peer-valid:top-2 peer-valid:text-xs">
            <span className="text-[#B00003]">*</span> Full Name
          </label>
          {formErrors.name && <p className="text-[#B00003] text-sm mt-1">{formErrors.name}</p>}
        </div>

        {/* Phone & Email */}
        <div className="grid grid-cols-1 mb-5 sm:grid-cols-2 gap-4">
          <div className="relative">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="caption text-[#3C3C3B] w-full border-b border-[#979795] focus:border-black outline-none pt-7 pb-4 peer"
            />
            <label className="absolute left-0 top-1/2 -translate-y-1/2 text-[#979795] transition-all duration-300 pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#979795] peer-valid:top-2 peer-valid:text-xs">
              <span className="text-[#B00003]">*</span> 10-digit Phone
            </label>
            {formErrors.phone && <p className="text-[#B00003] text-sm mt-1">{formErrors.phone}</p>}
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`caption text-[#3C3C3B] w-full border-b ${
                formErrors.email ? "border-[#B00003]" : "border-[#979795]"
              } focus:border-black outline-none pt-7 pb-4 peer`}
            />
            <label className="absolute left-0 top-1/2 -translate-y-1/2 text-[#979795] transition-all duration-300 pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#979795] peer-valid:top-2 peer-valid:text-xs">
              <span className="text-[#B00003]">*</span> Email
            </label>
            {formErrors.email && <p className="text-[#B00003] text-sm mt-1">{formErrors.email}</p>}
          </div>
        </div>

        {/* City */}
        <div className="grid grid-cols-1 mb-5 gap-4">
          <div className="relative mb-3">
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="caption text-[#3C3C3B] w-full border-b border-[#979795] focus:border-black outline-none pt-7 pb-2 peer"
            />
            <label className="absolute left-0 top-1/2 -translate-y-1/2 text-[#979795] transition-all duration-300 pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#979795] peer-valid:top-2 peer-valid:text-xs">
              <span className="text-[#B00003]">*</span> City
            </label>
            {formErrors.city && <p className="text-[#B00003] text-sm mt-1">{formErrors.city}</p>}
          </div>
        </div>

        {error && <p className="text-[#B00003] text-sm mb-4">{error}</p>}

        <button className="button1" disabled={loading || isSubmitted}>
          <span className="btn-text">{loading ? "Submitting..." : "Book"}</span>
        </button>
      </form>
    </section>
  );
}
