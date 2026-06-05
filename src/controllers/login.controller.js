import { saveSession } from "@/utils";
import { navigateTo } from "@/router/router";
import { http } from "@/api/http";
import { homeController } from "./home.controller";
export const loginController = (email,password) => {
  const form = document.querySelector("#loginForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = form.email.value.trim();
    const password = form.password.value;
    const users = response.data

    try {
      const users = await http.get(
        `/users?email=${email}&
        password=${password}`,
      );

      if (!email.lenght ==0) {
        throw new Error ('verificar credenciales');
        return;
      }
      const user = users[0]
      if (users.password.trim() !== password.trim()) {
        throw new Error ('verificar credenciales');
      }
      return user
      saveSession({
        id: users[0].id,
        name: users[0].name,
        role: users[0].role,
      });

      navigateTo("/home");
    } catch (error) {
      console.error(error);
      alert("Error conectando con la API");
    }
  });
};
