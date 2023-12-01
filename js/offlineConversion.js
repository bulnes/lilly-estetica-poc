(() => {
  const KEY_USER_ID = "lilly-estetica.user.id";

  const { search, host, protocol, hostname, pathname } = window.location;
  const { referrer } = document;

  const apiBaseUrl = ["localhost", "127.0.0.1"].includes(hostname)
    ? "http://localhost:3000"
    : "https://api.venuz.app/lilly-mkt";

  const getGAClientIds = () => {
    const GA_ID = "TJW8Y0WQVD";

    try {
      const cookie = {};

      document.cookie.split(";").forEach((el) => {
        const splitCookie = el.split("=");
        const key = splitCookie[0].trim();
        const value = splitCookie[1];
        cookie[key] = value;
      });

      const clientId = cookie["_ga"].substring(6);
      const sessionId = cookie[`_ga_${GA_ID}`].substring(6).split(".")[0];

      return {
        clientId,
        sessionId,
      };
    } catch (error) {
      return {
        clientId: "",
        sessionId: "",
      };
    }
  };

  const getPrefix = () => {
    // Must return 'G' when utm_source=google and utm_medium=cpc
    const utmSource = new URLSearchParams(search).get("utm_source");
    const utmMedium = new URLSearchParams(search).get("utm_medium");

    if (utmSource === "google" && utmMedium === "cpc") {
      return "G";
    }

    // Must return 'F' when utm_source=facebook
    if (utmSource === "facebook") {
      return "F";
    }

    // Must return 'O' when referer is google but with not utm_source
    if (referrer.includes("google") && !utmSource) {
      return "O";
    }

    // Must return 'D' when there is no utm_source and referer is empty
    if (!utmSource && !referrer) {
      return "D";
    }

    return "X";
  };

  const getUserId = (prefix = "X") => {
    const localUserId = localStorage.getItem(KEY_USER_ID);

    if (localUserId && localUserId.startsWith(prefix)) {
      return localUserId;
    }

    let uniqueId =
      Date.now().toString(36).slice(0, 4) +
      Math.random().toString(36).slice(2, 5);
    uniqueId = uniqueId.toUpperCase();
    uniqueId = `${prefix}${uniqueId}`;

    localStorage.setItem(KEY_USER_ID, uniqueId);

    return uniqueId;
  };

  const userId = getUserId(getPrefix());

  // Save offline conversion
  const saveOfflineConversion = () => {
    fetch(`${apiBaseUrl}/offline-conversion/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        search,
        baseUrl: `${protocol}//${host}${pathname}`,
        referrer,
        ...getGAClientIds(),
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

  window.saveOfflineConversion = saveOfflineConversion;

  // Select all links with href with bit.ly
  const links = document.querySelectorAll("a[href*='bit.ly']");
  [...links].forEach((link) => {
    // When user click on link, it will open in a new tab with specific query params
    link.onclick = (event) => {
      event.preventDefault();

      saveOfflineConversion();

      // const phone = "552140202349";
      const phone = "5521967409201";
      const text = `[Ticket ${userId}] Olá gostaria de saber sobre os tratamentos da Lilly, pode me ajudar?`;
      const url = encodeURI(
        `https://api.whatsapp.com/send?phone=${phone}&text=${text}`
      );

      window.open(url, "_blank");
    };
  });
})();
