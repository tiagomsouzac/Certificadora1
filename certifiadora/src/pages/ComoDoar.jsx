import LogoHeader from '../assets/LogoHeader.png';

export default function ComoDoar() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <div className="flex justify-between items-center p-4 bg-pink-500">
        <img src={LogoHeader} alt="Logo" className="h-10" />

        <div className="flex gap-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            Como doar
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
            Login
          </button>
          <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">
            Registre-se
          </button>
        </div>
      </div>

      <div className="flex-grow bg-pink-300 overflow-hidden px-8 py-4">
        <h1 className="text-7xl font-bold">Como Doar</h1>
        <p className="mt-2 text-lg">
          Nosso sistema foi desenvolvido para facilitar a visualização e o controle de produtos arrecadados e doados em ações sociais e projetos comunitários.
          Para doar, basta acessar a plataforma, escolher a campanha desejada e informar os itens que deseja contribuir.
          Todo o processo é simples, transparente e seguro, permitindo que sua doação chegue a quem realmente precisa.
        </p>
      </div>
    </div>
  );
}
