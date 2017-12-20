var BodyMongoler = function(req) {
  var ufoImage = "https://s14.postimg.org/dve7x5ump/UFO.png"
  var ghostImage = "https://s14.postimg.org/hqhlzrvsx/ghostie.png"
  var cryptidImage = "https://s14.postimg.org/gkdm11s3l/nessie.png"
  var unknownImage = "https://s14.postimg.org/vvitnnctt/questionmark.png"

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

  req.body.sceptics = parseInt(req.body.sceptics)
  req.body.believers = parseInt(req.body.believers)

  req.body.location=JSON.parse(req.body.location);


  // Sorts dates
  var newDate = req.body.date.split("-");
  newDate.reverse();
  editedDate = "";
  for (var i=0; i < 2; i++) {
    editedDate += newDate[i] + "/";
  }
  editedDate += newDate[2];
  req.body.date = editedDate;

  req.body.location.lat = parseFloat(req.body.location.lat);
  req.body.location.lng = parseFloat(req.body.location.lng);
}

module.exports = BodyMongoler;
