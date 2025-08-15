import "./style.css";

// get the current theme from the URL
const searchParams = new URLSearchParams(window.location.search);
document.body.dataset.theme = searchParams.get("theme") ?? "light";

document.querySelector("[id = 'Button']")?.addEventListener("click", () => {
  // send message to plugin.ts
  console.log(document.getElementById("Button")?.dataset.handler);
  parent.postMessage(document.getElementById("Button")?.dataset.handler, "*");
});


// Listen plugin.ts messages
window.addEventListener("message", (event) => {
  if (event.data.source === "penpot") {
    document.body.dataset.theme = event.data.theme;
  }
});

// function phoneType(){
//         let type = (document.getElementById('phoneType') as HTMLInputElement).value;
//         let lightDark = "Light";
//         if(type == "IPhone"){ 
//           lightDark = "Light";
//         }
//         if(type == "IPhoneD"){
//           lightDark = "Dark";
//         }
//         return lightDark;
//       }
//       function changeI(){
//         let img1 = document.getElementById("pic1")!;
//         let img2 = document.getElementById("pic2")!;
//         let img3 = document.getElementById("pic3")!;
//         let img4 = document.getElementById("pic4")!;
//         let version=(document.getElementById("versionSelectorI") as HTMLInputElement).value;
//         let button = document.getElementById("button")!;
      
//         if(version.includes("Version1I")){
//           img1.style.width = "150px";
//           img1.style.height = "300px";
//           img2.style.width = "150px";
//           img2.style.height = "300px";
//           button.style.paddingTop = "300px";

//         }
//          else if(version.includes("Version2I")){
//           img1.style.width = "175px";
//           img1.style.height = "350px";
//           img2.style.width = "175px";
//           img2.style.height = "350px";
//           button.style.paddingTop = "350px";
//         }
//         else if(version.includes("Version3I")){
//           img1.style.width = "200px";
//           img1.style.height = "400px";
//           img2.style.width = "200px";
//           img2.style.height = "400px";
//           button.style.paddingTop = "400px";         
//         }
//         else if(version.includes("Version4I")){
//           img3.style.width = "175px";
//           img3.style.height = "350px";
//           img4.style.width = "175px";
//           img4.style.height = "350px";
//           button.style.paddingTop = "350px";
//         }
//         else if(version.includes("Version5I")){
//           img3.style.width = "200px";
//           img3.style.height = "400px";
//           img4.style.width = "200px";
//           img4.style.height = "400px";  
//           button.style.paddingTop = "400px";      
//         }
//         else if(version.includes("Version6I")){
//           img3.style.width = "250px";
//           img3.style.height = "500px";
//           img4.style.width = "250px";
//           img4.style.height = "500px";
//           button.style.paddingTop = "500px";
          
//         }
//         else if(version.includes("Version7I")){
//           img3.style.width = "300px";
//           img3.style.height = "600px";
//           img4.style.width = "300px";
//           img4.style.height = "600px";
//           button.style.paddingTop = "600px";
//         }

//         console.log(version);
//         return version;

//         //If you don't need to have light/dark version, you can remove the createMessage() and include the following code
//             //var message = "create"+ version;
//             //var element= document.getElementById("Button");
//             //element.setAttribute("data-handler", message);
//             //console.log("data-handler:", element.dataset.handler);
//       }
//       export function createMessage(){
//         let img1 = document.getElementById("pic1")!;
//         let img2 = document.getElementById("pic2")!;
//         let img3 = document.getElementById("pic3")!;
//         let img4 = document.getElementById("pic4")!;

//         let version = changeI();
//         let type = phoneType();
//         let message = "create" +type+version;
//         console.log(message);

//         if(message.includes("LightVersion1I") || message.includes("LightVersion2I") || message.includes("LightVersion3I")){
//           img1.style.visibility = "visible";
//           img2.style.visibility = "hidden";
//           img3.style.visibility = "hidden";
//           img4.style.visibility = "hidden";
//           console.log("true");
//         }
//         else if(message.includes("DarkVersion1I") || message.includes("DarkVersion2I") || message.includes("DarkVersion3I")){
//           img1.style.visibility = "hidden";
//           img2.style.visibility = "visible";
//           img3.style.visibility = "hidden";
//           img4.style.visibility = "hidden";
//           console.log("true");
//         }
//         else if(message.includes("LightVersion4I") || message.includes("LightVersion5I") || message.includes("LightVersion6I")|| message.includes("LightVersion7I")){
//           img1.style.visibility = "hidden";
//           img2.style.visibility = "hidden";
//           img3.style.visibility = "visible";
//           img4.style.visibility = "hidden";
//           console.log("true");
//         }
//         else if(message.includes("DarkVersion4I") || message.includes("DarkVersion5I") || message.includes("DarkVersion6I")|| message.includes("DarkVersion7I")){
//           img1.style.visibility = "hidden";
//           img2.style.visibility = "hidden";
//           img3.style.visibility = "hidden";
//           img4.style.visibility = "visible";
//           console.log("true");
//         }

//         let element= document.getElementById("Button")!;
//         element.setAttribute("data-handler", message);
        
//         console.log("data-handler:", element.dataset.handler);

//       }
