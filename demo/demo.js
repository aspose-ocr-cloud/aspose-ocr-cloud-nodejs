const AsposeOcrCloudv50Api = require('@asposecloud/aspose-ocr-cloud');
const path = require("path");
const fs = require("fs");
const axios = require('axios')
const clientId = "YOUR_CLIENT_ID";
const clientSecret = "YOUR_CLIENT_SECRET";

var api

// Get your credentials from Aspose Dashboard and insert them below:
const getTokenData = {
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: "client_credentials"
};


// write img path to the image you want to recognize
var sampes_dir_path = "samples"


function connect() {
    return new Promise(function(resolve, reject) {
        console.log(`Authentificating...`);
        axios.post(
            "https://api.aspose.cloud/connect/token",
            new URLSearchParams(getTokenData),
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Accept": "application/json;charset=UTF-8",
                }
            }
        )
        .then(response => {
            console.log(`Status: ${response.status}`);
            console.log(response.data);
            resolve(response.data);
            console.log(`Authentification done`);
        })
        .catch(error => {
            reject(error);
        });
    });
}

function sleeper(ms) {
    return function(x) {
        return new Promise(resolve => setTimeout(() => resolve(x), ms));
    };
}


function callPostImageRecognizeFunction (body, samples_path){
    return new Promise(function (resolve, reject){
        api = new AsposeOcrCloudv50Api.RecognizeImageApi()
        api.apiClient.basePath = "https://api.aspose.cloud"
        // var body_res = JSON.parse(body)
        api.apiClient.authentications = {
            'JWT': {
                type: 'oauth2',
                accessToken: body['access_token']
            }
        }
        api.apiClient.defaultHeaders = {
            "User-Agent": "NodeJS  demo project"
        }

        var img_path = samples_path + "/latin.png"
        var filePath = path.normalize(img_path);
        var buffer = Buffer.alloc(1024 * 50);
        var fileData = fs.readFileSync(filePath, buffer);

        let settings = new AsposeOcrCloudv50Api.OCRSettingsRecognizeImage()
        let requestData = new AsposeOcrCloudv50Api.OCRRecognizeImageBody(fileData.toString('base64'), settings)
        api.postRecognizeImage(requestData, (err, res, body) => {
            if (err) {
                reject(err)
            }
            resolve(res)
        })
    })
}


function callGetImageFunction(id){
    console.log('Writing id...')
    console.log(id)
    return new Promise(function(resolve, reject){
        api.getRecognizeImage(id, (err, res, body) => {
            if (err) {
                reject(err)
            }
            console.log(`Success`)
            resolve(body)
        })
    })
}

function processResult(body){
    console.log('Processing results...')
    const json_res = JSON.parse(body['text']);
    for (const key in json_res['results']){
        console.log(Buffer.from(json_res['results'][key]['data'], 'base64').toString('utf-8'))
    }
}


// image recognize pipeline example
connect().then(
    access_token => callPostImageRecognizeFunction(access_token, sampes_dir_path)
).then(
    x => new Promise(resolve => setTimeout(() => resolve(x), 10000))
).then(
    id => callGetImageFunction(id)
).then(
    body => processResult(body)
).catch(
    error => {
        console.log(error)
    }
)
