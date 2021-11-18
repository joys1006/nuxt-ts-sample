var fs = require('fs');
var path = require('path');
var Q = require('q');
var express = require('express');
var bodyParser = require('body-parser');
var port = 9999;
var listFile = path.join(__dirname, 'lists.json');
var app = express();
var moment = require('moment');

app.use('/', express.static(path.join(__dirname, 'src')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var readData = function() {
    const defer = Q.defer();
    fs.readFile(listFile, function(error, data) {
        if (error) {
            return defer.reject(error);
        }
        return defer.resolve(JSON.parse(data));
    });
    return defer.promise;
};

var writeData = function(data) {
    const defer = Q.defer();
    fs.writeFile(listFile, JSON.stringify(data, null, 2), function(error) {
        if (error) {
            return defer.reject(error);
        }
        return defer.resolve();
    });
    return defer.promise;
};

var getListPage = function(page, size) {
    page = page ? page - 1 : 0;
    return readData().then(function(data) {
        return extractDataByPage(data, page, size);
    });
};

var extractDataByPage = function(data, page, size) {
    const startIndex = page * size;
    return Q.resolve({total: data.length, list: data.sort((a, b) => b.no - a.no).slice(startIndex, startIndex + size)});
};

app.use(function(req, res, next) {
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

// list
app.get('/api/lists', function (req, res) {
    getListPage()
        .then(function(data) {
            res.json(data);
        })
        .fail(function(error) {
            console.error(error);
            res.sendStatus(500);
        });
});

// write
app.post('/api/write', function (req, res) {
    readData()
        .then(function(data) {
            let no = 1;
            if (data.length > 0) {
                no = data[data.length - 1].no + 1;
            }
            const newlist = {
                no: no,
                title: req.body.title,
                content: req.body.content,
                author: req.body.author,
                createdAt: moment(new Date()).format('YYYY-MM-DD'),
                updatedAt: moment(new Date()).format('YYYY-MM-DD')
            };
            data.unshift(newlist);
            return writeData(data)
                   .then(function() {
                        res.json(data);
                   })
                   .fail(function(error) {
                       console.error(error);
                       res.sendStatus(500);
                   });
        });
});

// paging
app.get('/api/lists/:page', function (req, res) {
    const page = req.params.page;
    const size = (req.params.size) ? req.params.size : 10;
    getListPage(page, size)
        .then(function(data) {
            res.json(data);
        })
        .fail(function(error) {
            console.error(error);
            res.sendStatus(500);
        });
});

app.listen(port, function() {
    console.log('Server started: http://localhost:' + port + '/');
});

