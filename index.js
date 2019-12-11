var fs = require('fs');
var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());



app.get('/hello', function(req, res) {
    res.send('Hello World!');
});

app.post('/api/auth', function (req, res) {
    token = {
        type: 'JWT',
        value: '1234'
    }
    res.send(token);
});

app.get('/api/user', function (req, res) {
    user = {
        nmUser: 'Usuário Teste',
        addresses:[],
        profiles: [{
            id: 1,
            state: {
                id: 1
            },
            profile: {
                id: 10021,
                nmUserCorporateProfile: 'PSYCHOLOGIST'
            },
            corporate: {
                id: 1,
                nmCorporate: 'Empresa Teste'
            }
        }]
    }
    res.send(user);
});

app.get('/api/user/documents/pendencies', function(req, res){
    res.send([]);
});

app.get('/api/user/documents/psychologist/pendencies', function(req, res){
    res.send([]);
});
 
app.get('/api/geo/countries', function(req, res){
    res.send([{
        id: 1,
        nmCountry: 'BRAZIL'
    }]);
});

app.get('/api/psychologist/applications', function(req, res){
    res.send([{
        id: 1,
        nmApplication: 'MEMORE Teste',
        dtApplication: new Date(01/01/2019)
    }]);
});

app.get('/api/psychologist/application/:id', function(req, res){
    res.send({
        id: 1,
        nmApplication: 'MEMORE Teste',
        dtApplication: new Date(2019, 0, 1),
        state: {
            id: 3,
            nmApplicationState: 'EXECUTED'
        },
        //license.licensePackage.product.id
        license: {
            licensePackage: {
                product: {
                    id: 10 //memore
                }
            }
        },
        attempts: [{
            id: 1, 
            content: {
                nmFileName: "memore.jpg",
                bnContent: fs.readFileSync('memore.jpg').toString('base64'),
                mimeType: {
                    nmName: 'Imagem JPEG',
                    nmMimeType: 'image/jpeg',
                    nmExtension: '.jpg'
                }
            }
        }]
    });
});

