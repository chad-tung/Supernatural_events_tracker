var BodyMongoler = function(req) {
  var ufoImage = "https://image.flaticon.com/icons/svg/645/645424.svg"
  var ghostImage = "https://s17.postimg.org/ebzur4svz/ghostie.png"
  var cryptidImage = "https://s17.postimg.org/lrz4d0obz/nessie.png"
  var unknownImage = "https://s17.postimg.org/5waa9vanz/questionmark.png"
  
  if (req.body.image == "") {
    if (req.body.type == "UFO") {
      req.body.image = ufoImage;
    }
    if (req.body.type == "Cryptid") {
      req.body.image = cryptidImage;
    }
    if (req.body.type == "Ghost") {
      req.body.image = ghostImage;
    }
    if (req.body.type == "Unidentified") {
      req.body.image = unknownImage;
    }
  }
  if (req.body.author == "") {
    req.body.author = "Anonymous";
  }
  req.body.location.lat = parseFloat(req.body.location.lat);
  req.body.location.lng = parseFloat(req.body.location.lng);
}

module.exports = BodyMongoler;
