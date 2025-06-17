import { useNavigate } from 'react-router-dom'

function Registrar() {
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
                <input type="text" className="w-full mt-1 p-2 border border-b-black rounded" />
            </div>

            <div>
                <label className="block text-gray-800">Tipo de absorvente:</label>
                <input type="text" className="w-full mt-1 p-2 border border-b-black rounded" />
            </div>

            <div>
                <label className="block text-gray-800">Número da nota fiscal:</label>
                <input type="text" className="w-full mt-1 p-2 border border-b-black rounded" />
            </div>

            <div>
                <label className="block text-gray-800">Quantidade recebida:</label>
                <input type="number" className="w-full mt-1 p-2 border border-b-black rounded" />
            </div>

            <div>
                <label className="block text-gray-800">Data de validade:</label>
                <input type="date" className="w-full mt-1 p-2 border border-b-black rounded" />
            </div>

            <button type="submit" className="mt-4 w-full bg-white text-black font-semibold py-2 rounded hover:bg-gray-100 transition">
                Salvar
            </button>

            </form>
            </div>
    </div>
  )
}

export default Registrar
