const _createHelpModalForm = ($modal, $modalBox) => {
  // Load hubspot
  const $script = document.createElement("script");
  $script.src = "//js.hsforms.net/forms/embed/v2.js";
  $script.onload = () => {
    hbspt.forms.create({
      region: "na1",
      portalId: "14506695",
      formId: "ca6665ba-d56a-4fe3-a1e6-796af3ff8ab8",
    });
  };

  document.body.appendChild($script);

  $modalBox.innerHTML = "";
  $modalBox.classList.add("help-modal-form-iframe");

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

  // Iframe hubspot
  const $helpModalIframe = document.createElement("iframe");
  $helpModalIframe.classList.add("help-modal-form-iframe");
  $helpModalIframe.src =
    "https://share.hsforms.com/1ymZlutVqT-Oh5nlq8_-KuA8mxfr";
  $helpModalIframe.width = "100%";
  $helpModalIframe.height = "100%";

  // $modalBox.appendChild($helpModalBoxTitle);
  // $modalBox.appendChild($helpModalInputName);
  // $modalBox.appendChild($helpModalInputPhone);
  // $modalBox.appendChild($helpModalSendBtn);
  $modalBox.appendChild($helpModalIframe);
  $modalBox.appendChild($helpModalLinkClose);
};
