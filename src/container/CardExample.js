import React from 'react';
import { Card } from 'react-bootstrap'; 


export default function CardExample() {
    return (
        <div>
             <Card className= "note box">
             <Card.Body>
                 <Card.Title><span className="text-muted font-weight-light">Job Board: </span></Card.Title>
                      <div>This is a visual design concept of displaying job postings depending on a specific user search queries that could include a description, title, location, and full time options.  
                        <p>Previously built using the GitHub Job API but is no longer working. Working to use a different API. </p> </div>
                </Card.Body>
             </Card>
        </div>
    )
}
