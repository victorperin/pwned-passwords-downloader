# Pwned Passwords List Downloader

Retrieves information about the pwned password files currently available for download from <https://haveibeenpwned.com>.

### Usage
```node dist/main.js```

### Example Output
```json
[
    {
        "file": "Version 2 (ordered by prevalence)",
        "date": "22 Feb 2018",
        "size": "8.8GB",
        "description": "Version 2 with 501m hashes and counts of password usage ordered by most to least prevalent",
        "sha1": "c267424e7d2bb5b10adff4d776fa14b0967bf0cc",
        "links": {
            "torrent": "https://downloads.pwnedpasswords.com/passwords/pwned-passwords-2.0.txt.7z.torrent",
            "cloudflare": "https://downloads.pwnedpasswords.com/passwords/pwned-passwords-2.0.txt.7z"
        }
    },
    {
        "file": "Version 2 (ordered by hash)",
        "date": "1 Mar 2018",
        "size": "9.0GB",
        "description": "Version 2 with 501m hashes and counts of password usage ordered by the hash",
        "sha1": "87437926c6293d034a259a2b86a2d077e7fd5a63",
        "links": {
            "torrent": "https://downloads.pwnedpasswords.com/passwords/pwned-passwords-ordered-2.0.txt.7z.torrent",
            "cloudflare": "https://downloads.pwnedpasswords.com/passwords/pwned-passwords-ordered-2.0.txt.7z"
        }
    }
]
```