import './App.css';
import { Editor } from 'primereact/editor';

import React, { useState } from 'react'

function App() {
  const [text, setText] = useState('')
  const [data, setData] = useState('');
  const [response, setResponse] = useState('');

  const searchCep = async () => {
        const res = await fetch(`https://opencep.com/v1/${data}`).then(res => res.json());

        setResponse(res)
  }

  return (
    <section className='app'>
      <div className='search-cep'>
                {!response ? 
                <div className='data_container'>
                <input value={data} onChange={e => setData(e.target.value)} placeholder='Digite o cep'/>
                <button onClick={searchCep}>Buscar</button>
                </div>
                :
                <div className='data_container'>
                    <h3><strong>RUA:</strong>{response.logradouro}</h3>
                    <h3><strong>BAIRRO:</strong>{response.bairro}</h3>
                    <h3><strong>CIDADE:</strong>{response.localidade}</h3>
                    <h3><strong>ESTADO:</strong>{response.uf}</h3>
                    <h3><strong>CEP:</strong>{response.cep}</h3>
                    <button onClick={() => {
                      setResponse("");
                      setData("")
                    }}>Nova Busca</button>
                </div>
                }
            </div>
        <div className='card'>
            <Editor value={text} theme='bubble' onChange={e => setText(e.htmlValue)} style={{ height: '480px'}}/>
        </div>
    </section>
  );
}

export default App;
