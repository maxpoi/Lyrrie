const emailAddress = "maxxyye1998@gmail.com";

function fallbackCopy(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.readOnly = true;
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
}

document.querySelectorAll("[data-copy-email]").forEach((button) => {
  let resetTimer;
  const action = button.querySelector("[data-copy-action]");
  const status = button.parentElement.querySelector("[data-copy-status]");

  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
    } catch {
      fallbackCopy(emailAddress);
    }

    action.textContent = "Copied";
    status.textContent = "Email address copied to your clipboard.";
    window.clearTimeout(resetTimer);
    resetTimer = window.setTimeout(() => {
      action.textContent = "Copy";
      status.textContent = "";
    }, 2200);
  });
});
