const installRabet = {
  type: 'RABET/INSTALL',
  message: `
  const e = arguments[0];

  function rabet(e) {
    return {
	    connect: () => new Promise((resolve, reject) => {

        e.source.postMessage({
          type: 'RABET/CONNECT',
        }, e.origin);

        const eventHandler = (event) => {
          if (event.data.type === 'RABET/CONNECT/RESPONSE') {
            resolve(event.data.message);
          }

          window.removeEventListener('message', eventHandler);
        };

        window.addEventListener('message', eventHandler); 
      }),
      sign: (xdr, network) => new Promise((resolve, reject) => {
        e.source.postMessage({
          type: 'RABET/SIGN',
          message: {
            xdr,
            network,
          },
        }, e.origin);

        const eventHandler = (event) => {
          if (event.data.type === 'RABET/SIGN/RESPONSE') {
            resolve(event.data.message);
          }

          window.removeEventListener('message', eventHandler);
        };

        window.addEventListener('message', eventHandler); 
      }),
      disconnect: () => new Promise((resolve, reject) => {
        e.source.postMessage({
          type: 'RABET/DISCONNECT',
        });

        resolve();
      }),
      isUnlocked: () => new Promise((resolve, reject) => {
        resolve(true);
      }),
      close: () => new Promise((resolve, reject) => {
        e.source.postMessage({
          type: 'RABET/CLOSE',
        });

        resolve();
      }),
      on: (eventName, eventHandler) => {},
		}
	}

  e.source.postMessage({
    type: 'RABET/INSTALL/RESPONSE',
    message: 'ok',
  }, e.origin);

  window.rabet = rabet(e)`,
};

export default installRabet;
