(() => {
  const KEY_USER_ID = "lilly-estetica.user.id";

  const { search, host, protocol, hostname } = window.location;
  const { referrer } = document;

  const apiBaseUrl = ["localhost", "127.0.0.1"].includes(hostname)
    ? "http://localhost:3000"
    : "https://lilly-estetica-offline-conversation.onrender.com";

  const getUserId = () => {
    const localUserId = localStorage.getItem(KEY_USER_ID);

    if (localUserId) {
      return localUserId;
    }

    const uniqueId = parseInt(Math.random() * Number.MAX_SAFE_INTEGER, 10);
    localStorage.setItem(KEY_USER_ID, uniqueId);

    return uniqueId;
  };

  const userId = getUserId();

  // Save offline conversion
  const saveOfflineConversion = () => {
    fetch(`${apiBaseUrl}/offline-conversion/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        search,
        baseUrl: `${protocol}//${host}`,
        referrer,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Offline conversion saved", data);
      })
      .catch((error) => {
        console.error("Error saving offline conversion", error);
      });
  };

  // Select all links with href with bit.ly
  const links = document.querySelectorAll("a[href*='bit.ly']");
  [...links].forEach((link) => {
    // When user click on link, it will open in a new tab with specific query params
    link.onclick = (event) => {
      event.preventDefault();

      saveOfflineConversion();

      const phone = "552140202349";
      const text = `[Ticket ${userId}] Olá gostaria de saber sobre os tratamentos da Lilly, pode me ajudar?`;
      const url = encodeURI(
        `https://api.whatsapp.com/send?phone=${phone}&text=${text}`
      );

      window.open(url, "_blank");
    };
  });
})();
