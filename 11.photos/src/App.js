

function Collection({ name, images }) {
  return (
    <div className="collection max-w-[470px] bg-white p-7 rounded-3xl cursor-pointer transition-all">
      <img className="collection__big object-cover h-[250px] w-full rounded-3xl mb-4" src={images[0]} alt="Item" />
      <div className="collection__bottom flex justify-between">
        <img className="collection__mini object-cover w-[31%] h-[80px] rounded-2xl" src={images[1]} alt="Item" />
        <img className="collection__mini object-cover w-[31%] h-[80px] rounded-2xl" src={images[2]} alt="Item" />
        <img className="collection__mini object-cover w-[31%] h-[80px] rounded-2xl" src={images[3]} alt="Item" />
      </div>
      <h4 className='m-0 mt-4 text-xl'>{name}</h4>
    </div>
  );
}

function App() {
  return (
    <div className="App p-12 w-full max-w-7xl">
      <h1 className='text-3xl pb-7'>Моя коллекция фотографий</h1>
      <div className="top flex items-center flex-wrap">
        <ul className="tags list-none p-0">
          <li className="active inline-block py-3 px-5 bg-slate-100 rounded-xl mr-3 cursor-pointer font-medium text-lg border-2 hover:bg-slate-300 active:bg-slate-200 transition-all">Все</li>
          <li className="active inline-block py-3 px-5 bg-slate-100 rounded-xl mr-3 cursor-pointer font-medium text-lg border-2 hover:bg-slate-300 active:bg-slate-200 transition-all">Горы</li>
          <li className="active inline-block py-3 px-5 bg-slate-100 rounded-xl mr-3 cursor-pointer font-medium text-lg border-2 hover:bg-slate-300 active:bg-slate-200 transition-all">Море</li>
          <li className="active inline-block py-3 px-5 bg-slate-100 rounded-xl mr-3 cursor-pointer font-medium text-lg border-2 hover:bg-slate-300 active:bg-slate-200 transition-all">Архитектура</li>
          <li className="active inline-block py-3 px-5 bg-slate-100 rounded-xl mr-3 cursor-pointer font-medium text-lg border-2 hover:bg-slate-300 active:bg-slate-200 transition-all">Города</li>
        </ul>
        <input className="search-input text-lg w-[250px] h-[50px] px-4 rounded-xl outline-none transition-all border focus:border-cyan-300" placeholder="Поиск по названию" />
      </div>
      <div className="content grid grid-cols-[repeat(3,_1fr)] gap-[40px] mt-10">
        <Collection
          name="Путешествие по миру"
          images={[
            'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1560840067-ddcaeb7831d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1531219572328-a0171b4448a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1573108724029-4c46571d6490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          ]}
        />
      </div>
      <ul className="pagination list-none p-0 m-0 mt-10 flex justify-center">
        <li className='inline-block py-2 px-4 bg-white text-lg rounded-xl mr-4 border cursor-pointer active:bg-black active:text-white transition-all'>1</li>
        <li className="active inline-block py-2 px-4 text-lg rounded-xl mr-4 border cursor-pointer bg-black text-white transition-all">2</li>
        <li className='inline-block py-2 px-4 bg-white text-lg rounded-xl mr-4 border cursor-pointer active:bg-black active:text-white transition-all'>3</li>
      </ul>
    </div>
  );
}

export default App;
