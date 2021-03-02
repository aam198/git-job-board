import React from 'react';
import { Card } from 'react-bootstrap'; 


export default function CardExample() {
    return (
        <div>
             <Card className= "margin-3 box">
                 <Card.Title><span className="text-muted font-weight-light">Just a title</span></Card.Title>
             <Card.Body>
                 <div>Just some text</div>
                </Card.Body>
             </Card>
        </div>
    )
}
