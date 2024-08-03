# Run project locally

To run this project locally, we need to generate a new API key from [The Open Movie Database](https://www.omdbapi.com/apikey.aspx),

Once above is done, follow the below steps to run the project locally.

```bash
$ git clone https://github.com/malipramod/media-app.git
$ cd media-app
```

Replace `your_api_key_here` with your api key in `.env.development` file, i.e.  `VITE_OMDB_API_KEY=abcdefg` .

```bash
$ npm install
$ npm start
```
