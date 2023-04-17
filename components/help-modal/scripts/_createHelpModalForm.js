const _createHelpModalForm = ($modal, $modalBox) => {
  $modalBox.innerHTML = "";

  const $helpModalBoxTitle = document.createElement("div");
  $helpModalBoxTitle.classList.add("help-modal-form-title");

  const $helpModalInputName = document.createElement("input");
  $helpModalInputName.classList.add("help-modal-form-input");
  $helpModalInputName.placeholder = "Nome";
  $helpModalInputName.type = "text";

  const $helpModalInputPhone = document.createElement("input");
  $helpModalInputPhone.classList.add("help-modal-form-input");
  $helpModalInputPhone.placeholder = "Telefone";
  $helpModalInputPhone.type = "text";

  const $helpModalSendBtn = document.createElement("div");
  $helpModalSendBtn.classList.add("help-modal-form-send");
  $helpModalSendBtn.title = "Enviar";
  $helpModalSendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    _createHelpModalFormResponse($modal, $modalBox);
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
  $modalBox.appendChild($helpModalInputName);
  $modalBox.appendChild($helpModalInputPhone);
  $modalBox.appendChild($helpModalSendBtn);
  $modalBox.appendChild($helpModalLinkClose);
};
