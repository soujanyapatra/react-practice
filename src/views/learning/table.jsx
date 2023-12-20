import React, { useState } from 'react';
import Card from 'components/card';
import Listing from 'views/components/listing';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useSelector } from 'react-redux';
// import TableListing from '../implementation/tableListing';
// import { deleteItem } from '../store/test'
// import { t } from 'i18next';

const Table = () => {
  const user = useSelector((state) => state);
  // const items = useSelector((state) => state.items)
  const [selectedValue, setSelectedValue] = useState('')
  const [image, setImage] = useState('')

  // const dispatch = useDispatch()
  const options = ['Vue', 'React', 'Angular']
  const optionElements = [];
  let modelValue = 'testing model value'

  const changeContent = (v) => {
    modelValue = v
  }

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  for (let i = 0; i < options.length; i++) {
    optionElements.push(
      <option key={i} value={options[i]}>
        {options[i]}
      </option>
    )
  }

  function Items({name, isActive}){
    return (
      <li>
        { name } {isActive && '✔'}
      </li>
    )
  }

  // const deleteObj = (v) => {
  //   dispatch(deleteItem(v.id));
  // }

  return(
    <div className="mt-10">
      Select from any one from those
      <select value={selectedValue} onChange={handleSelectChange} className="ml-10">
        {/* {options.map((el, i) => (
          <option key={i} value={el}>
            {el}
          </option>
        ))} */}

        {optionElements}
      </select>
      <p className='d-flex'>Selected Framework: {selectedValue}
        {selectedValue === 'Vue' && <p>😎</p>}
        {selectedValue === 'React' && <p>⚛️</p>}
        {selectedValue === 'Angular' && <p>🅰️</p>}
      </p>
      <div>
        <Items isActive={selectedValue === 'Vue'}
          name="vue" />
          <Items isActive={selectedValue === 'React'}
          name="react" />
          <Items isActive={selectedValue === 'Angular'}
          name="angular" />
      </div>
      <Listing label='image' color='white' selectedImage={setImage} />

      <div>
        {
          image && (
            <div>
              <h1>select image:</h1>
              <Card>
                <button className='d-flex float-right' onClick={() => setImage('')}>Remove</button>
                <img className='avatar' src={image} alt='' />
              </Card>
            </div>
          )
        }
      </div>
      <div>
        <ReactQuill theme="snow" value={modelValue} onChange={changeContent} />
      </div>
      <div>
        Hello
        <p>{ user?.loginUser?.name }</p>
      </div>
      {/* <button onClick={changeUserDetails}>change value</button> */}
      <div>
      <div>
      </div>
        {/* <div className='mt-16'>
          <h2>{t('assetListingTableHeader')}</h2>
          <TableListing list={items} onDelete={deleteObj} />
        </div> */}
      </div>
    </div>
  )
}

export default Table
