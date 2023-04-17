const _createHelpModalFormResponse = ($modal, $modalBox) => {
  $modalBox.innerHTML = "";
  $modalBox.classList.remove("help-modal-form-iframe");
  $modalBox.classList.add("help-modal-form-response");

  const $helpModalBoxTitle = document.createElement("div");
  $helpModalBoxTitle.classList.add("help-modal-form-response-title");
  $helpModalBoxTitle.textContent = "Olá!";

  const $helpModalBoxSubTitle = document.createElement("div");
  $helpModalBoxSubTitle.classList.add("help-modal-form-response-subtitle");
  $helpModalBoxSubTitle.textContent =
    "Recebemos seu contato e em breve, uma representante Lilly entrará em contato.";

  const $helpModalCloseBtn = document.createElement("div");
  $helpModalCloseBtn.classList.add("help-modal-form-response-close");
  $helpModalCloseBtn.title = "Fechar";
  $helpModalCloseBtn.addEventListener("click", (e) => {
    e.preventDefault();
    $modal.classList.remove("active");
  });

  const $helpModalLinkClose = document.createElement("a");
  $helpModalLinkClose.classList.add("help-modal-box-close");
  $helpModalLinkClose.href = "#";
  $helpModalLinkClose.title = "Fechar";
  $helpModalLinkClose.addEventListener("click", (e) => {
    e.preventDefault();
    $modal.classList.remove("active");
  });

  $modalBox.appendChild($helpModalBoxTitle);
  $modalBox.appendChild($helpModalBoxSubTitle);
  $modalBox.appendChild($helpModalCloseBtn);
  $modalBox.appendChild($helpModalLinkClose);
};
