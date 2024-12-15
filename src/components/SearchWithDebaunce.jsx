import React, { useCallback, useState } from "react";
import debounce from 'lodash.debounce';
import { Input } from 'antd';


const SearchWithDebaunce = ({dataIndex,handleSearch}) =>{
    const [input, setInput] = useState('');

    const changeSearchFilter = useCallback(
    debounce((text) => {
        handleSearch(dataIndex,text)
    }, 500),[]);

    const handleChange = (e) => {
        const value = e.target.value;
        setInput(value);
        changeSearchFilter(value); 
      };
    return (
        <Input
            placeholder={`Search ${dataIndex}`}
            value={input}
            onChange={handleChange}
            style={{ display: "block" }}
        />
    )
}

export default SearchWithDebaunce