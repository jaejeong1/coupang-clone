import cookies from "js-cookie";

class Service {
    accessToken = "accessToken";
    refreshToken = "refreshToken";

    getAccessToken(): string | undefined {
        return cookies.get(this.accessToken);
    }

    getRefreshToken(): string | undefined {
        return cookies.get(this.refreshToken);
    }

    setTokens(accessToken: string, refreshToken: string): void {
        cookies.set(this.accessToken, accessToken, { expires: 1 });
        cookies.set(this.refreshToken, refreshToken, { expires: 7 });
    }
}

export default Service;