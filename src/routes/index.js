import { Router } from 'express';
import dotenv from 'dotenv';
dotenv.config();

const router = Router();

router.get('/', (req, res) => {

const urlPost = 'https://id.twitch.tv/oauth2/token';

const params = new URLSearchParams();
params.append('client_id', process.env.CLIENTID);
params.append('client_secret', process.env.CLIENTSECRET);
params.append('redirect_uri', process.env.REDIRECTURI);
params.append('grant_type', process.env.GRANTTYPE);

const requestOptions = {
    method: 'POST',
    body: params,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
};

fetch(urlPost, requestOptions)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

  req.log.info('/ request recieved')
});

export default router;
