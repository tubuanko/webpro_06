app.get("/bbs", (req,res) => {
    console.log("GET /BBS");
    res.json( {test: "GET /BBS" });
});

app.get("/bbs/:id", (req,res) => {
    console.log( "GET /BBS/" + req.params.id );
    res.json( {test: "GET /BBS/" + req.params.id });
});