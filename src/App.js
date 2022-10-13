import React, {useState, useEffect} from 'react';
import AllCard from './components/Card';
import Header from './components/header';
import Table from './components/Table';


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.coincap.io/v2/assets/?limit=10');
      const values = await response.json();
      setData(values.data);
    };
    fetchData();
  }, []);
 
  console.log(data);
  return (
    <div className="">
     <Header/>
     <main className='flex flex-col justify-center items-center'>
      {/* <Table data={data}/> */}
      <AllCard data={data}/>
      </main>
    </div>
  );
}

export default App;
