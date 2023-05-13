type Artist = {
  mbid: string
  '#text': string
}

type Image = {
  size: 'small' | 'medium' | 'large'
  '#text': string
}

type TrackAttr = {
  rank: string
}

type Track = {
  artist: Artist
  image: Image[]
  mbid: string
  url: string
  name: string
  '@attr': TrackAttr
  playcount: string
}

export type LastFmApiRes = {
  weeklytrackchart: {
    track: Track[]
  }
  '@attr': {
    from: string
    user: string
    to: string
  }
}
