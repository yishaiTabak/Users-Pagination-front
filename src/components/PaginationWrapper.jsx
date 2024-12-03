import React, { useEffect, useState } from 'react';

import { Pagination } from 'antd';
import { getAllUsersCount, postRandomUsers } from '../serverRequests';


const PaginationWrapper = ({filters,reRenderCount,setFilters,setIsLoading}) =>{
    const [allUsersCount, setAllUsersCount] = useState(0);
    useEffect(()=>{
        
        const fetch = async ()=>{
            setIsLoading(true)
            
            const count = await getAllUsersCount()
            setAllUsersCount(count)
            
            setIsLoading(false)
        }
        fetch()
    },[reRenderCount])
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