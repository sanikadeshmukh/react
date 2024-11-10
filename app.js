console.log('Running');

//Jsx - javascript Xml


var template = React.createElement(

    "h1",
    { id: "someid" },
    "Something new"
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);