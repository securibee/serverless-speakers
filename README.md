## Nightbot Twitch command
```
$(eval const api = $(urlfetch json https://random-subdomain123.netlify.com/.netlify/functions/speakers?name=$(querystring)); `${api.msg}`)
```