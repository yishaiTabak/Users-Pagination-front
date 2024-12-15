import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Table } from 'antd';
import { getEmailProviders } from '../serverRequests';
import SearchWithDebaunce from './SearchWithDebaunce';
import { getTableColumns } from './utils';

const NewTable = ({data, setFilters,filters,totalCount}) =>{
  const [emailProviders,setEmailProvaders] = useState(null)

  useEffect(()=>{
    const fetch = async () =>{
      const res = await getEmailProviders()      
      setEmailProvaders(res)
    }
    fetch()
  },[])

  const handleSearch = useCallback((dataIndex, value) => {
    setFilters(currentFilters => ({...currentFilters,
      search:{ ...currentFilters.search, [dataIndex]: value },
      pagination:{...currentFilters.pagination, page:1}}));
  }, [setFilters])

  const onChange = useCallback((pagination, filters, sorter) => {
    const updatedSorting = sorter.order === 'ascend'
      ? 'asc'
      : sorter.order === 'descend'
      ? 'desc'
      : sorter.order;
  
    setFilters((currentFilters) => ({
      ...currentFilters,
      pagination: { pageSize: pagination.pageSize, page: pagination.current },
      sorting: { field: sorter.field, order: updatedSorting },
      search: { ...currentFilters.search, email: filters.email },
    }));
  }, [setFilters]);

  const getColumnSearchProps = useCallback((dataIndex) => ({
    filterDropdown: () => <SearchWithDebaunce dataIndex={dataIndex} handleSearch={handleSearch} />,
    filterIcon: () => <span role="img" aria-label="search">🔍</span>,
  }), [ handleSearch]);

  const columns = useMemo(() => {
    if(emailProviders && getColumnSearchProps)
      return getTableColumns(getColumnSearchProps,emailProviders)
  },[emailProviders,getColumnSearchProps]);

    return (
        <Table className='smaller-rows'
          style={{ tableLayout: 'fixed' }} 
          sticky={{ offsetScroll: 0 }} 
          columns={columns} 
          pagination={{
            total:totalCount,
            pageSizeOptions:[10, 20, 50],
            current:filters.pagination.page, 
            defaultPageSize:10,
            showQuickJumper:true 
          }}
          dataSource={data} 
          rowKey={"id"}
          onChange={onChange} />
    )
}

export default NewTable;
