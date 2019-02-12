//#region ASYNC E AWAIT

const minhaPromisse = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ok");
    }, 1000);
  });

// minhaPromisse().then(resp=>{
//     console.log(resp);
// });

async function executaPromise() {
  const response = await minhaPromisse();
  console.log(response);
}

executaPromise();

//#endregion
