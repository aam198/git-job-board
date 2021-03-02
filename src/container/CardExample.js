import React from 'react';
import { Card } from 'react-bootstrap'; 


export default function CardExample() {
    return (
        <div>
             <Card className= "note box">
             <Card.Body>
                 <Card.Title><span className="text-muted font-weight-light">Just an FYI: </span></Card.Title>
                      <div>Since this project is still in dev stage response from the public api may be limited.  </div>
                </Card.Body>
             </Card>
        </div>
    )
}
