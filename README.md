# Aspose.OCR Cloud Node.js SDK
[Aspose.OCR Cloud](https://products.aspose.cloud/ocr/cloud) is a simple SDK used to add text recognition to your app with merely a few lines of code.

In detail, it's a set of SDKs for optical character recognition and document scanning in our Cloud. It supports reading and recognizing text from most commonly used raster image formats. Just pass a specific image to the Aspose.OCR Cloud API, and it will return a response with recognized text.

It is easy to get started with Aspose.OCR Cloud, and there is nothing to install. Create an account at Aspose Cloud and get your application information, then you are ready to use [SDKs](#asposeocr-cloud-sdks)

- API version: 21.2.0
- Package version: 21.2.0

## Features:
- Automatic skew correction
- Automatic and manual document layout detection
- Advanced automated image pre-processing
- Extract and recognize text from images via OCR
- Supports multiple international languages
- High speed with no hardware resources
- Multilanguage

## How to use the SDK?

Our API is completely independent of your operating system, database system, or development language. You can use any language and platform that supports HTTP to interact with our API. However, manually writing client code can be difficult, error-prone, and time-consuming. Therefore, we have provided and support [SDKs](#asposeocr-cloud-sdks) in many development languages to make it easier to integrate with us.

### Prerequisites
To use Aspose OCR for Cloud Node.js SDK you need to register an account with [Aspose Cloud](https://www.aspose.cloud/) and lookup/create App Key and SID at [Cloud Dashboard](https://dashboard.aspose.cloud/#/apps). There is a free quota available. For more details, see [Aspose Cloud Pricing](https://purchase.aspose.cloud/pricing).

### Installation

#### npm
```shell
npm install @asposecloud/aspose-ocr-cloud --save
```

#### git
Install it via:
```shell
    npm install https://github.com/aspose-ocr-cloud/aspose-ocr-cloud-nodejs --save
```

## Getting Started

1. **Sign Up**. Before you begin, you need to sign up for an account on our [Dashboard](https://dashboard.aspose.cloud/) and retrieve your [credentials](https://dashboard.aspose.cloud/#/apps).
2. **Minimum requirements**. This SDK requires [Node.js 6.x and higher](https://nodejs.org/download/release/).
3. **Install Aspose.OCR Cloud Node.js SDK**.

Please, add the following [nmp package](https://www.npmjs.com/package/@asposecloud/aspose-ocr-cloud) to your project.json as a dependency.
```json
{
  "dependencies": {
    "@asposecloud/aspose-ocr-cloud":"^21.2.0"
  }
}
```

Please follow the [installation](#installation) instruction and execute the following JS code:   

NOTE: Use the helper from /test/helper.js for an upload and save data.

```javascript

    // Get keys from aspose site.
    // There is free quota available. 
    // For more details, see https://purchase.aspose.cloud/pricing
	
var conf = {
    "basePath":"https://api.aspose.cloud/v3.0",
    "authPath":"https://api.aspose.cloud/connect/token",
    "apiKey":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
};

//Create storage api for upload to server
var fs = require('fs');
var path = require('path');
var instance = new Asposeocrcloud.OcrApi(conf);

var buffer = Buffer.alloc(1024 * 50);
var fileData = fs.readFileSync(YOUR_FILE_PATH, buffer);

instance.RecognizeFromContentAuto(fileData, function (err, data, res) {
    console.log(data);
});

```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your package from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('@asposecloud/aspose-ocr-cloud')` in javascript files from the directory you ran the last 
command above from.


### Install For browser
The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the OCR pages.

### Webpack Configuration
Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Sample usage
Before fill all fields in configuration object (see [demo](./demo/))   

```javascript
var conf = {
    "basePath":"https://api.aspose.cloud/v3.0",
    "authPath":"https://api.aspose.cloud/connect/token",
    "apiKey":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
};

//Create storage api for upload to server
var fs = require('fs');
var path = require('path');
var instance = new Asposeocrcloud.OcrApi(conf);

var buffer = Buffer.alloc(1024 * 50);
var fileData = fs.readFileSync(YOUR_FILE_PATH, buffer);

instance.RecognizeFromContentAuto(fileData, function (err, data, res) {
    console.log(data);
});

var imageUrl = "https://upload.wikimedia.org/wikipedia/commons/2/2f/Book_of_Abraham_FirstPage.png";
instance.RecognizeFromUrlAuto(imageUrl, function (err, data, res) {
    console.log(data);
});


var regions = [
    new Asposeocrcloud.OCRRegion(0, new Asposeocrcloud.OCRRect(209,28,283,39)),
    new Asposeocrcloud.OCRRegion(1, new Asposeocrcloud.OCRRect(24,114,359,185)),
    new Asposeocrcloud.OCRRegion(2, new Asposeocrcloud.OCRRect(21,201,356,451)),
    new Asposeocrcloud.OCRRegion(3, new Asposeocrcloud.OCRRect(21,464,359,558))];

var requestData = new Asposeocrcloud.OCRRequestData(regions, Asposeocrcloud.Language.English, false);
instance.RecognizeRegionsFromUrl(imageUrl, requestData, function (err, data, res) {
    console.log(data);
});

```

## Documentation for API Endpoints
[DEMO Application](./demo/demo.js) contain various examples of using the Aspose.OCR SDK NodeJS.

Detailed API Reference is avalable at [/docs/](./docs/latest/index.html) folder.

<a name="ocr_api"></a>
#### OCR API
Image formats suported: .bmp, .dib .jpeg, .jpg, .jpe .jp2 .png .webp .pbm, .pgm, .ppm .pxm, .pnm .pfm .sr, .ras .tiff, .tif .exr .hdr, .pic

## Aspose.OCR Cloud SDKs in Popular Languages

| .NET | Java | Python| Android | NodeJS |
|---|---|---|---|---|
| [GitHub](https://github.com/aspose-ocr-cloud/aspose-ocr-cloud-dotnet) |[GitHub](https://github.com/aspose-ocr-cloud/aspose-ocr-cloud-java) | [GitHub](https://github.com/aspose-ocr-cloud/aspose-ocr-cloud-python)|[GitHub](https://github.com/aspose-ocr-cloud/aspose-ocr-cloud-android)|[GitHub](https://github.com/aspose-ocr-cloud/aspose-ocr-cloud-nodejs)
| [NuGet](https://www.nuget.org/packages/Aspose.ocr-Cloud/)| [Maven](https://repository.aspose.cloud/webapp/#/artifacts/browse/tree/General/repo/com/aspose/aspose-ocr-cloud) | [PIP](https://pypi.org/project/aspose-ocr-cloud/) | [Maven](https://repository.aspose.cloud/webapp/#/artifacts/browse/tree/General/repo/com/aspose/aspose-ocr-cloud) | [NPM](https://www.npmjs.com/package/@asposecloud/aspose-ocr-cloud)

[Product Page](https://products.aspose.cloud/ocr/nodejs) | [Documentation](https://docs.aspose.cloud/display/ocrcloud/Home) | [API Reference](https://apireference.aspose.cloud/ocr/) | [Code Samples](https://github.com/aspose-ocr-cloud/aspose-ocr-cloud-java) | [Blog](https://blog.aspose.cloud/category/ocr/) | [Free Support](https://forum.aspose.cloud/c/ocr) | [Free Trial](https://dashboard.aspose.cloud/#/apps)
