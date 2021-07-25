function faqAccordion() {
  const headings = document.querySelectorAll(
    "#faq-accordion .accordion-item .heading"
  );

  headings.forEach((heading) => {
    heading.onclick = () => {
      const accordionItem = heading.parentElement;
      const accordionContainer = heading.nextElementSibling;
      const accordionContent = accordionContainer.firstElementChild;
      if (accordionItem.classList.contains("open")) {
        accordionContainer.style.height = 0;
        accordionItem.classList.remove("open");
      } else {
        accordionItem.classList.add("open");
        const height = accordionContent.offsetHeight;
        accordionContainer.style.height = height + "px";
      }
    };
  });
}

faqAccordion();
