"use client";

export default function Booktours() {
  const handleScroll = () => {
    document.getElementById("book_tours")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <button className="button1 mt-[40px]" onClick={handleScroll}>
      <span className="btn-text">Book a Tour</span>
    </button>
  );
}
