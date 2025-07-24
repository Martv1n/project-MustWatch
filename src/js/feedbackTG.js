const form = document.querySelector('.contact-form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const phone = document.querySelector('#tel').value;
  const comment = document.querySelector('#user-comment').value;

  const message = `
📝 Нова заявка з сайту:
👤 Ім’я: ${name}
📧 Email: ${email}
📱 Телефон: ${phone}
💬 Коментар: ${comment}
`;

  const token = '7486210381:AAFJJ8IeVKshkignobys8cVNWzLFZCzd0Xs';
  const chat_id = '1313421130';

  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: chat_id,
      text: message,
    }),
  })
    .then(response => {
      if (response.ok) {
        alert('Дякуємо! Повідомлення надіслано.');
        form.reset();
      } else {
        alert('Помилка при надсиланні.');
      }
    })
    .catch(error => {
      console.error('Помилка:', error);
      alert('Сталася помилка!');
    });
});
