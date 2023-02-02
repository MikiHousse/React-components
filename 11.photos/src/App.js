import { useState } from "react";
import Collection from "./components/Collection";
import {collections} from './components/mock'

  const data = [
    { name: "Все" },
    { name: "Море" },
    { name: "Горы" },
    { name: "Архитектура" },
    { name: "Города" }
  ]

function App() {
  const [categoryId, setCategoryId] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [page, setPage] = useState(1)
  
  const st = 'active inline-block py-3 px-5 bg-slate-100 rounded-xl mr-3 cursor-pointer font-medium text-lg border-2 hover:bg-slate-300 active:bg-slate-200 transition-all';
  const active = 'active inline-block py-3 px-5 rounded-xl mr-3 cursor-pointer font-medium text-lg border-2 hover:bg-slate-300 bg-slate-200 transition-all';
  const stPg = 'inline-block py-2 px-4 bg-white text-lg rounded-xl mr-4 border cursor-pointer active:bg-black active:text-white transition-all';
  const activePg = "active inline-block py-2 px-4 text-lg rounded-xl mr-4 border cursor-pointer bg-black text-white transition-all"
  return (
    <div className="App p-12 w-full max-w-7xl">
      <h1 className='text-3xl pb-7'>Моя коллекция фотографий</h1>
      <div className="top flex items-center flex-wrap">
        <ul className="tags list-none p-0">
          {
            data.map((obj, i) => <li onClick={() => setCategoryId(i)} key={obj.name} className={categoryId === i ? active : st}>{obj.name}</li>)
          }
        </ul>
        <input value={searchValue} onChange={e => setSearchValue(e.target.value)} className="search-input text-lg w-[250px] h-[50px] px-4 rounded-xl outline-none transition-all border focus:border-cyan-300" placeholder="Поиск по названию" />
      </div>
      <div className="content grid grid-cols-[repeat(3,_1fr)] gap-[40px] mt-10">
        {collections.filter(obj => {
          return obj.name.toLowerCase().includes(searchValue.toLowerCase())
        }).map((obj, index) => (
            <Collection
            key={index}
            name={obj.name}
            images={obj.photos}
          />
          ))}
      </div>
      <ul className="pagination list-none p-0 m-0 mt-10 flex justify-center">
        {
          [...Array(5)].map((_, i) => <li onClick={() => setPage(i + 1)} className={page === i + 1 ? activePg : stPg}>{i + 1}</li>)
        }
      </ul>
    </div>
  );
}

export default App;



{/* <li className="active inline-block py-3 px-5 bg-slate-100 rounded-xl mr-3 cursor-pointer font-medium text-lg border-2 hover:bg-slate-300 active:bg-slate-200 transition-all">Горы</li>
<li className="active inline-block py-3 px-5 bg-slate-100 rounded-xl mr-3 cursor-pointer font-medium text-lg border-2 hover:bg-slate-300 active:bg-slate-200 transition-all">Море</li>
<li className="active inline-block py-3 px-5 bg-slate-100 rounded-xl mr-3 cursor-pointer font-medium text-lg border-2 hover:bg-slate-300 active:bg-slate-200 transition-all">Архитектура</li>
<li className="active inline-block py-3 px-5 bg-slate-100 rounded-xl mr-3 cursor-pointer font-medium text-lg border-2 hover:bg-slate-300 active:bg-slate-200 transition-all">Города</li> */}