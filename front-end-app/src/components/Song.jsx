import React from 'react';
import { Card, Button, CardHeader, CardText, Row, Col } from 'reactstrap';



const Song = props => {
  return (
    <div>
      <Col>
        <Card xs="12" md="4" xl="3" className='card'>
          <CardHeader className='header'>{props.song.title}</CardHeader>
          <CardText>{props.song.artists.map(artist => {
            return(
            
            <CardText>{artist}</CardText>
            )
          })}</CardText>
          <Button className='cardButton'>Add To Favorites</Button>
        </Card>
      </Col>
    </div>
  )
}

export default Song