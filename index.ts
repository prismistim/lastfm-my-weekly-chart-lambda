import { LastFmApiRes } from './types'
import * as dotenv from 'dotenv'
import { api as misskeyApi } from 'misskey-js'

const API_URL = 'http://ws.audioscrobbler.com/2.0'

dotenv.config()

export const handler = async () => {
  const res = await fetch(
    API_URL +
      `?method=user.getweeklytrackchart&user=Prismist-M&api_key=${process.env['LF_API_KEY']}&format=json`
  )

  const resJson: LastFmApiRes = await res.json()

  if (resJson.weeklytrackchart.track.length === 0) {
    return
  }

  const targetTracks = resJson.weeklytrackchart.track.filter(
    (track) => parseInt(track['@attr'].rank) < 6
  ).sort((a, b) => parseInt(a['@attr'].rank) - parseInt(b['@attr'].rank))

  let postDescriptions = ''

  targetTracks.forEach((track, index) => {
    if (index !== 0) postDescriptions += '\n'
    postDescriptions += `${track['@attr'].rank}: ${track.artist['#text']} - ${track.name} (${track.playcount})`
  })

  postDescriptions += '\n[last.fm/Prismist-M](https://last.fm/user/prismist-m)\n#my_weekly_best_tracks #lastfm'

  const cli = new misskeyApi.APIClient({
    origin: 'https://misskey.io',
    credential: process.env['MISSKEY_TOKEN'],
  })

  await cli.request('notes/create', {
    visibility: 'public',
    text: postDescriptions,
  })
}
