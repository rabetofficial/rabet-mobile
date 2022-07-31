const copyToClipboard = (textToCopy: string): Promise<void> => {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(textToCopy);
  }

  const textArea = document.createElement('textarea');
  textArea.value = textToCopy;

  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';
  document.body.appendChild(textArea);

  textArea.focus();
  textArea.select();

  return new Promise((res) => {
    const isCopied = document.execCommand('copy');

    if (isCopied) {
      res();
    } else {
      res();
    }

    textArea.remove();
  });
};

export default copyToClipboard;
