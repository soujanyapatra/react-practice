import { useSelector, useDispatch } from 'react-redux';
import { deleteItem } from '../store/test'
import { t } from 'i18next';
import TableListing from './tableListing'
import React, { useMemo, useEffect } from 'react';
import TextField from '@mui/material/TextField';

const List = () => {
  const items = useSelector((state) => state.items)
  const [searchText, setSearchText] = React.useState('')

  const dispatch = useDispatch()

  const filteredList = useMemo(() => {
    return items.filter((el) => el.name.includes(searchText))
  }, [items, searchText])

  const deleteObj = (v) => {
    dispatch(deleteItem(v.id));
  }

  useEffect(() => {
    // componentDidMount()
    console.log('inside the useEffect')
  }, []);

  return (
    <div className="mt-10">
      <div className='mt-16'>
        <h2>{t('assetListingTableHeader')}</h2>
        <div className='float-right mb-5'>
          <TextField
            value={searchText}
            variant="standard"
            helperText="Search with name"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <TableListing list={filteredList} onDelete={deleteObj} />
      </div>
    </div>
  )
}

export default List
