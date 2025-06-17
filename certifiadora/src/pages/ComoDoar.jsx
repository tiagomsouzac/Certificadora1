import LogoHeader from '../assets/LogoHeader.png';
import { useNavigate } from 'react-router-dom'

export default function ComoDoar() {
  const navigate = useNavigate()

  function onClickToQuemSomos(){
    navigate('/')
  }
  function onClickToLogin(){
    navigate('/login')
  }
  function onClickToCadastro(){
    navigate('/cadastro')
  }

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <div className="flex justify-between items-center p-4 bg-pink-500">
        <img src={LogoHeader} alt="Logo" className="h-10" />

        <div className="flex gap-4">
          <button onClick={onClickToQuemSomos} className="px-4 py-2 bg-amber-900 text-white rounded hover:bg-amber-800 transition cursor-pointer">
            Quem Somos
          </button>
          <button className="px-4 py-2 bg-amber-900 text-white rounded hover:bg-amber-800 transition cursor-pointer">
            Como doar
          </button>
          <button onClick={onClickToLogin} className="px-4 py-2 bg-amber-900 text-white rounded hover:bg-amber-800 transition cursor-pointer">
            Login
          </button>
          <button onClick={onClickToCadastro} className="px-4 py-2 bg-amber-900 text-white rounded hover:bg-amber-800 transition cursor-pointer">
            Cadastrar-se
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
