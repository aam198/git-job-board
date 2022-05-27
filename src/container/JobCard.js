import React, { useState } from 'react';
import { Card, Badge, Button, Collapse } from 'react-bootstrap'; 
import ReactMarkdown from 'react-markdown';
import '../styles/App.css';

export default function JobCard() {

  const [open, setOpen] = useState(false)

    return (
        <div>
          <Card className= "box margin-3">
            <Card.Body>
              <div className="d-flex justify-content-between">
              <div>
                    <Card.Title>Senior Web Developer -<span className="text-muted font-weight-light"> blueModus</span></Card.Title>
                    <Card.Subtitle className="text-muted mb-2">
                       {/* {job.created_at} */}
                        {/* {new Date(job.created_at).toLocaleDateString()} */}
                    </Card.Subtitle>
                    <Badge variant="secondary" className="mr-2">Full-Time</Badge>
                    <Badge variant="secondary">Remote</Badge>
                        <div style={{ wordBreak: 'break-all' }}>
                            <ReactMarkdown source='https://bluemodus.com/senior-web-developer-job-description' />
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
                    <ul>
                      <li>Working closely with both internal and external design teams to ensure the feasibility of the design, clarify ambiguous designs, and create rich interactive user interfaces.</li>
                      <li>Using modern semantic HTML, CSS, and JavaScript to create static websites for integration into a content management system and dynamic, API-consuming components and single-page apps.</li></ul>
                </div>
            </Collapse>
                </Card.Body>
             </Card>
        </div>
    )
}
