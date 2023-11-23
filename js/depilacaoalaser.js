var isMobile = window.matchMedia("(max-width: 800px)").matches;
var chatFrameElement;
var BOTMAKER_VAR = { _idmedia: "" };

window.bmFocus = function () {
  if (isMobile) {
    openWpp();
  }
  if (chatFrameElement) {
    chatFrameElement.classList.add("highlighted");
  }
};

(function waitForProtocol() {
  var waitInterval = setInterval(function () {
    if (!isMobile) {
      initBotmaker();
    } else {
      initWpp();
    }

    clearInterval(waitInterval);
  }, 500);
})();

function initWpp() {
  insertWppCss();
  renderWppButton();
}

function initBotmaker() {
  BOTMAKER_VAR = {
    _idmedia: window.protocol,
  };

  let js = document.createElement("script");
  js.type = "text/javascript";
  js.async = 1;
  js.src = "https://go.botmaker.com/rest/webchat/p/MNWSL8HZMU/init.js";
  document.body.appendChild(js);

  waitForBotmaker();
}

function waitForBotmaker() {
  var waitInterval = setInterval(function () {
    var botmakerReady =
      window.botmaker &&
      window.botmaker.iframe &&
      window.botmaker.frameWrapper &&
      window.botmaker.iframe.contentDocument &&
      window.botmaker.iframe.contentDocument.getElementById("wc-chat-frame");
    if (botmakerReady) {
      clearInterval(waitInterval);
      insertCss();
      insertFrameCss();

      var bmName =
        window.botmaker.iframe.contentDocument.getElementsByClassName(
          "wc-botname"
        );
      if (bmName && bmName[0]) {
        bmName[0].innerHTML =
          "Agende aqui sua avaliação <strong>grátis</strong> com uma de nossas especialistas";
      }

      if (!window.botmaker.isHidden && window.botmaker.isMinimized) {
        window.bmMaximize();
      }
      if (window.onBmLoad) {
        window.onBmLoad();
      }
      applyClasses();
      listenForFocus();

      const $page = document.querySelector("#page-elements");
      $page.classList.add("withfullaside");
      window.scrollTo(0, 0);
    }
  }, 250);
}

function renderWppButton() {
  zossBtn = document.createElement("div");
  zossBtn.className = "zoss-btn-container pulse-btn";

  var dot = document.createElement("div");
  dot.className = "zoss-btn-dot";
  //dot.innerHTML = '1';

  var tip = document.createElement("div");
  tip.className = "zoss-btn-tip";
  tip.innerHTML = "Agende aqui sua avaliação!";

  var img = document.createElement("img");
  img.src = "/images/depilacaoalaser/whatsapp.png";

  zossBtn.append(dot);
  zossBtn.append(tip);
  zossBtn.append(img);

  zossBtn.onclick = function () {
    openWpp();
  };

  document.body.append(zossBtn);
}

function openWpp() {
  var wppMsg =
    "Olá gostaria de saber sobre os tratamentos da Lilly, pode me ajudar?";
  var encoded = encodeURIComponent(wppMsg);
  return window.open(
    "https://api.whatsapp.com/send?phone=552140202349&text=" + encoded,
    "_blank"
  );
}

function applyClasses() {
  var frameWrapper = window.botmaker.frameWrapper;
  frameWrapper.classList.add("zoss-wrapper");
  chatFrameElement =
    window.botmaker.iframe.contentDocument.getElementById("wc-chat-frame");
  if (chatFrameElement) {
    chatFrameElement.classList.add("zoss-container");
  }
}

function listenForFocus() {
  window.botmaker.iframe.contentDocument
    .getElementsByTagName("textarea")[0]
    .addEventListener("focus", () => {
      chatFrameElement.classList.remove("highlighted");
    });
}

function insertCss() {
  var s = document.createElement("style");
  s.setAttribute("type", "text/css");
  s.innerHTML = `
	.zoss-wrapper {
		width: 33.25rem !important;
		height: 100% !important;
		max-height: 100% !important;
	}
	
	@media (max-width: 50rem) {
		.zoss-wrapper {
			display: none !important;
		}
	}
    `;
  document.getElementsByTagName("head")[0].appendChild(s);
}

