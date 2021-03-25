import React, { useState } from 'react';
import useFetchJobs from './api/useFetchJobs';
import { Container } from 'react-bootstrap';
import Job from './components/Job'
import JobsPagination from './components/JobsPagination'
import SearchForm from './components/SearchForm';
import Header from './container/Header';
import CardExample from './container/CardExample';
import "./styles/App.css"
import { FooterContainer } from './container/FooterContainer';
import ScrollToTop from 'react-scroll-up';
import scrollUp from './assets/scrollUp.svg';



function App() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page)
  


  //Function for Search and to update params
  function handleParamChange(e) {
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setParams(prevParams => {
      return { ...prevParams,  [param]: value}
    })
  }

 

  return (
    <>
    <Header />
    <Container className="my-5">
      <SearchForm params = {params} onParamChange={handleParamChange} />
      <CardExample /> 
      <JobsPagination page= {page} setPage= {setPage} hasNextPage= {hasNextPage} />
      {loading && <h1>Loading...</h1>}
      {error && <h1>Try Refreshing...</h1>}
      {jobs.map(job => {
        return <Job key={job.id} job = {job} />
       }
      )}
    <ScrollToTop showUnder={200}>
         <span>
           <img src={scrollUp} 
            className="scroll-button"
            alt="Scroll up button" />
          </span>
         
    </ScrollToTop>

      <div className="margin-3">
        <JobsPagination page= {page} setPage= {setPage} hasNextPage = {true} />
      </div>

    </Container>
   
    <FooterContainer />
    </>
  );
}

export default App;
