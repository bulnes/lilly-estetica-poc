(() => {
  const modalId = "newsletter-modal";
  const showClass = "newsletter--show";
  const lastaccessStorageKey = "lilly-newsletter-last-access";
  const closeForeverStorageKey = "lilly-newsletter-close-forever";

  const { hostname } = window.location;
  const apiBaseUrl = ["localhost", "127.0.0.1"].includes(hostname)
    ? "http://localhost:3000"
    : "https://api.venuz.app/lilly-mkt";

  document.querySelector("#newsletter-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.querySelector("#newsletter-email").value;
    const name = form.querySelector("#newsletter-name").value;
    const phone = form.querySelector("#newsletter-phone").value;
    const clinic = form.querySelector("#newsletter-clinic").value;

    document
      .querySelector(".newsletter__container")
      .classList.add("newsletter__container--submitted");

    document
      .querySelector(".newsletter__form")
      .classList.add("newsletter__form--submitted");

    document
      .querySelector(".newsletter__description")
      .classList.add("newsletter__description--hidden");

    console.log();

    fetch(`${apiBaseUrl}/newsletter-conversion`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, name, phone, clinic }),
    });

    window.setCloseForever();
  });

  document.querySelector("#newsletter-cta").addEventListener("click", () => {
    document
      .querySelector("#newsletter-modal")
      .classList.add("newsletter--submitted");
  });

  // It's necessary to stay visible for hubspot form submitted
  window.setCloseForever = () => {
    localStorage.setItem(closeForeverStorageKey, true);
  };

  function isCloseForever() {
    return localStorage.getItem(closeForeverStorageKey) === "true";
  }

  function setLastAccess() {
    localStorage.setItem(lastaccessStorageKey, Date.now());
  }

  function isLastAccesLessThanAWeek() {
    const lastAccess = localStorage.getItem(lastaccessStorageKey) || 0;
    return Date.now() - lastAccess < 1000 * 60 * 60 * 24 * 7; // 7 days
  }

  function hideNewsletterModal() {
    document.querySelector(`#${modalId}`).classList.remove(showClass);
    setLastAccess();
  }

  function closeNewsletterModal(e) {
    if (e.target !== e.currentTarget) return;

    hideNewsletterModal();
  }

  function openNewsletterModal() {
    document.querySelector(`#${modalId}`).classList.add(showClass);
  }

  // Close modal when ESC key is pressed
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;

    hideNewsletterModal();
  });

  const closeEls = [...document.querySelectorAll("[data-close-newsletter]")];
  closeEls.forEach((el) => el.addEventListener("click", closeNewsletterModal));

  const openEls = [...document.querySelectorAll("[data-open-newsletter]")];
  openEls.forEach((el) => el.addEventListener("click", openNewsletterModal));

  if (isCloseForever()) return;

  // if (isLastAccesLessThanAWeek()) return;

  // Open modal after 5 seconds
  setTimeout(openNewsletterModal, 5000);
})();
