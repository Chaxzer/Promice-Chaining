let p1 = new Promise ((resolve,reject)=>{
  setTimeout(()=>{
    let div = document.createElement('div');
    div.id = 'pehla';
    document.body.prepend(div);
    div.innerHTML = `<h1>"wait one second"</h1>`;
    resolve("69")
  },1100)
  
}) 

p1.then((value)=>{
  console.log(value);
  let p2 = new Promise((resolve,reject)=>{  
    setTimeout(()=>{
      let div = document.createElement('div');
      div.id = 'dusra';
      document.body.prepend(div);
      div.innerHTML = `<h1>"wait two second"</h1>`;
      resolve("69420")
    },2200)
  })
  return p2;
}).then((value)=>{
  console.log(value);
//if you donot want to return directly then write return instead of putting the promise in the variable
  
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      let div = document.createElement('div');
      div.id = 'teesra';
      document.body.prepend(div);
      div.innerHTML = `<h1>"wait three second"</h1>`;
      resolve("694209211")
    },3300)
  })
  
}).then((value)=>{
  document.body.appendChild(document.createElement("h1")).innerHTML = `"khatam"`;
})


// inshort it is a fancy ifelse LOL