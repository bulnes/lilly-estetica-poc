var _createHelpModalBox = function () {
  var $helpModalBox = document.createElement("div");
  $helpModalBox.classList.add("help-component-modal-box");

  var $helpModalBoxTitle = document.createElement("div");
  $helpModalBoxTitle.classList.add("help-component-modal-box-title");

  var $helpModalLink1 = document.createElement("a");
  $helpModalLink1.href = "https://bit.ly/AtendiLillySite";
  $helpModalLink1.title = "Atendimento Lilly";
  $helpModalLink1.target = "_blank";
  $helpModalLink1.classList.add("help-component-modal-box-link");

  var $helpModalLink2 = document.createElement("a");
  $helpModalLink2.href = "https://bit.ly/AtendiLillySite";
  $helpModalLink2.title = "Atendimento Lilly";
  $helpModalLink2.target = "_blank";
  $helpModalLink2.classList.add("help-component-modal-box-link");

  var $helpModalLink3 = document.createElement("a");
  $helpModalLink3.href = "https://bit.ly/AtendiLillySite";
  $helpModalLink3.title = "Atendimento Lilly";
  $helpModalLink3.target = "_blank";
  $helpModalLink3.classList.add("help-component-modal-box-link");

  var $helpModalLinkClose = document.createElement("a");
  $helpModalLinkClose.classList.add("help-component-modal-box-close");
  $helpModalLinkClose.href = "#";
  $helpModalLinkClose.title = "Fechar";
  $helpModalLinkClose.addEventListener("click", (e) => {
    e.preventDefault();
    $helpModalBox.classList.remove("active");
  });

  document.body.appendChild($helpModalBox);
  $helpModalBox.appendChild($helpModalBoxTitle);
  $helpModalBox.appendChild($helpModalLink1);
  $helpModalBox.appendChild($helpModalLink2);
  $helpModalBox.appendChild($helpModalLink3);
  $helpModalBox.appendChild($helpModalLinkClose);

  return $helpModalBox;
};
