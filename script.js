const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach((el) => observer.observe(el));

// FAQ Accordion
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const header = item.querySelector(".faq-header");
  if (header) {
    header.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      
      faqItems.forEach((otherItem) => {
        otherItem.classList.remove("active");
      });

      if (!isActive) {
        item.classList.add("active");
      }
    });
  }
});
