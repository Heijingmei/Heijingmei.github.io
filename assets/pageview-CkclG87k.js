import{_ as o,u as n}from"./app-BIC4p-pX.js";const s=async()=>{try{const{pageviewCount:e}=await o(()=>import("./app-BIC4p-pX.js").then(r=>r.N),[]),t=n();return e({serverURL:t.serverURL})}catch{console.error("@waline/client is not installed!")}};export{s as updatePageview};