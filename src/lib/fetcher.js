import $ from 'jquery';
const Fetcher = {
  server: `http://parse.${window.CAMPUS}.hackreactor.com/chatterbox/classes/messages`,

  create: function (message, successCB, errorCB = null) {
    console.log(Fetcher.server);
    $.ajax({
      url: Fetcher.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: successCB,
      error:
        errorCB ||
        function (error) {
          console.error('chatterbox: Failed to post message', error);
        },
    });
  },

  readAll: function (successCB, errorCB = null) {
    $.ajax({
      url: Fetcher.server,

      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: (data) => {
        console.log(data);
        successCB(data);
      },
      error:
        errorCB ||
        function (error) {
          console.error('chatterbox: Failed to fetch messages', error);
        },
    });
  },
};

export default Fetcher;
