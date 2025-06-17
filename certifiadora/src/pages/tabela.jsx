import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Tabela() {
  const navigate = useNavigate()
  const [doacoes, setDoacoes] = useState([])

  function OnClickToRegistrar(){
    navigate('/registrar-doacao')
  }

  useEffect(() => {
    axios.get('http://localhost:3001/doacoes')
      .then(response => {
        setDoacoes(response.data)
      })
      .catch(error => {
        console.error('Erro ao buscar doações:', error)
      })
  }, [])

  return (
    <div className="h-screen flex font-sans">
      <div className="w-1/3 bg-pink-500 flex flex-col items-center justify-center text-white p-10">
            <img src="/src/pages/Logo.png" alt="Logo Bons Fluidos"></img>
            <h1 className="text-4xl font-bold italic">Bons Fluidos</h1>
        </div>

      <div className="w-2/3 bg-pink-300 p-10">
        <h2 className="text-xl font-bold mb-4">Doações</h2>
        <button onClick={OnClickToRegistrar} className="m-4 px-4 py-2 bg-amber-900 text-white rounded hover:bg-amber-800 transition cursor-pointer" >Registrar Doação</button>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border border-black px-4 py-2 bg-white">Origem</th>
              <th className="border border-black px-4 py-2 bg-white">Tipo</th>
              <th className="border border-black px-4 py-2 bg-white">Nota Fiscal</th>
              <th className="border border-black px-4 py-2 bg-white">Quantidade</th>
              <th className="border border-black px-4 py-2 bg-white">Validade</th>
            </tr>
          </thead>
          <tbody>
            {doacoes.map((item) => (
              <tr key={item.id}>
                <td className="border px-4 py-2">{item.origem}</td>
                <td className="border px-4 py-2">{item.tipo}</td>
                <td className="border px-4 py-2">{item.nota_fiscal}</td>
                <td className="border px-4 py-2">{item.quantidade}</td>
                <td className="border px-4 py-2">{item.validade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Tabela
