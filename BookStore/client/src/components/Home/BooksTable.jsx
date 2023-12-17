import React from 'react'
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const BooksTable = ({books}) => {
  return (
    <TableContainer sx={{ maxWidth: 850,  mx: 'auto' }} component={Paper}>
            <Table sx={{ minWidth: 750 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                <TableCell align='center'>No</TableCell>
                  <TableCell align='center'>Title</TableCell>
                  <TableCell align="center">Author</TableCell>
                  <TableCell align="center">Publish Year</TableCell>
                  <TableCell align="left">Operation</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {books.map((book,index) => (
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="center" component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell align="center" component="th" scope="row">
                      {book.title}
                    </TableCell>
                    <TableCell align="center">{book.author}</TableCell>
                    <TableCell align="center">{book.publishYear}</TableCell>

                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell align="right" sx={{ textAlign: 'right' }} component="th" scope="row">
                        <Link to={`/books/details/${book._id}`}>
                          <InfoOutlinedIcon className='text-2xl text-green-800' />
                        </Link>
                      </TableCell>
                      <TableCell align="right" sx={{ textAlign: 'right' }} component="th" scope="row">
                        <Link to={`books/edit/${book._id}`}>
                          <EditIcon className='text-2xl text-yellow-600' />
                        </Link>
                      </TableCell>
                      <TableCell align="right" sx={{ textAlign: 'right' }} component="th" scope="row">
                        <Link to={`/books/delete/${book._id}`}>
                          <DeleteOutlineIcon className='text-2xl text-red-600' />
                        </Link>
                      </TableCell>
                    </TableRow>
                </TableRow>
              ))}
              </TableBody>
            </Table>
          </TableContainer>
  )
}

export default BooksTable
