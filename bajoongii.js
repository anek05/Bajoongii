function play() {
  // var audio = document.getElementById("audio");
  // audio.play();
  var b1 = new Audio('./Audio/b1.mp3')
  var b2 = new Audio('./Audio/b2.mp3')
  var b3 = new Audio('./Audio/b3.mp3')
  var b4 = new Audio('./Audio/b4.mp3')
  var b5 = new Audio('./Audio/b5.mp3')
  var b6 = new Audio('./Audio/b6.mp3')
  var b7 = new Audio('./Audio/b7.mp3')
  var b8 = new Audio('./Audio/b8.mp3')
  var b9 = new Audio('./Audio/b9.mp3')
  var b10 = new Audio('./Audio/b10.mp3')
  var b11 = new Audio('./Audio/b11.mp3')
  var b12 = new Audio('./Audio/b12.mp3')
  var b13 = new Audio('./Audio/b13.mp3')
  var b14 = new Audio('./Audio/b14.mp3')
  var b15 = new Audio('./Audio/b15.mp3')
  var b16 = new Audio('./Audio/b16.mp3')
  var b17 = new Audio('./Audio/b17.mp3')
  var b18 = new Audio('./Audio/b18.mp3')
  var b19 = new Audio('./Audio/b19.mp3')

  //max 19 - min 1
  var random = Math.floor(Math.random() * (19 - 1 + 1)) + 1;
  switch (random) {
    case 1:
      b1.play();
      break;
    case 2:
      b2.play();
      break;
    case 3:
      b3.play();
      break;
    case 4:
      b4.play();
      break;
    case 5:
      b5.play();
      break;
    case 6:
      b6.play();
      break;
    case 7:
      b7.play();
      break;
    case 8:
      b8.play();
      break;
    case 9:
      b9.play();
      break;
    case 10:
      b10.play();
      break;
    case 11:
      b11.play();
      break;
    case 12:
      b12.play();
      break;
    case 13:
      b13.play();
      break;
    case 14:
      b14.play();
      break;
    case 15:
      b15.play();
      break;
    case 16:
      b16.play();
      break;
    case 17:
      b17.play();
      break;
    case 18:
      b18.play();
      break;
    case 19:
      b19.play();

  }
}