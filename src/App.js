import React, { useState } from 'react';
import useFetchJobs from './api/useFetchJobs';
import { Container } from 'react-bootstrap';
import Job from './components/Job';
import JobsPagination from './components/JobsPagination';
import SearchForm from './components/SearchForm';
import Header from './container/Header';
import CardExample from './container/CardExample';
import './styles/App.css';
import { FooterContainer } from './container/FooterContainer';
import ScrollToTop from 'react-scroll-up';
import scrollUp from './assets/scrollUp.svg';



function App() {

  // const makeAPICall = async () => {
  //   try {
  //     const response = await fetch('http://localhost:3000/', {mode:'cors'});
  //     const data = await response.json();
  //     console.log(data.title);
  //     console.log({data})
  //   }
  //   catch(e) {
  //     console.log(e)
  //   }
  // }

  // useEffect(() => {
  //   makeAPICall();
  // }, [])

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

  console.log(jobs)

  return (
    
    <>
    <Header />
    <Container className="my-5">
      <SearchForm params={params} onParamChange={handleParamChange} />  
      <CardExample /> 
      <JobsPagination page={page} setPage={setPage} hasNextPage={true} />
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error. Try Refreshing.</h1>}
      {[jobs].map((job, index) => {
        return <Job key={index} job={job} />
      })}

      <ScrollToTop showUnder={200}>
          <span>
            <img src={scrollUp} 
              className="scroll-button"
              alt="Scroll up button" />
            </span>
      </ScrollToTop>

      <div className="margin-3">
        <JobsPagination page= {page} setPage= {setPage} hasNextPage = {hasNextPage} />
      </div>

    </Container>
   
    <FooterContainer />
    </>
  );
}

export default App;
