import React from 'react';
import { Card } from 'react-bootstrap'; 


export default function CardExample() {
    return (
        <div>
             <Card className= "note box">
             <Card.Body>
                 <Card.Title><span className="text-muted font-weight-light">Just an FYI: </span></Card.Title>
                      <div>Ah, Github Job API has been recently shutdown, will be updating site soon connecting to different job site API. Also, since this project is still in dev stage, response from the public api may be limited.  </div>
                </Card.Body>
             </Card>
        </div>
    )
}
