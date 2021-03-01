import React, { useState} from 'react';
import './custom.scss';
import useFetchJobs from './useFetchJobs';
import { Container } from 'react-bootstrap';
import Job from './components/Job'
import JobsPagination from './components/JobsPagination'
import SearchForm from './components/SearchForm';
import Header from './components/Header';
import "./styles/App.css"



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
    <Header>
    <h1 className="mb-4 margin-3">GitHub Job Search</h1>
    </Header>
    <Container className="my-5">
      <SearchForm params = {params} onParamChange={handleParamChange} />
      <JobsPagination page= {page} setPage= {setPage} hasNextPage= {hasNextPage} />
      {loading && <h1>Loading...</h1>}
      {error && <h1>Try Refreshing...</h1>}
      {jobs.map(job => {
        return <Job key={job.id} job = {job} />
      }
      )}

      <div className="margin-3">
        <JobsPagination page= {page} setPage= {setPage} hasNextPage = {true} />
      </div>
      
    </Container>
    </>
  );
}

export default App;
