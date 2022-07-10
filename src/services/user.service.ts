
import cookies from "js-cookie";
import Service from "./service";

class UserService extends Service {
  async me() {
    const accessToken = cookies.get("accessToken");
    if (!accessToken) {
      return;
    }

    const { data } = await this.get("/users/me");

    return data;
  }

  async read(id: number) {
    const { data } = await this.get("/users/" + id);

    return data;
  }
}

export default new UserService();
