import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

function Registrar() {
  const navigate = useNavigate()

  // Estados dos campos:
  const [origem, setOrigem] = useState('')
  const [tipo, setTipo] = useState('')
  const [notaFiscal, setNotaFiscal] = useState('')
  const [quantidade, setQuantidade] = useState('')
  const [validade, setValidade] = useState('')

  const handleSalvar = () => {
    axios.post('http://localhost:3001/doacoes', {
      origem,
      tipo,
      nota_fiscal: notaFiscal,
      quantidade,
      validade
    })
    .then(() => {
      alert('Doação registrada com sucesso!')
      navigate('/tabela')
    })
    .catch((error) => {
      console.error('Erro ao registrar doação:', error)
      alert('Erro ao salvar')
    })
  }

  return (
    <div className="h-screen flex font-sans">
        <div className="w-1/3 bg-pink-500 flex flex-col items-center justify-center text-white p-10">
            <img src="/src/pages/Logo.png" alt="Logo Bons Fluidos"></img>
            <h1 className="text-4xl font-bold italic">Bons Fluidos</h1>
        </div>

        <div className="w-2/3 bg-pink-300 flex items-center justify-center">
            <form className="bg-pink-300 p-8 rounded-lg w-full max-w-md space-y-4">
                <h2 className="text-2xl font-semibold text-center mb-4">Registrar uma doação</h2>

            <div>
                <label className="block text-gray-800">Origem da Doação/Fornecedor:</label>
                <input type="text" value={origem} onChange={(e) => setOrigem(e.target.value)} className="w-full mt-1 p-2 border border-b-black rounded" />
            </div>

            <div>
                <label className="block text-gray-800">Tipo de absorvente:</label>
                <input type="text" value={tipo} onChange={(e) => setTipo(e.target.value)} className="w-full mt-1 p-2 border border-b-black rounded" />
            </div>

            <div>
                <label className="block text-gray-800">Número da nota fiscal:</label>
                <input type="text" value={notaFiscal} onChange={(e) => setNotaFiscal(e.target.value)} className="w-full mt-1 p-2 border border-b-black rounded" />
            </div>

            <div>
                <label className="block text-gray-800">Quantidade recebida:</label>
                <input type="number" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} className="w-full mt-1 p-2 border border-b-black rounded" />
            </div>

            <div>
                <label className="block text-gray-800">Data de validade:</label>
                <input type="date" value={validade} onChange={(e) => setValidade(e.target.value)} className="w-full mt-1 p-2 border border-b-black rounded" />
            </div>

            <button type="button" onClick={handleSalvar} className="mt-4 w-full bg-white text-black font-semibold py-2 rounded hover:bg-gray-100 transition cursor-pointer">
                Salvar
            </button>

            </form>
        </div>
    </div>
  )
}

export default Registrar
