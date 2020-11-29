if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('../sw.js')
    .then((regObj) => console.log("Service worker registered",regObj))
    .catch((err) => console.log("Service worker not registered",err))
}