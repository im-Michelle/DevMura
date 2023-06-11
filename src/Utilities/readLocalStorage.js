export const readLocalStorage = () => {
    const userInfo = JSON.parse(localStorage.getItem("userDevmura"));
    if (userInfo) {
        return userInfo;
    } else {
        return null;
    }
}
