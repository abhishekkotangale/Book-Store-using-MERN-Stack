import React from 'react'
import { useEffect , useState } from 'react'
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import BooksCard from '../components/Home/BooksCard';
import BooksTable from '../components/Home/BooksTable';
import { Box, Typography } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';


const Home = () => {
  const [books,setBooks] = useState([]);
  const [loading , setLoading] = useState(false);
  const [showType , setShowType] = useState('table');

  useEffect(()=>{
    setLoading(true);
    axios
        .get('http://localhost:5555/books')
        .then((response)=>{
            setBooks(response.data.data);
            setLoading(false);
        })
        .catch((error)=>{
            console.log(error);
            setLoading(false);
        })
  },[])
  return (
    <Box p={4}>
        <div className='flex justify-center items-center gap-x-4'>
          <button
            className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
            onClick={() => setShowType('table')}
          >
            Table
          </button>
          <button
            className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
            onClick={() => setShowType('card')}
          >
            Card
          </button>
        </div>

        <Box display="flex" justifyContent="space-between" alignItems="center" width="80%" mx="auto">
          <Typography variant="h4" my={8}>Books List</Typography>
          <Link to="/books/create">
            <AddBoxIcon sx={{ color: 'text.primary', fontSize: '3rem' }} />
          </Link>
        </Box>
        {loading ? (<Spinner />) : showType==='table' ? ( <BooksTable books={books}/>) : (<BooksCard books={books}/>) }
    </Box>
  )
}

export default Home
