(function iief() {
  const setupCommentForm = () => {
    const section = document.querySelector('#comment-section');
    const openBtn = document.querySelector('#add-comment-btn');

    const openForm = (open = true) => {
      if (open) {
        section.classList.remove('closed');
        openBtn.classList.add('hide');
      } else {
        section.classList.add('closed');
        openBtn.classList.remove('hide');
      }
    };

    openBtn.addEventListener('click', () => {
      openForm();
    });

    document.querySelector('#comment-cancel-btn').addEventListener('click', (evt) => {
      evt.preventDefault();
      openForm(false);
      return false; //  for good measure
    });

    document.querySelector('#comment-submit-btn').addEventListener('click', (evt) => {
      evt.preventDefault();
      //  TODO: Handle validation and form submit
      openForm(false); //  if validation or we submitted form via javascript
    });
  };

  window.addEventListener('load', () => {
    setupCommentForm();
  });
}());