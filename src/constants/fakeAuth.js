
export const fakeAuth = {
    isAuthenticated: false,
    username: "Admin",
    password: "123123",
    authenticated(cd){
        this.isAuthenticated = true;
        setTimeout(cd, 100)
    }
};
