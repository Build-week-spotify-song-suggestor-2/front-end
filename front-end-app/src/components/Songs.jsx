import React from 'react';
import {useSelector} from 'react-redux'
import Song from './Song'
import { Container, Row } from 'reactstrap'



const Songs = props => {

  const songs = useSelector(state => state.songs.songData);

  console.log('Songs.js: songs: ', songs)

  return (
    <div>
      <Container>
        <Row>
          {songs.map((song, index) => {
            return(
              <Song song={song} key={index} />
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default Songs
