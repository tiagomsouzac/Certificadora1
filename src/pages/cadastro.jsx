import React from 'react';
import CoracaoLogo from '../assets/coracao.jpg';

function Cadastro() {
  return (
    <div className="h-screen flex font-sans bg-[#F4A0A8]">
      
      <div className="w-3/5 bg-[#EF6C78] flex items-center justify-center p-10">
        <img src={CoracaoLogo} alt="Logo da Bons Fluidos" className="w-auto h-auto max-w-lg" />
      </div>

      <div className="w-2/5 flex items-center justify-center p-10">
        <div className="w-full max-w-sm">
          <h2 className="text-2xl font-medium text-[#8B4D58] mb-8">Registre-se gratuitamente</h2>

          <form id="registrationForm" className="space-y-5">
            <div>
              <label htmlFor="fullName" className="block text-sm mb-1 text-[#4F4F4F]">Nome completo</label>
              <input type="text" id="fullName" name="fullName" required
                className="w-full p-3 rounded-lg bg-[#F0F0F0] text-[#4F4F4F] focus:outline-none focus:ring-2 focus:ring-[#E84D6E]" />
            </div>

            <div>
              <label htmlFor="cpf" className="block text-sm mb-1 text-[#4F4F4F]">CPF</label>
              <input type="text" id="cpf" name="cpf" required
                className="w-full p-3 rounded-lg bg-[#F0F0F0] text-[#4F4F4F] focus:outline-none focus:ring-2 focus:ring-[#E84D6E]" />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm mb-1 text-[#4F4F4F]">Telefone</label>
              <input type="tel" id="phone" name="phone" required
                className="w-full p-3 rounded-lg bg-[#F0F0F0] text-[#4F4F4F] focus:outline-none focus:ring-2 focus:ring-[#E84D6E]" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm mb-1 text-[#4F4F4F]">Email</label>
              <input type="email" id="email" name="email" required
                className="w-full p-3 rounded-lg bg-[#F0F0F0] text-[#4F4F4F] focus:outline-none focus:ring-2 focus:ring-[#E84D6E]" />
            </div>

            <div>
              <label htmlFor="address" className="block text-sm mb-1 text-[#4F4F4F]">Endereço</label>
              <input type="text" id="address" name="address" required
                className="w-full p-3 rounded-lg bg-[#F0F0F0] text-[#4F4F4F] focus:outline-none focus:ring-2 focus:ring-[#E84D6E]" />
            </div>

            <button type="submit"
              className="w-full py-3 rounded-lg bg-white text-[#4F4F4F] font-semibold shadow hover:bg-[#f2f2f2] transition-colors duration-300">
              Criar conta
            </button>
          </form>
        </div>
      </div>

    </div>
  );
}

export default Cadastro;