app.get('/api/psychologist/application/attempt/:id/feedback', function(req, res){
    res.send({
        content: {
            nmFileName: "memore.jpg",
            bnContent: fs.readFileSync('memore.jpg').toString('base64'),
            mimeType: {
                nmName: 'Imagem JPEG',
                nmMimeType: 'image/jpeg',
                nmExtension: '.jpg'
            }
        },
        points: [
            {vrScore: 0, examPoint: {idLocal: 0, vrPercYi:  7.20, vrPercXi: 11, vrPercWidth: 8.67, vrPercHeight: 8.64}},
            {vrScore: 1, examPoint: {idLocal: 1, vrPercYi: 15.84, vrPercXi: 11, vrPercWidth: 8.67, vrPercHeight: 8.64}},
            {vrScore: 0, examPoint: {idLocal: 2, vrPercYi: 24.48, vrPercXi: 11, vrPercWidth: 8.67, vrPercHeight: 8.64}},
            {vrScore: 0, examPoint: {idLocal: 3, vrPercYi: 33.12, vrPercXi: 11, vrPercWidth: 8.67, vrPercHeight: 8.64}},
            {vrScore: 1, examPoint: {idLocal: 4, vrPercYi: 41.76, vrPercXi: 11, vrPercWidth: 8.67, vrPercHeight: 8.64}},
            {vrScore: 0, examPoint: {idLocal: 5, vrPercYi: 50.40, vrPercXi: 11, vrPercWidth: 8.67, vrPercHeight: 8.64}},
            {vrScore: 1, examPoint: {idLocal: 6, vrPercYi: 59.04, vrPercXi: 11, vrPercWidth: 8.67, vrPercHeight: 8.64}},
            {vrScore: 1, examPoint: {idLocal: 7, vrPercYi: 67.68, vrPercXi: 11, vrPercWidth: 8.67, vrPercHeight: 8.64}},
            {vrScore: 1, examPoint: {idLocal: 8, vrPercYi: 76.32, vrPercXi: 11, vrPercWidth: 8.67, vrPercHeight: 8.64}},
            {vrScore: 0, examPoint: {idLocal: 9, vrPercYi: 84.96, vrPercXi: 11, vrPercWidth: 8.67, vrPercHeight: 8.64}},
            {vrScore: 1, examPoint: {idLocal: 10, vrPercYi:  7.20, vrPercXi: 45.6, vrPercWidth: 8.67, vrPercHeight: 8.64}},
            {vrScore: 1, examPoint: {idLocal: 11, vrPercYi: 15.84, vrPercXi: 45.6, vrPercWidth: 8.67, vrPercHeight: 8.64}},
            {vrScore: 1, examPoint: {idLocal: 12, vrPercYi: 24.48, vrPercXi: 45.6, vrPercWidth: 8.67, vrPercHeight: 8.64}},
            {vrScore: 1, examPoint: {idLocal: 13, vrPercYi: 33.12, vrPercXi: 45.6, vrPercWidth: 8.67, vrPercHeight: 8.64}},
            {vrScore: 1, examPoint: {idLocal: 14, vrPercYi: 41.76, vrPercXi: 45.6, vrPercWidth: 8.67, vrPercHeight: 8.64}},
            {vrScore: 1, examPoint: {idLocal: 15, vrPercYi: 50.40, vrPercXi: 45.6, vrPercWidth: 8.67, vrPercHeight: 8.64}},
            {vrScore: 1, examPoint: {idLocal: 16, vrPercYi: 59.04, vrPercXi: 45.6, vrPercWidth: 8.67, vrPercHeight: 8.64}},
            {vrScore: 1, examPoint: {idLocal: 17, vrPercYi: 67.68, vrPercXi: 45.6, vrPercWidth: 8.67, vrPercHeight: 8.64}},
            {vrScore: 1, examPoint: {idLocal: 18, vrPercYi: 76.32, vrPercXi: 45.6, vrPercWidth: 8.67, vrPercHeight: 8.64}},
            {vrScore: 1, examPoint: {idLocal: 19, vrPercYi: 84.96, vrPercXi: 45.6, vrPercWidth: 8.67, vrPercHeight: 8.64}},
            {vrScore: 1, examPoint: {idLocal: 20, vrPercYi:  7.20, vrPercXi: 80.2, vrPercWidth: 8.67, vrPercHeight: 8.64}},
            {vrScore: 1, examPoint: {idLocal: 21, vrPercYi: 15.84, vrPercXi: 80.2, vrPercWidth: 8.67, vrPercHeight: 8.64}},
            {vrScore: 1, examPoint: {idLocal: 22, vrPercYi: 24.48, vrPercXi: 80.2, vrPercWidth: 8.67, vrPercHeight: 8.64}},
            {vrScore: 1, examPoint: {idLocal: 23, vrPercYi: 33.12, vrPercXi: 80.2, vrPercWidth: 8.67, vrPercHeight: 8.64}},
            {vrScore: 1, examPoint: {idLocal: 24, vrPercYi: 41.76, vrPercXi: 80.2, vrPercWidth: 8.67, vrPercHeight: 8.64}},
            {vrScore: 1, examPoint: {idLocal: 25, vrPercYi: 50.40, vrPercXi: 80.2, vrPercWidth: 8.67, vrPercHeight: 8.64}},
            {vrScore: 1, examPoint: {idLocal: 26, vrPercYi: 59.04, vrPercXi: 80.2, vrPercWidth: 8.67, vrPercHeight: 8.64}},
            {vrScore: 1, examPoint: {idLocal: 27, vrPercYi: 67.68, vrPercXi: 80.2, vrPercWidth: 8.67, vrPercHeight: 8.64}},
            {vrScore: 1, examPoint: {idLocal: 28, vrPercYi: 76.32, vrPercXi: 80.2, vrPercWidth: 8.67, vrPercHeight: 8.64}},
            {vrScore: 1, examPoint: {idLocal: 29, vrPercYi: 84.96, vrPercXi: 80.2, vrPercWidth: 8.67, vrPercHeight: 8.64}}
        ]
    });
});

app.listen(443, function () {
  console.log('Example app listening on port 443!');
});
