const initComponents = () => {
  const globalComponents = ["help"];

  // load all global js components
  globalComponents.forEach((component) => {
    const $script = document.createElement("script");
    $script.src = `/components/${component}/index.js`;
    document.body.appendChild($script);
  });
};

initComponents();
