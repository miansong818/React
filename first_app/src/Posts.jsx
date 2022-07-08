/* eslint-disable max-len */
import React, {useEffect, useState} from 'react';
import axios from 'axios';
// import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import _ from 'lodash';

const pageSize = 10;

const Posts = () =>{
  const [posts, setPosts]= useState();
  const [paginationPost, setPaginationPost]= useState();
  const [currentPage, setCurrentPage]= useState(1);
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/todos').then((res)=>{
      // console.log(res.data)
      setPosts(res.data);
      setPaginationPost(_(res.data).slice(0).take(pageSize).value());
    });
  }, []);

  const pageCount = posts? Math.ceil(posts.length/pageSize) : 0;
  // console.log(pageCount);
  // if(pageCount === 1) return null;

  const pages = _.range(1, pageCount+1);
  // console.log(pages);
  const pagination = (pageNum) =>{
    setCurrentPage(pageNum);
    const paginatePost = _(posts).slice(pageSize*(currentPage-1)).take(pageSize).value();
    setPaginationPost(paginatePost);
  };
  return <div>{
        !paginationPost ? ('No data found') : <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>User ID</th>
              <th>Title</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {
              paginationPost.map(({id, userId, title, completed}, index)=>(
                <tr key={index}>
                  <td>{id}</td>
                  <td>{userId}</td>
                  <td>{title}</td>
                  <td>
                    <p className={completed? 'btn btn-success' : 'btn btn-danger'}>{completed? 'Completed' : 'Pending'}</p>
                  </td>
                </tr>
              ),
              )
            }
          </tbody>
        </table>
  }
  <nav className='d-flex justify-content-center'>
    <ul className='pagination'>
      {pages.map((page, index)=>(
        <li key={index} className={page === currentPage ? 'page-item active' : 'page-item'}>
          <p className='page-link' onClick={()=>pagination(page)}>{page}</p>
        </li>
      ))}
    </ul>
  </nav>
  </div>;
};

export default Posts;
