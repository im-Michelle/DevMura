export const logut = () =>{
    localStorage.removeItem('ownProfile');
    localStorage.removeItem('userDevmura');
    window.location.href = '/';
}