var _createHelpIcon = function ($helpModalBox) {
  var $helpIcon = document.createElement("div");
  $helpIcon.classList.add("help-component");
  $helpIcon.setAttribute("innet", true);
  $helpIcon.setAttribute("title", "Posso ajudar?");

  $helpIcon.addEventListener("click", () => {
    $helpModalBox.classList.toggle("active");
  });

  document.body.appendChild($helpIcon);

  return $helpIcon;
};
