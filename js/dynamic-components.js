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

    const $link = document.createElement("a");
    $link.href = "https://bit.ly/AtendiLillySite";
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
