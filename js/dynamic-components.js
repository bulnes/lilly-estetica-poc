const initComponents = () => {
  const globalComponents = ["help", "help-modal"];

  // load all global js components
  globalComponents.forEach((component) => {
    const $script = document.createElement("script");
    $script.src = `/components/${component}/index.js`;
    document.body.appendChild($script);
  });
};

if (document.readyState === "complete") {
  initComponents();
} else {
  window.addEventListener("load", initComponents);
}
