function Tabela() {
  return (
    <div className="h-screen flex font-sans">
      <div className="w-1/3 bg-pink-500 flex flex-col items-center justify-center text-white p-10">
            <img src="/src/pages/Logo.png" alt="Logo Bons Fluidos"></img>
            <h1 className="text-4xl font-bold italic">Bons Fluidos</h1>
        </div>

      <div className="w-2/3 bg-pink-300 p-10">
        <h2 className="text-xl font-bold mb-4">Doações</h2>
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
            <tr>
              <td className="border px-4 py-2">Fulano Beltrano de Deltrano</td>
              <td className="border px-4 py-2">Descartavel</td>
              <td className="border px-4 py-2">102103104</td>
              <td className="border px-4 py-2">100</td>
              <td className="border px-4 py-2">32-13-Infinito</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Tabela