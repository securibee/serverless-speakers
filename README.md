Netlify serverless function for nightbot consumption. Initally made for twitch.tv/nahamsec regarding https://virseccon.com/.

## Run locally

### Clone the repo
```
git clone https://github.com/securibee/serverless-speakers
```

### Install packages
```
yarn
```

### Serve lambda
```
yarn netlify-lambda serve functions
```

### Browse to your function
```
http://localhost:9000/.netlify/functions/speakers?name=stok
```

## Nightbot Twitch command
```
$(eval const api = $(urlfetch json https://random-subdomain123.netlify.com/.netlify/functions/speakers?name=$(querystring)); `${api.msg}`)
```
