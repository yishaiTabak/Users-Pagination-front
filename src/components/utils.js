export const getTableColumns = (getColumnSearchProps, emailProviders) =>{    
    return [
        {
          key:'name',
          title: 'Name',
          dataIndex: 'name',
          width: '35%',
          ...getColumnSearchProps('name')
        },
        {
          key:'age',
          title: 'Age',
          dataIndex: 'age',
          sorter:true
        },
        {
          key:'email',
          title: 'Email',
          dataIndex: 'email',
          width: '45%',
          filters: emailProviders.map((provider) => ({text:provider, value:provider})),
        },
      ]
}