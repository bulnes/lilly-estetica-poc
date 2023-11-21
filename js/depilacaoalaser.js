(() => {
  const isDesktop = window.innerWidth > 768;

  const $page = document.querySelector("#page-elements");
  const $inputArea = document.querySelector(".aside__input-area");
  const $input = document.querySelector("#newmessage");

  if (isDesktop) {
    let js = document.createElement("script");
    js.type = "text/javascript";
    js.async = 1;
    js.src = "https://go.botmaker.com/rest/webchat/p/MNWSL8HZMU/init.js";
    document.body.appendChild(js);

    setTimeout(() => {
      window.scrollTo(0, 0);
      $page.classList.add("withfullaside");

      setTimeout(() => {
        $input.focus();
      }, 1500);
    }, 3000);

    const allCtas = document.querySelectorAll(".cta");

    [...allCtas].forEach((cta) => {
      cta.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        const ctas = document.querySelectorAll(".cta:not(.cta--transparent)");
        [...ctas].forEach((cta) => cta.classList.add("cta--visited"));

        $inputArea.classList.add("aside__input-area-shake-horizontal");
        $input.focus();
      });
    });
  }
})();
