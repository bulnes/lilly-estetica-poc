(() => {
  const createFixedWhatsAppCTA = () => {
    const $img = document.createElement("img");
    $img.src = "/images/logo-whatsapp-green.svg";
    $img.alt = "";
    $img.loading = "lazy";
    $img.width = "60";
    $img.height = "60";
    $img.classList.add("whatsapp-cta");
    $img.style.cssText = `
      max-width: 100%;
      height: auto;
    `;

    let href = [
      "/lillylaserclub",
      "/lillylaserclub/",
      "/lillylaserclub/index.html",
      "/tratamento/depilacao-a-laser-masculina",
      "/tratamento/depilacao-a-laser-masculina/",
    ].includes(window.location.pathname)
      ? "https://bit.ly/WhatsappNovoDepilacaoLaser"
      : "https://bit.ly/AtendiLillySite";

    href = [
      "/tratamento/lilly-fast-laser",
      "/tratamento/lilly-fast-laser/",
    ].includes(window.location.pathname)
      ? "https://bit.ly/Lp_depilacao_laser_fast"
      : href;

    href = [
      "/tratamento/depilacao-a-laser",
      "/tratamento/depilacao-a-laser/",
    ].includes(window.location.pathname)
      ? "https://bit.ly/WhatsappNovoDepilacaoLaser"
      : href;

    href = [
      "/tratamento/lipo-sem-cortes",
      "/tratamento/lipo-sem-cortes/",
    ].includes(window.location.pathname)
      ? "https://bit.ly/Lp_lipo_sem_cortes"
      : href;

    href = ["/tratamento/ultraformer-3", "/tratamento/ultraformer-3/"].includes(
      window.location.pathname
    )
      ? "https://bit.ly/Lp_Ultraformer_III"
      : href;

    href = [
      "/tratamento/tratamento-de-olheiras",
      "/tratamento/tratamento-de-olheiras/",
    ].includes(window.location.pathname)
      ? "https://bit.ly/Lp_Olheiras"
      : href;

    href = [
      "/tratamento/cicatrizes-acne",
      "/tratamento/cicatrizes-acne/",
    ].includes(window.location.pathname)
      ? "https://bit.ly/Lp_cicatrizes_acne"
      : href;

    href = [
      "/tratamento/clareamento-de-melasmas",
      "/tratamento/clareamento-de-melasmas/",
    ].includes(window.location.pathname)
      ? "https://bit.ly/Lp_Melasma"
      : href;

    href = [
      "/tratamento/remocao-de-tatuagens",
      "/tratamento/remocao-de-tatuagens/",
    ].includes(window.location.pathname)
      ? "https://bit.ly/Lp_tatuagens"
      : href;

    href = [
      "/tratamento/tratamento-de-estrias",
      "/tratamento/tratamento-de-estrias/",
    ].includes(window.location.pathname)
      ? "https://bit.ly/Lp_estrias"
      : href;

    href = ["/tratamento/criolipolise", "/tratamento/criolipolise/"].includes(
      window.location.pathname
    )
      ? "https://bit.ly/Lp_criolipolise"
      : href;

    href = [
      "/tratamento/tratamento-de-celulite",
      "/tratamento/tratamento-de-celulite/",
    ].includes(window.location.pathname)
      ? "https://bit.ly/Lp_celulite"
      : href;

    href = [
      "/tratamento/hollywood-peel",
      "/tratamento/hollywood-peel/",
    ].includes(window.location.pathname)
      ? "https://bit.ly/Lp_hollywood_peel"
      : href;

    href = [
      "/tratamento/rejuvenescimento-7d",
      "/tratamento/rejuvenescimento-7d/",
    ].includes(window.location.pathname)
      ? "https://bit.ly/Lp_reju_7_d"
      : href;

    href = [
      "/tratamento/radiofrequencia",
      "/tratamento/radiofrequencia/",
    ].includes(window.location.pathname)
      ? "https://bit.ly/Lp_radiofrequencia"
      : href;

    href = ["/tratamento/skinbooster", "/tratamento/skinbooster/"].includes(
      window.location.pathname
    )
      ? "https://bit.ly/Lp_skinbooster"
      : href;

    href = [
      "/tratamento/radiesse-bioestimulador",
      "/tratamento/radiesse-bioestimulador/",
    ].includes(window.location.pathname)
      ? "https://bit.ly/Lp_radiesse"
      : href;

    href = [
      "/tratamento/sculptra-bioestimulador",
      "/tratamento/sculptra-bioestimulador/",
    ].includes(window.location.pathname)
      ? "https://bit.ly/Lp_sculptra"
      : href;

    href = [
      "/tratamento/criofrequencia",
      "/tratamento/criofrequencia/",
    ].includes(window.location.pathname)
      ? "https://bit.ly/Lp_criofrequencia"
      : href;

    href = ["/lillyclub", "/lillyclub/", "/lillyclub/index.html"].includes(
      window.location.pathname
    )
      ? "https://bit.ly/Lp_Lilly_Club"
      : href;

    href = [
      "/lillybotoclub",
      "/lillybotoclub/",
      "/lillybotoclub/index.html",
    ].includes(window.location.pathname)
      ? "https://bit.ly/Lp_Lilly_Boto_Club"
      : href;

    href = ["/clinicas", "/clinicas.html"].includes(window.location.pathname)
      ? "https://bit.ly/Lp_Lilly_enderecos"
      : href;

    href = [
      "/catalogo-lilly",
      "/catalogo-lilly/",
      "/catalogo-lilly/index.html",
    ].includes(window.location.pathname)
      ? "https://bit.ly/Lp_Catalogo"
      : href;

    href = ["/contato", "/contato.html"].includes(window.location.pathname)
      ? "https://bit.ly/Lp_Contato"
      : href;

    href = ["/app", "/app.html"].includes(window.location.pathname)
      ? "https://bit.ly/Lp-App"
      : href;

    // home page
    href = ["/", "/index.html"].includes(window.location.pathname)
      ? "https://bit.ly/home_btn_flutuante"
      : href;

    const $link = document.createElement("a");
    $link.href = href;
    $link.title = "Clique aqui e fale conosco pelo WhatsApp";
    $link.target = "_blank";
    $link.rel = "noopener noreferrer";
    $link.id = "whatsapp-fixed-desktop";
    $link.classList.add("whatsapp-cta");
    $link.style.cssText = `
      border: 0;
      position: fixed;
      width: 60px;
      height: 60px;
      bottom: 17px;
      right: 16px;
      z-index: 999;
      transition: bottom 2s;
    `;

    $link.appendChild($img);
    document.body.appendChild($link);

    function move() {
      var $hbuspot = document.getElementById("hubspot-conversations-iframe");
      if ($hbuspot) {
        $link.style.bottom = "87px";
      }
    }

    setTimeout(move, 1000);
    setTimeout(move, 3000);
    setTimeout(move, 5000);
  };

  createFixedWhatsAppCTA();
})();
