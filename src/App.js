import React, { useState } from 'react';
import Alert from './components/alerts/Alert';
import UserInput from './components/Input/UserInput';
import UserList from './components/Lists/UserList'

function App() {
  const [data, setdata] = useState("");
  const onsave = (enterdValue) => {

    setdata((prevData) => {
      return [...prevData, enterdValue]

    })

  }
  const [alert, setalert] = useState(false);
  const disalert = (msg, type) => {
    setalert({
      msg: msg,
      type: type
    })
    if (type === "success") {

      setTimeout(() => {
        setalert(false)
      }, 1150);
    }

  }
  const dismisalert = () => {
    setalert(false)
  }
  const deletefun = (listid) => {

    setdata((prevdata) => {

      const newdata = prevdata.filter((elem) => {
        return elem.id !== listid

      })
      return newdata;

    })
    disalert("Data Deleted Successfully..!", "success")
  }

  return <div>
    <Alert alert={alert} dismiss={dismisalert} />
    <UserInput onsave={onsave} onalert={disalert} />
    {data.length > 0 && <UserList userdata={data} ondelete={deletefun} />}

  </div>;
}

export default App;
