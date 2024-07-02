import SongImage_1 from "../assests/images/song.jpg";
import SongImage_2 from "../assests/images/song_2.jpg";
import SongImage_3 from "../assests/images/song_3.jpg";
import SongImage_4 from "../assests/images/song_4.jpg";

const songsData = [
  {
    title: "Wrong Semicolon",
    image: getRandomImage(),
    artist: "Artist 1",
  },
  {
    title: "Essential coffee",
    image: getRandomImage(),
    artist: "Artist 2",
  },
  {
    title: "Hmm Standard code",
    image: getRandomImage(),
    artist: "Artist 3",
  },
  {
    title: "Focus on Deadline",
    image: getRandomImage(),
    artist: "Artist 4",
  },
  {
    title: "24/7 Coding Non-stop",
    image: getRandomImage(),
    artist: "Artist 5",
  },
  {
    title: "Bounty On My Code",
    image: getRandomImage(),
    artist: "Artist 6",
  },
  {
    title: "Debugging Battles",
    image: getRandomImage(),
    artist: "Artist 7",
  },
  {
    title: "Dancing While Coding",
    image: getRandomImage(),
    artist: "Artist 8",
  },
  {
    title: "Hiding from investors",
    image: getRandomImage(),
    artist: "Artist 9",
  },
  {
    title: "Doctor, I Can't C#",
    image: getRandomImage(),
    artist: "Artist 10",
  },
  {
    title: "Devil's Validation",
    image: getRandomImage(),
    artist: "Artist 11",
  },
  {
    title: "Apocalyptic Java",
    image: getRandomImage(),
    artist: "Artist 12",
  },
  {
    title: "Infinite Acoustic",
    image: getRandomImage(),
    artist: "Artist 13",
  },
  {
    title: "Rain Sounds",
    image: getRandomImage(),
    artist: "Artist 14",
  },
  {
    title: "Not Enough RAM",
    image: getRandomImage(),
    artist: "Artist 15",
  },
  {
    title: "Coding From A Jungle",
    image: getRandomImage(),
    artist: "Artist 16",
  },
  {
    title: "Oops I Hardcoded 😅",
    image: getRandomImage(),
    artist: "Artist 17",
  },
  {
    title: "Same Phone. New Price",
    image: getRandomImage(),
    artist: "Artist 18",
  },
  {
    title: "Coding RAP",
    image: getRandomImage(),
    artist: "Artist 19",
  },
  {
    title: "Sing While Coding",
    image: getRandomImage(),
    artist: "Artist 20",
  },
  {
    title: "Coding like Elvis",
    image: getRandomImage(),
    artist: "Artist 21",
  },
  {
    title: "Tres Commas Jam",
    image: getRandomImage(),
    artist: "Artist 22",
  },
  {
    title: "Dorm room Coding",
    image: getRandomImage(),
    artist: "Artist 23",
  },
  {
    title: "Mr.Robot's Secret",
    image: getRandomImage(),
    artist: "Artist 24",
  },
  {
    title: "Recursive Code",
    image: getRandomImage(),
    artist: "Artist 25",
  },
  {
    title: "Elon's Mars Radio",
    image: getRandomImage(),
    artist: "Artist 26",
  },
  {
    title: "Gilfoyle's Hacking Jam",
    image: getRandomImage(),
    artist: "Artist 27",
  },
  {
    title: "Coding Mission",
    image: getRandomImage(),
    artist: "Artist 28",
  },
  {
    title: "Uncommented Code",
    image: getRandomImage(),
    artist: "Artist 29",
  },
  {
    title: "Maker In Love 💚",
    image: getRandomImage(),
    artist: "Artist 30",
  },
  {
    title: "Compiler Got Angry 😡",
    image: getRandomImage(),
    artist: "Artist 31",
  },
  {
    title: "Unbelievable Focus 🙏",
    image: getRandomImage(),
    artist: "Artist 32",
  },
  {
    title: "Lost in a Forest 🌲",
    image: getRandomImage(),
    artist: "Artist 33",
  },
  {
    title: "You Compile Me 💚",
    image: getRandomImage(),
    artist: "Artist 34",
  },
  {
    title: "Stuck in an elevator 😧",
    image: getRandomImage(),
    artist: "Artist 35",
  },
];

function getRandomImage() {
  const images = [SongImage_1, SongImage_2, SongImage_3, SongImage_4];
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

export default songsData;
