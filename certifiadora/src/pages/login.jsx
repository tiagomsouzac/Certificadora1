import React from 'react';
import CoracaoLogo from '../assets/coracao.jpg'; 

function Login() { 
  return(
    <div className="h-screen flex font-sans bg-[#F4A0A8]">

      <div className="w-3/5 bg-[#EF6C78] flex items-center justify-center p-10 ">
            <img src={CoracaoLogo} alt="Logo Coração Bons Fluidos" className="w-auto h-auto max-w-lg" />
        </div>

      <div className="w-2/5 flex items-center justify-center p-10">
        <div className="w-full max-w-sm">
          <h2 className="text-4xl font-light text-gray-800">Olá</h2>
          <p className="text-lg text-gray-700 mb-8">Seja bem vindo de volta</p>
          
          <form className="space-y-6">
            <div>
              <p className="text-sm text-gray-600 mb-1">Email</p>
              <input 
                type="email" 
                required 
                className="w-full p-3 bg-white border border-gray-400 rounded-md focus:outline-none" 
              />
            </div>

            <div>
              <p className="text-sm text-gray-600 mb-1">Senha</p>
              <input 
                type="password" 
                required 
                className="w-full p-3 bg-white border border-gray-400 rounded-md focus:outline-none" 
              />
            </div>
            
            <a href="#" className="text-xs text-gray-600 hover:underline block text-left">
              Esqueceu a sua senha?
            </a>

            <button 
              type="submit" 
              className="w-full bg-white text-black font-semibold py-3 rounded-md hover:bg-gray-200 transition-colors duration-300"
            >
              Login
            </button>

            <div className="text-center mt-4">
              <a href="#" className="text-sm text-gray-800 hover:underline">
                Criar uma conta
              </a>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
}

export default Login;