import Invite from "./components/invite.jsx"
import { useState } from "react";
import Succes from "./components/succes.jsx";

// https://reqres.in/api/users
function App({data}) {

  const [searchValue, setSearchValue] = useState('')
  const [invites, setInvites] = useState([]);
  const [success, setSuccess] = useState(false)

  const onChangeSearchValuee = (e) => {
    setSearchValue(e.target.value);
  }

  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id) => _id !== id))
    } else {
      setInvites((prev) => [...prev, id])
    }
  }

  return (
    <div className="App">
      {
        success ? (<Succes/>
        ) : (
        <Invite 
          onChangeSearchValuee={onChangeSearchValuee}
          onClickInvite={onClickInvite}
          searchValue={searchValue} 
          items={data}
          invites={invites}
          />)
      }

    </div>
  );
}

export default App;
