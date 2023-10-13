export const getCurrentDate = ()=>{
    return new Date().toLocaleDateString();
}

export const genrateId =()=>{
   return Math.floor(1000 + Math.random() * 9000);
}