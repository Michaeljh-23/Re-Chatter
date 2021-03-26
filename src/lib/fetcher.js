import $ from 'jquery';
const Fetcher = {
  create: (message, callback) => {
    $.post('/message', message)
      .done(() => {
        if (callback) {
          callback();
        }
      })
      .fail(({ responseJSON }) => {
        responseJSON.error.errors.forEach((err) => console.error(err));
      });
  },
  readAll: (callback) => {
    $.get('/message')
      .done((item) => {
        if (callback) {
          console.log('data is: ', item);
          callback(item);
        }
      })
      .fail(({ responseJSON }) => {
        responseJSON.error.errors.forEach((err) => console.error(err));
      });
  },
};

export default Fetcher;
