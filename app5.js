const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));

app.get("/hello1", (req, res) => {
  const message1 = "Hello world";
  const message2 = "Bon jour";
  res.render('show', { greet1:message1, greet2:message2});
});

app.get("/hello2", (req, res) => {
  res.render('show', { greet1:"Hello world", greet2:"Bon jour"});
});

app.get("/icon", (req, res) => {
  res.render('icon', { filename:"./public/Apple_logo_black.svg", alt:"Apple Logo"});
});

app.get("/luck", (req, res) => {
  const num = Math.floor( Math.random() * 6 + 1 );
  let luck = '';
  if( num==1 ) luck = '大吉';
  else if( num==2 ) luck = '中吉';
  else if( num==3 ) luck = '吉';
  else if( num==4 ) luck = '小吉';
  else if( num==5 ) luck = '末吉';
  else if( num==6 ) luck = '凶';
  res.render( 'luck', {number:num, luck:luck} );
});

app.get("/janken", (req, res) => {
  let hand = req.query.hand;
  let win = Number( req.query.win );
  let total = Number( req.query.total );
  console.log( {hand, win, total});
  const num = Math.floor( Math.random() * 3 + 1 );
  let cpu = '';
  if( num==1 ) cpu = 'グー';
  else if( num==2 ) cpu = 'チョキ';
  else if( num==3 ) cpu = 'パー';
  // ここに勝敗の判定を入れる

  let judgement = '';
  if (
    (hand === 'グー' && cpu === 'チョキ'),
    (hand === 'チョキ' && cpu === 'パー'),
    (hand === 'パー' && cpu === 'グー')
  ) {
    judgement = '勝ち';
    win += 1;
  }
  else if (hand === cpu) {
    judgement = '引き分け';
  } 
  else {
    judgement = '負け';
  }
  total += 1;

  const display = {
    your: hand,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  }
  res.render( 'janken', display );
});

app.get("/suziate", (req, res) => {
  let sainome = req.query.sainome;
  let win = Number( req.query.win );
  let total = Number( req.query.total );
  console.log( {sainome, win, total});
  const num = Math.floor( Math.random() * 6 + 1 );
  let kazu = '';
  if( num==1 ) kazu = '1';
  else if( num==2 ) kazu = '2';
  else if( num==3 ) kazu = '3';
  else if( num==4 ) kazu = '4';
  else if( num==5 ) kazu = '5';
  else if( num==6 ) kazu = '6';
  

  let judgement = '';
  if (sainome === kazu) {
    judgement = '正解';
    win += 1;
  } else {
    judgement = 'ハズレ';
  }
  total += 1;

  const display = {
    your: sainome,
    kazu: kazu,
    judgement: judgement,
    win: win,
    total: total
  }
  res.render( 'suziate', display );
});

app.get("/seiza", (req, res) => {
  const num = Math.floor( Math.random() * 4 + 1 );
  let seiza = '';
  if( num==1 ) seiza = 'スーパーラッキーデー';
  else if( num==2 ) seiza = 'いいことがありそう';
  else if( num==3 ) seiza = '悪いことがありそう';
  else if( num==4 ) seiza = '最悪の1日';
  res.render( 'seiza', {number:num, seiza:seiza} );
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));
