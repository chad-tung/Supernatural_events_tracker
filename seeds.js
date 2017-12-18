use paranormal;

db.dropDatabase();

db.events.insert({
  title: "Weird lights in sky",
  date: "14/10/2017",
  location: {
    lat: 56.035821,
    lng: -4.849224000000049
  },
  type: "UFO",
  description: "I was oout for a walk with my dog and saw a glowing ball of light hovering about 100 metres above me. It hung there for about 5 minutes and then zoomed off to the north",
  image:"http://vvng.victorvalleynews.netdna-cdn.com/wp-content/uploads/2015/12/strange-light-in-the-sky.jpg",
  author: "skeptic236"
});

db.events.insert({
  title: "Loch Ness Monster sighting?",
  date: "07/07/2017",
  location: {
    lat: 57.258624,
    lng: -4.488086000000067
  },
  type: "Cryptid",
  description: "I'd stopped the car to take some photos of the loch, when I saw a huge creature swimming out along the loch, and a fin crested out of the water",
  image:"http://ichef.bbci.co.uk/news/976/cpsprodpb/58D0/production/_98763722_lochnesspic976.jpg",
  author:"nessiespotter"
});

db.events.insert({
  title: "strange presence followed me",
  date: "03/04/2017",
  location: {
    lat: 57.069928,
    lng: -3.662449000000038
  },
  type: "Unidentified",
  description: "I am a keen mountaineer, and spent my summer holidays bagging a few munros. I had reached the summit in the earliy afternoon. After a pause for a cup of tea from my thermos, I started to hurry down, as the weather was changing and a mist started to come in, when I began to think I heard something else than merely the noise of my own footsteps. Every few steps I took I heard a crunch, then another crunch as if someone was walking after me but taking steps three or four times the length of my own. I said to myself 'this is all nonsense'. I listened and heard it again but could see nothing in the mist . As I walked on and the eerie crunch, crunch sounded behind me I was seized with terror and took to my heels, staggering blindly among the boulders for four or five miles nearly down to Rothiemurchus Forest. Whatever you make of it I do not know, but there is something very strange about the top of Ben MacDhui and will not go back there again by myself I know.",
  image:"https://vignette.wikia.nocookie.net/cryptidz/images/9/90/ImagesCAS5I97H.jpg/revision/latest?cb=20140409050343",
  author: "munrobagger"
});

db.events.insert({
  title: "Ghost on the subway",
  date: "19/11/2017",
  location: {
    lat: 55.849073,
    lng: -4.26735199999996
  },
  type: "Ghost",
  description: "I am an SPT employee, but I can't give you any more details, in case I lose my job. I was carrying out some routine maintenance of the outer tunnel near West Street station, when I saw something terrible. I had turned around, and this kid appeared out of the shadows further down the tunnel, and at first I thought it was a ned playing silly games. I shouted out asking what the hell he was doing down there, when it turned around, I realised something was wrong with his face, as it was distorted and animal like. He appeared to be gnawing on something, it looked like raw meat. As I stepped back in horror, he disappeared. I don't know what I saw, and I can't tell anyone at work, as they'd all think I'd lost my marbles. ",
  image:"https://www.flickr.com/photos/jamescridland/2634266321",
  author:"nessiespotter"
});
