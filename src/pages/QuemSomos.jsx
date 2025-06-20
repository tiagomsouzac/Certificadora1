import LogoHeader from '../assets/LogoHeader.png';
import Banner from '../assets/Banner.png';
import { useNavigate } from 'react-router-dom'

export default function QuemSomos() {
  const navigate = useNavigate()

  function onClickToComoDoar(){
    navigate('/como-doar')
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
          <button className="px-4 py-2 bg-amber-900 text-white rounded hover:bg-amber-800 transition cursor-pointer">
            Quem Somos
          </button>
          <button onClick={onClickToComoDoar} className="px-4 py-2 bg-amber-900 text-white rounded hover:bg-amber-800 transition cursor-pointer">
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
        <h1 className="text-3xl font-bold">Quem Somos</h1>
        <p className="mt-2 text-lg">
          O projeto Bons Fluidos da UTFPR-CP tem como objetivo levar dignidade
          para meninas que têm o direito à educação prejudicado por menstruarem,
          tendo como público alvo meninas de escolas públicas de Cornélio
          Procópio que ofertam os anos finais do ensino fundamental e ensino
          médio.
        </p>

        <p className="mt-2 text-lg">
          A equipe é formada por alun@s dos diferentes cursos de graduação da
          UTFPR-CP que auxiliarão na realização de palestras sobre Pobreza
          Menstrual e arrecadação e distribuição gratuita de produtos de higiene
          menstrual sustentáveis para meninas das escolas públicas de Cornélio
          Procópio.
        </p>

        <div className="flex justify-center items-center min-h-[calc(40vh-4rem)] p-4 mt-6">
          <a
            href="https://www.instagram.com/bonsfluidosutfpr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Banner}
              alt="Banner"
              style={{ width: 'calc(100% - 100px)' }}
              className="max-h-full object-contain rounded-2xl transition-transform duration-300 hover:scale-105"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
