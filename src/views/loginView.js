import { loginController } from "@/controllers/login.controller";

export default function loginView() {

  return `
    <div class="min-h-screen flex justify-center items-center bg-slate-100">
      <div class="bg-white p-8 rounded-lg shadow w-96">
        <h1 class="text-3xl font-bold mb-5">Login</h1>
        
        <form id="loginForm">
          <input
            type="email"
            name="email"
            placeholder="Correo"
            class="border w-full p-2 rounded mb-3"
            required
          >
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            class="border w-full p-2 rounded mb-4"
            required
          >
          <button
            type="submit" 
            class="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  `;
}
