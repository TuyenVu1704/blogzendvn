import { useState } from 'react';
import Input from '../shared/Input';
import { useNavigate } from 'react-router-dom';


function HeaderSearch() {

  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate()

  function handleChangeValue(e) {
    setKeyword(e.target.value)
  }

  function handelSubmit(e) {
    e.preventDefault();

    navigate(`/search?keyword=${keyword}`)
  }

  return (
    <div className="tcl-col-4">
      {/* Header Search */}
      <form onSubmit={handelSubmit}>
        <Input onChange={handleChangeValue} value={keyword} type="search" placeholder="Nhap gia tri search ..." />
      </form>
    </div>
  );
}

export default HeaderSearch;
