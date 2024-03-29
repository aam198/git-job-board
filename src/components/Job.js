import React, { useState } from 'react';
import { Card, Badge, Button, Collapse } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import '../styles/App.css';

export default function Job( { job } ) {

    const [open, setOpen] = useState(false)

    return (
        <Card className= "box margin-3">
            <Card.Body>
             <div className="d-flex justify-content-between">
                <div>
                    <Card.Title>{ job.title }<span className="text-muted font-weight-light">{job.company_name}</span></Card.Title>
                    <Card.Subtitle className="text-muted mb-2">
                       {job.created_at}
                        {/* {new Date(job.created_at).toLocaleDateString()} */}
                    </Card.Subtitle>
                    <Badge variant="secondary" className="mr-2">{job.job_types}</Badge>
                    <Badge variant="secondary">{job.location}</Badge>
                        <div style={{ wordBreak: 'break-all' }}>
                            <ReactMarkdown source={job.url} />
                        </div> 

                </div>
                
            </div>
               
            <Card.Text>
                <Button className="btn"
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}> 
                    {open ? 'Hide Details' : 'View Details' }
                </Button> 
            </Card.Text>

            <Collapse in={open}>
                <div className = "mt-4">
                    <ReactMarkdown source= {job.description} />
                </div>
            </Collapse>

            </Card.Body>
        </Card>
    )
}