function insertFrameCss() {
  var s = window.botmaker.iframe.contentDocument.createElement("style");
  s.setAttribute("type", "text/css");
  s.innerHTML = `
	.wc-chat-frame.wc-chat-frame-minimized {
		display: none;
	}
	.wc-button {
		display: none;
	}
	.zoss-container {
		max-height: 100% !important;
		width: calc(100% - 20px) !important;
		max-width: 530px !important;
		height: 100%;
		margin: 0;
		transition: 0.3s ease;
		--main-bm-font-size: 16px;
		--main-bm-entries-background-color: #f5f5f5;
		--main-bm-bot-color: #dedede;
		--main-bm-user-color: #dedede;
	}
	
	.zoss-container.highlighted {
		overflow: visible;
		--main-bm-bot-color: #4DEB86;
		--main-bm-user-color: #4DEB86;
	}
	
	@keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
	
	.zoss-container.highlighted:before {
		content: '';
		background: linear-gradient(
		  45deg,
		  #0267F7,
		  #4DEB86,#0267F7,
		  #4DEB86,#0267F7,
		  #4DEB86,#0267F7,
		  #4DEB86,#0267F7
		);
		position: absolute;
		top: -2px;
		left: 0px;
		background-size: 400%;
		z-index: -1;
		filter: blur(5px);
		width: calc(100% + 4px);
		height: calc(100% + 4px);
		animation: glowing 60s linear infinite;
		opacity: 1;
		transition: opacity 0.3s ease-in-out;
	  }
	
	.zoss-container.highlighted .wc-footer .wc-footer-input {
		border: 5px solid #4DEB86;
	}
	
	.zoss-container .wc-header {
		background-color: #f5f5f5;
		padding: 32px;
	}
	
	.zoss-container .wc-header .wc-header-icon {
		display: none;
	}
	
	.zoss-container .wc-header .wc-header-middle .wc-botname {
		color: #FF6074;

    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 34px; /* 106.25% */
    letter-spacing: -0.64px;
	}
	
	.zoss-container .wc-footer {
		padding-bottom: 32px;
		padding-left: 16px;
		padding-right: 16px;
		border: none;
	}
	
	.zoss-container .wc-footer .wc-footer-input {
		background: white;
		padding: 24px;
		border-radius: 20px;
		border: 5px solid transparent;
		transition: 0.3s ease;
	}
	
	.zoss-container .wc-footer .wc-footer-input textarea {
		height: 25px !important;
		font-size: 20px;
	}
	
	.zoss-container .bm-webchat-entries .bm-webchat-entries-ul .bm-webchat-text-entry-left,
	.zoss-container .bm-webchat-entries .bm-webchat-entries-ul .bm-webchat-text-entry-right	{
		padding: 24px;
		transition: 0.3s ease;
	}

  .zoss-container .bm-webchat-entries .bm-webchat-entries-ul .bm-webchat-entries-li .bm-webchat-text-entry-left {
    background-color: #dfe4ea;

    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
	
	.zoss-container .bm-webchat-entries .bm-webchat-sent-tildes {
		margin-top: 0px;
	}
    `;
  window.botmaker.iframe.contentDocument
    .getElementsByTagName("head")[0]
    .appendChild(s);
}

function insertWppCss() {
  var s = document.createElement("style");
  s.setAttribute("type", "text/css");
  s.innerHTML = `
		.zoss-btn-container {
      right: 20px;
      bottom: 20px;
      width: 75px;
      height: 75px;
      background: #00b42b;
      border-radius: 50%;
      position: fixed;
      z-index: 99;
      display: flex;
      cursor: pointer;
      transition: 0.3s ease;
	  }
	  
	  .zoss-btn-container img {
		  border-radius: 50%;
	  }
	  
	  .zoss-btn-container.hide {
		  transform: translateY(220px);
	  }
	  
	  .zoss-btn-dot {
      position: absolute;
      right: 6px;
      width: 13px;
      height: 13px;
      background: rgb(254, 60, 48);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 14px;
      color: white;
      font-family: sans-serif;
	  }
	  
	  .zoss-btn-tip {
      display: flex;
      align-items: center;
      position: absolute;
      right: 90px;
      top: 50%;
      width: max-content;
      transform: translateY(-50%);
      font-weight: bold;
      background: white;
      padding: 10px 12px;
      letter-spacing: 1px;
      font-size: 11px;
      border-radius: 6px;
      box-shadow: 0px 0px 10px -5px black;
	  }
	  
	  .zoss-btn-tip::after {
      content: '';
      width: 0px;
      height: 0px;
      position: absolute;
      right: -5px;
      border-left: 5px solid white;
      border-top: 5px solid transparent;
      border-bottom: 5px solid transparent;
	  }
	  
	  @keyframes pulse {
		to {
		  box-shadow: 0 0 0 45px rgba(232, 76, 61, 0);
		}
	  }

	  .pulse-btn {
      border: none;
      box-shadow: 0 0 0 0 rgba(48, 191, 57, 0.7);
      background-color: rgb(48, 191, 57);
      -webkit-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
      -moz-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
      -ms-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
      animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
	  }
    `;
  document.getElementsByTagName("head")[0].appendChild(s);
}
