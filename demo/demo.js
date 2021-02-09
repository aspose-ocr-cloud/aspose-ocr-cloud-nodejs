/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose" file="demo.js">
*   Copyright (c) 2021 Aspose.OCR for Cloud
* </copyright>
* <summary>
*   Permission is hereby granted, free of charge, to any person obtaining a copy
*  of this software and associated documentation files (the "Software"), to deal
*  in the Software without restriction, including without limitation the rights
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*  copies of the Software, and to permit persons to whom the Software is
*  furnished to do so, subject to the following conditions:
*
*  The above copyright notice and this permission notice shall be included in all
*  copies or substantial portions of the Software.
*
*  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
*  SOFTWARE.
* </summary>
* --------------------------------------------------------------------------------------------------------------------
*/


var helper = require('../test/helper');
var storageApi = require('../src/api/StorageApi');

(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD.
        define(['expect.js', '../src/index'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        factory(require('expect.js'), require('../src/index'));
    } else {
        // Browser globals (root is window)
        factory(root.expect, root.Asposeocrcloud);
    }
}(this, function(expect, Asposeocrcloud) {
    'use strict';

    var fs = require('fs');
    var path = require('path');
    var instance = new Asposeocrcloud.OcrApi(helper.conf);
    var local_src_folder = __dirname + "/../"+ helper.conf['testData'];

    function recognizeFromUrl() {
        var imageUrl = "https://upload.wikimedia.org/wikipedia/commons/2/2f/Book_of_Abraham_FirstPage.png";
        instance.RecognizeFromUrlAuto(imageUrl, function (err, data, res) {
            if (err) throw err;
            expect(200).to.be(res.status);
            console.log("OK");
            console.log(data);
        });
    }

    function recognizeFromUrl_with_options() {
        var imageUrl = "https://upload.wikimedia.org/wikipedia/commons/2/2f/Book_of_Abraham_FirstPage.png";
        instance.RecognizeFromUrl(imageUrl,Asposeocrcloud.Language.English, false, true, function (err, data, res) {
            if (err) throw err;
            expect(200).to.be(res.status);
            console.log("OK");
            console.log(data);
        });
    }

    function recognizeFromContent() {
        var filePath = path.normalize(local_src_folder + "/" + "10.png");
        var buffer = Buffer.alloc(1024 * 50);
        var fileData = fs.readFileSync(filePath, buffer);

        instance.RecognizeFromContentAuto(fileData, function (err, data, res) {
            if (err) throw err;
            expect(200).to.be(res.status);
            console.log("OK\n-----------------------------------------------------------------------------------");
            console.log(data);
        });
    }

    function recognizeFromContent_with_options() {
        var filePath = path.normalize(local_src_folder + "/" + "de_1.jpg");
        var buffer = Buffer.alloc(1024 * 50);
        var fileData = fs.readFileSync(filePath, buffer);

        instance.RecognizeFromContent(fileData, Asposeocrcloud.Language.German, true, true, function (err, data, res) {
            if (err) throw err;
            expect(200).to.be(res.status);
            console.log("OK\n-----------------------------------------------------------------------------------");
            console.log(data);
        });
    }

    function recognizeFromStorage() {
        var name = "10.png";

        // Upload test data to server
        helper.uploadFileToStorage(name, null, function (err, data, res) {
            expect(200).to.be(res.status);

            instance.RecognizeFromStorageAuto(name, helper.conf["remoteFolder"], null, function (err, data, res) {
                if (err) throw err;
                expect(200).to.be(res.status);
                console.log("OK");
                console.log(data);
            });
        });
    }

    function recognizeFromStorage_with_options() {
        var name = "de_1.jpg";

        // Upload test data to server
        helper.uploadFileToStorage(name, null, function (err, data, res) {
            expect(200).to.be(res.status);

            instance.RecognizeFromStorage(name, helper.conf["remoteFolder"], null, Asposeocrcloud.Language.German, true, true, function (err, data, res) {
                if (err) throw err;
                expect(200).to.be(res.status);
                console.log("OK");
                console.log(data);
            });
        });
    }

    function recognizeRegionsFromUrl() {
        var imageUrl = "https://upload.wikimedia.org/wikipedia/commons/2/2f/Book_of_Abraham_FirstPage.png";
        var regions = [new Asposeocrcloud.OCRRegion(0, new Asposeocrcloud.OCRRect(209,28,283,39)),
                       new Asposeocrcloud.OCRRegion(1, new Asposeocrcloud.OCRRect(24,114,359,185)),
                       new Asposeocrcloud.OCRRegion(2, new Asposeocrcloud.OCRRect(21,201,356,451)),
                       new Asposeocrcloud.OCRRegion(3, new Asposeocrcloud.OCRRect(21,464,359,558))];

        var requestData = new Asposeocrcloud.OCRRequestData(regions, Asposeocrcloud.Language.English, false);

        instance.RecognizeRegionsFromUrl(imageUrl, requestData, function (err, data, res) {
            if (err) throw err;
            expect(200).to.be(res.status);
            console.log("OK");
            console.log(data);
        });
    }

    function recognizeRegionsFromStorage() {
        var regions = [new Asposeocrcloud.OCRRegion(0, new Asposeocrcloud.OCRRect(209,28,283,39)),
            new Asposeocrcloud.OCRRegion(1, new Asposeocrcloud.OCRRect(24,114,359,185)),
            new Asposeocrcloud.OCRRegion(2, new Asposeocrcloud.OCRRect(21,201,356,451)),
            new Asposeocrcloud.OCRRegion(3, new Asposeocrcloud.OCRRect(21,464,359,558))];

        var name = "Book_of_Abraham_FirstPage.png";
        var requestData = new Asposeocrcloud.OCRRequestDataStorage(regions, Asposeocrcloud.Language.English, false, name, null, helper.conf['remoteFolder']);

        // Upload test data to server

        helper.uploadFileToStorage(name, null, function (err, data, res) {
            expect(200).to.be(res.status);

            instance.RecognizeRegionsFromStorage(requestData, function (err, data, res) {
                if (err) throw err;
                expect(200).to.be(res.status);
                console.log("OK");
                console.log(data);
            });
        });
    }

    function recognizeRegionsFromContent() {
        var filePath = path.normalize(local_src_folder + "/" + "Book_of_Abraham_FirstPage.png");
        var buffer = Buffer.alloc(1024 * 50);
        var fileData = fs.readFileSync(filePath, buffer);

        var regions = [ new Asposeocrcloud.OCRRegion(0, new Asposeocrcloud.OCRRect(209,28,283,39)),
                        new Asposeocrcloud.OCRRegion(1, new Asposeocrcloud.OCRRect(24,114,359,185)),
                        new Asposeocrcloud.OCRRegion(2, new Asposeocrcloud.OCRRect(21,201,356,451)),
                        new Asposeocrcloud.OCRRegion(3, new Asposeocrcloud.OCRRect(21,464,359,558))];

        var requestData = new Asposeocrcloud.OCRRequestData(regions, Asposeocrcloud.Language.English, false);

        instance.RecognizeRegionsFromContent(fileData, requestData, function (err, data, res) {
            if (err) throw err;
            expect(200).to.be(res.status);
            console.log("OK");
            console.log(data);
        });
    }

    recognizeFromUrl();
    recognizeFromUrl_with_options();
    recognizeFromContent();
    recognizeFromContent_with_options();
    recognizeFromStorage();
    recognizeFromStorage_with_options();
    recognizeRegionsFromUrl();
    recognizeRegionsFromStorage();
    recognizeRegionsFromContent();

})
)
