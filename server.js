var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
  'article-one' : {
  title: 'Article one | prabunarayanan',
  heading: 'Article one',
  date: 'February 14 1996',
  content: ` <p>
                   This is article one
                </p>
                <p>
                    This is me Prabu
                </p>
                <p>
                    minion
                </p>`
},
  'article-two' : {
      title: 'Article two | prabunarayanan',
      heading: 'Article two',
      date: 'February 14 2016',
      content: ` <p>
                       This is article two
                    </p>
                    <p>
                        This is me yogi
                    </p>
                    <p>
                        minion 
                    </p>`
      
  },
  'article-three' : {
      title: 'Article Three | prabunarayanan',
      heading: 'Article Three',
      date: 'February 14 2017',
      content: ` <p>
                       This is article three
                       Romeo & juliet
                    </p>
                    <p>
                        Buddy boy
                    </p>
                    <p>
                        minion = Kundhani
                    </p>`
      
  },
};

function createTemplate (data) { 
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
        var htmlTemplate = `
        <html>
            <head>
                <title>
                    ${title}
                </title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="/ui/style.css" rel="stylesheet" />
            </head>
           
            <body>
                <div class="container">
                <div>
                    <a href="/">Chammu</a>
                    <a href="/article-two">Goyyaka</a>
                    <a href="/article-three">minion</a>
                </div>
                <hr/>
                <h3>
                   ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                    <div>
                        ${content}
                    </div>
                </div>
            </body>
        </html>
        `;
        return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter',function (req,res) {
    counter = counter + 1;
    res.send(counter.toString())
});

var names = [];
app.get('/submit-name', function(req,res) { // URL: /submit-name?name=xxxxxx 
    // Get the name from the request
    var name = req.query.name;
    
    names.push(name);
    // JSON: Javascript Object Notation
    res.send(JSON.stringify(names));
});

app.get('/:articleName' , function (req, res) {
    //articleName == article-one
    //articles[articleName] == {} content object of aticle one
   var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
