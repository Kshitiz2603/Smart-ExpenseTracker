import React, {useState, useEffect} from 'react'
//import {Link} from 'react-router-dom'
import { Table } from "antd"
import axios from 'axios'
import {columns} from './userGridColumn'

function Expense() {
    const [data, setData] = useState([])

    useEffect(() => {
        getUsersData();
    },[])

    const getUsersData = () => {
        axios.get('/students').then((res) => {
            setData(res.data)
        })
        .catch((err) => console.log(err))
    }
    
    const col = columns;
      
  return (
    <>
    <div >
        <Table className='ant-table-thead' dataSource={data} columns={col} />;
    </div>
    </>
  )
}

export default Expense
