document.addEventListener("DOMContentLoaded", () => {
    const revealTargets = document.querySelectorAll(
        ".feature-card, .product-card, .offer-card, .season-card, .curated-card, .contact-method, .contact-form-card, .contact-details-card, .review-card, .reviews-highlight, .home-collection-card, .home-cta-card, .page-hero-panel, .feature-panel, .category-chip, .stats-section, .features-section .section-header, .products-section .section-header, .offers-section .section-header, .collection-showcase .section-header, .about-section .section-header, .contact-section .section-header, .reviews-section .section-header, .home-collections-section .section-header"
    );

    if (!("IntersectionObserver" in window)) {
        revealTargets.forEach((element) => element.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver(
        (entries, currentObserver) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("is-visible");
                currentObserver.unobserve(entry.target);
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px",
        }
    );

    revealTargets.forEach((element) => observer.observe(element));
});

