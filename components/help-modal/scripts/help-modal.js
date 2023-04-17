const _createHelpModal = () => {
  // create modal structure
  const $modal = document.createElement("div");
  $modal.classList.add("help-modal");
  $modal.classList.add("active");
  $modal.setAttribute("innet", true);

  const $modalBox = document.createElement("div");
  $modalBox.classList.add("help-modal-box");
  $modal.appendChild($modalBox);

  const $helpModalBoxTitle = document.createElement("div");
  $helpModalBoxTitle.classList.add("help-modal-box-title");

  const $helpModalLink1 = document.createElement("a");
  $helpModalLink1.href = "https://bit.ly/AtendiLillySite";
  $helpModalLink1.title = "Ainda não sou cliente Lilly";
  $helpModalLink1.classList.add("help-modal-box-link");
  $helpModalLink1.addEventListener("click", (e) => {
    e.preventDefault();
    _createHelpModalForm($modal, $modalBox);
  });

  const $helpModalLink2 = document.createElement("a");
  $helpModalLink2.href = "https://bit.ly/AtendiLillySite";
  $helpModalLink2.title = "Atendimento Lilly";
  $helpModalLink2.target = "_blank";
  $helpModalLink2.classList.add("help-modal-box-link");

  const $helpModalLink3 = document.createElement("a");
  $helpModalLink3.href = "https://bit.ly/AtendiLillySite";
  $helpModalLink3.title = "Atendimento Lilly";
  $helpModalLink3.target = "_blank";
  $helpModalLink3.classList.add("help-modal-box-link");

  const $helpModalLinkClose = document.createElement("a");
  $helpModalLinkClose.classList.add("help-modal-box-close");
  $helpModalLinkClose.href = "#";
  $helpModalLinkClose.title = "Fechar";
  $helpModalLinkClose.addEventListener("click", (e) => {
    e.preventDefault();
    $modal.classList.remove("active");
  });

  document.body.appendChild($modal);

  $modalBox.appendChild($helpModalBoxTitle);
  $modalBox.appendChild($helpModalLink1);
  $modalBox.appendChild($helpModalLink2);
  $modalBox.appendChild($helpModalLink3);
  $modalBox.appendChild($helpModalLinkClose);

  return { modal: $modal, modalBox: $modalBox };
};

if (window.location.search.includes("show-help")) {
  _createHelpModal();
}
