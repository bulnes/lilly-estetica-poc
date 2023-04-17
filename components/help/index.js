const initHelpComponent = () => {
  const styles = ["keyframes", "help"];

  const scripts = ["help"];

  styles.forEach((style) => {
    const $link = document.createElement("link");
    $link.rel = "stylesheet";
    $link.href = `/components/help/styles/${style}.css`;
    document.head.appendChild($link);
  });

  scripts.forEach((script) => {
    const $script = document.createElement("script");
    $script.src = `/components/help/scripts/${script}.js`;
    document.body.appendChild($script);
  });
};

initHelpComponent();
