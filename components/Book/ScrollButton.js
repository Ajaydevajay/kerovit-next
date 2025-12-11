"use client";

export default function ScrollButton() {
  const handleScroll = () => {
    document.getElementById("book_tour_section")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <button className="button1 mt-[40px]" onClick={handleScroll}>
      <span className="btn-text">Book a Tour</span>
    </button>
  );
}
