import React, { useEffect, useState } from 'react';

import { Pagination } from 'antd';
import { getAllUsersCount, postRandomUsers } from '../serverRequests';


const PaginationWrapper = ({filters,setFilters,setIsLoading}) =>{
    const [allUsersCount, setAllUsersCount] = useState(0);
    useEffect(()=>{
        const fetch = async ()=>{
            setIsLoading(true)
            let count = await getAllUsersCount()
            if(count === 0){
                await postRandomUsers(200)
                count = await getAllUsersCount()
            }
            setAllUsersCount(count)
            setFilters({pageNumber:1,pageSize:10})
            setIsLoading(false)
        }
        fetch()
    },[])
    const onChange = (pageNumber,pageSize) => {
        setFilters({pageNumber,pageSize})
      };
    return (
        <div>
            <Pagination showQuickJumper defaultCurrent={1} total={allUsersCount} onChange={onChange} pageSizeOptions={[10, 20, 50]} pageSize={filters.pageSize} />
        </div>
    )
}

export default PaginationWrapper