const isAuthenticated = function(){
  const token = localStorage.getItem('user');
  if(!token){
    // console.log('Not Authenticated')
  }else{
    // console.log('Authenticated')
  }
  return token ? true : false;
}

export default isAuthenticated
