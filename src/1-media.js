
class MediaItem {
  constructor(title, duration) {
    this.title = title;
    this.duration = duration;
  }

  play() {
    return `Playing: ${this.title}`;
  }

  getFormattedDuration() {
    const minutes = Math.floor(this.duration / 60);
    const seconds = this.duration % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }
}

class Song extends MediaItem {
  constructor(title, duration, artist) {
    super(title, duration);
    this.artist = artist;
  }

  play() {
    return `Playing: ${this.title} by ${this.artist}`;
  }
}

class Podcast extends MediaItem {
  constructor(title, duration, host, episodeNumber) {
    super(title, duration);
    this.host = host;
    this.episodeNumber = episodeNumber;
  }

  play() {
    return `Playing: ${this.title} with host ${this.host}, Episode ${this.episodeNumber}`;
  }
}

class Audiobook extends MediaItem {
  constructor(title, duration, author, narrator) {
    super(title, duration);
    this.author = author;
    this.narrator = narrator;
  }

  play() {
    return `Playing: ${this.title} by ${this.author}, narrated by ${this.narrator}`;
  }
}

const test = () => {
  const song = new Song("Bohemian Rhapsody", 354, "Queen");
  const podcast = new Podcast("Tech Talk", 2400, "Jane Smith", 42);
  const audiobook = new Audiobook(
    "The Great Gatsby",
    32400,
    "F. Scott Fitzgerald",
    "Jake Gyllenhaal"
  );

  const mediaLibrary = [song, podcast, audiobook];

  mediaLibrary.forEach(media => {
    console.log(media.play());
  });
};

module.exports = { MediaItem, Song, Podcast, Audiobook };
