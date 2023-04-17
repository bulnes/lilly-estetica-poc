const _createHelpModalBox = function () {
  const $helpModalBox = document.createElement("div");
  $helpModalBox.classList.add("help-component-modal-box");

  const $helpModalBoxTitle = document.createElement("div");
  $helpModalBoxTitle.classList.add("help-component-modal-box-title");

  const $helpModalLink1 = document.createElement("a");
  $helpModalLink1.href = "https://bit.ly/AtendiLillySite";
  $helpModalLink1.title = "Atendimento Lilly";
  $helpModalLink1.target = "_blank";
  $helpModalLink1.classList.add("help-component-modal-box-link");
  $helpModalLink1.addEventListener("click", (e) => {
    e.preventDefault();
    $helpModalBox.classList.remove("active");
    const { modal, modalBox } = _createHelpModal();
    _createHelpModalForm(modal, modalBox);
  });

  const $helpModalLink2 = document.createElement("a");
  $helpModalLink2.href = "https://bit.ly/AtendiLillySite";
  $helpModalLink2.title = "Atendimento Lilly";
  $helpModalLink2.target = "_blank";
  $helpModalLink2.classList.add("help-component-modal-box-link");

  const $helpModalLink3 = document.createElement("a");
  $helpModalLink3.href = "https://bit.ly/AtendiLillySite";
  $helpModalLink3.title = "Atendimento Lilly";
  $helpModalLink3.target = "_blank";
  $helpModalLink3.classList.add("help-component-modal-box-link");

  const $helpModalLinkClose = document.createElement("a");
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
