const https = require('https'),
    cheerio = require('cheerio');

module.exports = () => new Promise((resolve, reject) => {
    let html = '';
    https.get('https://haveibeenpwned.com/Passwords', response => {
        if (response.statusCode >= 399)
            reject(response);
        response.on('data', chunk => html += chunk);
        response.on('end', () => resolve(html));
    })
        .on('error', reject)
})
    .then(html => cheerio.load(html))
    .then($ => $('#PwnedPasswords').find('tbody tr')
        .map((_, row) => {
            const cells = $(row).find('td').map((_, td) => $(td).html().replace('<br>', ' ')),
                links = ['torrent', 'cloudflare'].reduce(
                    (a, c) => ({...a, [c]: $(row).find(`a.${c}`).prop('href')}),
                    {}),
                data = ['file', 'date', 'size', 'description', 'sha1']
                    .reduce((a, c, i) => ({...a, [c]: cells[i + 1]}), {});
            return {...data, links};
        }).toArray());
