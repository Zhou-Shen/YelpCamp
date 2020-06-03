var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
		{name: "Salmon Creek", image: "https://images.unsplash.com/photo-1590273649700-ce3476099423?ixlib=rb-1.2.1&auto=format&fit=crop&w=1368&q=80"},
		{name: "Granite Hill", image: "https://images.unsplash.com/photo-1590273649700-ce3476099423?ixlib=rb-1.2.1&auto=format&fit=crop&w=1368&q=80"},
		{name: "Mountain Goat's Rest", image: "https://images.unsplash.com/photo-1590273649700-ce3476099423?ixlib=rb-1.2.1&auto=format&fit=crop&w=1368&q=80"},
		{name: "Salmon Creek", image: "https://images.unsplash.com/photo-1585332889055-059af80a9b5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"},
		{name: "Granite Hill", image: "https://images.unsplash.com/photo-1590501420868-8fd4c72e8b81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80"},
		{name: "Mountain Goat's Rest", image: "https://images.unsplash.com/photo-1590458143960-8b6538add013?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=683&q=80"},
		{name: "Salmon Creek", image: "https://images.unsplash.com/photo-1585332889055-059af80a9b5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"},
		{name: "Granite Hill", image: "https://images.unsplash.com/photo-1590501420868-8fd4c72e8b81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80"},
		{name: "Mountain Goat's Rest", image: "https://images.unsplash.com/photo-1590458143960-8b6538add013?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=683&q=80"}
];

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/campgrounds", function(req, res){
	

	res.render("campgrounds",{campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
	// get data from form and add to campgrounds array
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image: image}
	campgrounds.push(newCampground);
	//redirect back to campgrounds page
	res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
	res.render("new.ejs");
});

app.listen(3000, function(){
	console.log("The YelpCamp Server Has Started!");
});