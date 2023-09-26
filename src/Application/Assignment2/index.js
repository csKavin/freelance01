import React, { useState } from 'react';
import debounce from 'lodash/debounce';


function Index() {
    const [inputValue, setInputValue] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
  
    // here we set the value show after 1 second
    const handleDebouncedInputChange = debounce((value) => {
      setInputValue(value);
    }, 1000);
  
    // Call handleDebouncedInputChange when input changes
    const handleInputChange = (e, i) => {
      let { value } = e.target;
      value = value.replace(/[^0-9]/g, '');
      let length = value.length
      if (length > 1) {
        handleDebouncedInputChange(value);
      } else {
        setInputValue(value);
      }
    };
  return (
    <div className='p-4 mx-4  ' >
    <div className='d-flex gap-3 NavTab'>
      {
        ["Open", "Close", "Boost"].map((item, index) => {
          const tabClassName = index === selectedIndex ? 'ActiveTab' : 'NormalTab';
          return <div className={tabClassName} onClick={() => setSelectedIndex(index)} key={index} >{item}</div>

        })
      }
    </div>
    <div className='Divider'/>
    <div className='container mt-4'>
      <div className='row mx-md-n5'>
        <div className='col-xs-12 col-sm-6 col-md-6'>
          <div className='  card-container'>
            <div className='mt-4'>
              <div>Select Asset</div>
              <select class="form-select custom-input mt-2" aria-label="Default select example">
                <option selected>ETH</option>
                <option value="1">Rupee</option>
                <option value="2">WWE</option>
              </select>
              <br />
              <div className='d-flex justify-content-between'>
                <div >Borrow Amount</div>
                <div className='HeldAmount'>Max Held Amount : 200</div>
              </div>
              <input type="text"
                className="form-control custom-input mt-2"
                placeholder='Enter supply amount'
                value={inputValue}
                onChange={(e, i) => handleInputChange(e, i)}
              />
            </div>
            <br />
            <div className='d-flex justify-content-end mt-4 card-footer'>
              <button type="button" className="btn btn-light mt-4">Execute</button>
            </div>
          </div>
        </div>
        <div className='col-xs-12 col-sm-6 col-md-6'>
          <div className='card-container h-50 mt-1'>
          </div>
          <div className='card-container h-45 mt-4'>
          </div>
        </div>
      </div>
    </div>
  </div >
  )
}

export default Index;