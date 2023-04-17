const initHelpModalComponent = () => {
  const styles = ["help-modal"];

  const scripts = [
    "_createHelpModalFormResponse",
    "_createHelpModalForm",
    "help-modal",
  ];

  styles.forEach((style) => {
    const $link = document.createElement("link");
    $link.rel = "stylesheet";
    $link.href = `/components/help-modal/styles/${style}.css`;
    document.head.appendChild($link);
  });

  scripts.forEach((script) => {
    const $script = document.createElement("script");
    $script.src = `/components/help-modal/scripts/${script}.js`;
    document.body.appendChild($script);
  });
};

initHelpModalComponent();
