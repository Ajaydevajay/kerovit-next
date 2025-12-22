"use client";
import { useState, useEffect } from "react";

const RECAPTCHA_SITE_KEY = "6Le-0RosAAAAAGjYHU1IzFO_EE3uwt05kzqSrLRK";

export default function Newcontact() {
  const [formData, setFormData] = useState({
    leadSource: "Website",
    landingPage: "kolkata",
    fullName: "",
    email: "",
    mobile: "",
    city: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "mobile") {
      newValue = value.replace(/\D/g, "").slice(0, 10);
    }

    setFormData((prev) => ({ ...prev, [name]: newValue }));

    let errorMessage = "";
    if (name === "fullName" && !newValue.trim()) errorMessage = "Name is required";
    if (name === "email") {
      if (!newValue.trim()) errorMessage = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(newValue))
        errorMessage = "Please enter a valid email address";
    }
    if (name === "mobile") {
      if (!newValue.trim()) errorMessage = "Mobile is required";
      else if (newValue.length < 10) errorMessage = "Mobile must be 10 digits";
    }
    if (name === "city" && !newValue.trim()) errorMessage = "City is required";

    setFormErrors((prev) => ({ ...prev, [name]: errorMessage }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setIsSubmitted(true);

    // Final validation
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.email))
      errors.email = "Please enter a valid email address";
    if (!formData.mobile.trim()) errors.mobile = "Mobile is required";
    else if (formData.mobile.length < 10) errors.mobile = "Mobile must be 10 digits";
    if (!formData.city.trim()) errors.city = "City is required";

    setFormErrors(errors);
    if (Object.keys(errors).length > 0) {
      setLoading(false);
      setIsSubmitted(false);
      return;
    }

    try {
      // Get reCAPTCHA token
      const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: "submit" });

      // Send form + token to your backend API
      const res = await fetch("/api/zoho/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, recaptchaToken: token }),
      });
      

      if (!res.ok) {
        const result = await res.json();
        throw new Error(result.error || "Form submission failed");
      }

      setFormData({
        leadSource: "Website",
        landingPage: "kolkata",
        fullName: "",
        email: "",
        mobile: "",
        city: "",
      });

      setTimeout(() => {
        window.location.href = "https://kerovit.com/";
      }, 5000);
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
        {/* Full Name */}
        <div className="relative mb-5">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={`caption w-full border-b ${formErrors.fullName ? "border-red-600" : "border-gray-400"} pt-7 pb-4 peer`}
          />
          <label className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-400 peer-valid:top-2 peer-valid:text-xs">
            <span className="text-red-600">*</span> Full Name
          </label>
          {formErrors.fullName && <p className="text-red-600 text-sm mt-1">{formErrors.fullName}</p>}
        </div>

        {/* Mobile & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
          <div className="relative">
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="caption w-full border-b border-gray-400 pt-7 pb-4 peer"
            />
            <label className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-400 peer-valid:top-2 peer-valid:text-xs">
              <span className="text-red-600">*</span> Mobile
            </label>
            {formErrors.mobile && <p className="text-red-600 text-sm mt-1">{formErrors.mobile}</p>}
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="caption  text-[#3C3C3B]
              w-full border-b border-[#979795] focus:border-black outline-none
              pt-7 pb-4 peer"
            />
            <label className="absolute left-0 top-1/2 -translate-y-1/2 text-[#979795]
      transition-all duration-300 pointer-events-none
 
      /* When input is focused */
      peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#979795]
 
      /* When input has NO value (placeholder shown) */
      peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base
 
      /* When input has value (label stays up) */
      peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs">
              <span className="text-red-600">*</span> Email
            </label>
            {formErrors.email && <p className="text-red-600 text-sm mt-1">{formErrors.email}</p>}
          </div>
        </div>

        {/* City */}
        <div className="relative mb-5">
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="caption w-full border-b border-gray-400 pt-7 pb-2 peer"
          />
          <label className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-400 peer-valid:top-2 peer-valid:text-xs">
            <span className="text-red-600">*</span> City
          </label>
          {formErrors.city && <p className="text-red-600 text-sm mt-1">{formErrors.city}</p>}
        </div>

        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

        <button className="button1" disabled={loading || isSubmitted}>
          {loading ? "Submitting..." : "Book"}
        </button>
      </form>
    </section>
  );
}
