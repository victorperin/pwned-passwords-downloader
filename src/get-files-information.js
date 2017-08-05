const Nightmare = require('nightmare');

module.exports = () =>
  Nightmare()
    .goto('https://haveibeenpwned.com/Passwords')
    .wait('#PwnedPasswords > table')
    .evaluate( () => {
      const rows = document.querySelectorAll('#PwnedPasswords > table > tbody > tr');

      const files = [...rows]
        .map( (row) => ({
          url: row.cells[0].firstChild.href,
          version: row.cells[1].innerHTML,
          sha1: row.cells[5].innerHTML,
        }) );

      return files;
    })
    .end()
    .catch(console.error);
