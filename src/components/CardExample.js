import React from 'react';
import { Card } from 'react-bootstrap'; 


export default function CardExample() {
    return (
        <div>
             <Card className= "margin-3">
             <Card.Body className="neumorph">
                 <div>Just some text</div>
                </Card.Body>
             </Card>
        </div>
    )
}
