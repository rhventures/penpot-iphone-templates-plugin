penpot.ui.open("IPhone UI Mockup Template", `?theme=${penpot.theme}`);


penpot.ui.onMessage<string>((message) => {
  if (message.includes("create")) {

    // ---------------------------------------------------------------------------------IPHONE-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //Adjusting the width and height of the phone will adjust the scaling of the icons as well 
    //All width and heights have been the base size scaled by a factor of 150 to fit on the Penpot screen
    var widthIphone13 = 379.5;     //379.5
    var heightIphone13 = 777;      //777 
    var cameraChoice = 1;
    var version = "";

    var boardColor= "#ffffff";
    var iconColor = "#000000";

    var battColor1 = "#d8d8d8";
    var battColor2 = "#d8d8d8";
  
    //Super Retina XDR Display - 5.4"
    if(message.includes("Version1I")){
      widthIphone13 = 379.5; // Width: 2.53
      heightIphone13 = 777; // Height: 5.18 --> IPhone 12/13 mini
      cameraChoice = 1;
      if(message.includes("- name1")){
        version = "12' mini";
      }
      else if(message.includes("- name2")){
        version = "13' mini";
      }
    }
    //Super Retina XDR Display - 6.1"
    else if(message.includes("Version2I")){
      widthIphone13 = 423; //Width 2.82
      heightIphone13 = 867; //Height: 5.78 --> IPhone 12/12 pro/13/13 pro/14
      cameraChoice = 1;
      if(message.includes("- name1")){
        version = "12'";
      }
      else if(message.includes("- name2")){
        version = "12' pro";
      }
      else if(message.includes("- name3")){
        version = "13'";
      }
      else if(message.includes("- name4")){
        version = "13' pro";
      }
      else if(message.includes("- name5")){
        version = "14'";
      }
    }
    //Super Retina XDR Display - 6.7"
    else if(message.includes("Version3I")){
      widthIphone13 = 460.5; //Width 3.07
      heightIphone13 = 949.5; //Height: 6.33 --> IPhone 12 pro max/13 pro max/14 plus
      cameraChoice = 1;
      if(message.includes("- name1")){
        version = "12' pro max";
      }
      else if(message.includes("- name2")){
        version = "13' pro max";
      }
      else if(message.includes("- name3")){
        version = "14' plus";
      }
    }
    //Super Retina XDR Display - 6.1"
    else if(message.includes("Version4I")){
      widthIphone13 = 423; //Width 2.82
      heightIphone13 = 871.5; //Height: 5.81 --> IPhone 14 pro/15/15 pro/16
      cameraChoice = 2;
      if(message.includes("- name1")){
        version = "14' pro";
      }
      else if(message.includes("- name2")){
        version = "15' ";
      }
      else if(message.includes("- name3")){
        version = "15' pro";
      }
      else if(message.includes("- name4")){
        version = "16'";
      }
    }
    //Super Retina XDR Display - 6.3"
      else if(message.includes("Version5I")){
      widthIphone13 = 421.5; //Width 2.81
      heightIphone13 = 883.5; //Height: 5.89 --> IPhone 16 pro
      cameraChoice = 2;
      if(message.includes("- name1")){
        version = "16' pro ";
      }
    }
    //Super Retina XDR Display - 6.7"
    else if(message.includes("Version6I")){
      widthIphone13 = 453; //Width 3.02
      heightIphone13 = 943.5; //Height: 6.29 --> IPhone 14 pro max/15 pro max/15 plus/16 plus
      cameraChoice = 2;
      if(message.includes("- name1")){
        version = "14' pro max";
      }
      else if(message.includes("- name2")){
        version = "15' pro max";
      }
      else if(message.includes("- name3")){
        version = "15' plus";
      }
      else if(message.includes("- name4")){
        version = "16' plus";
      }
    }
    //Super Retina XDR Display - 6.9"
    else if(message.includes("Version7I")){
      widthIphone13 = 459; //Width 3.06
      heightIphone13 = 963; //Height: 6.42 --> IPhone 16 pro max
      cameraChoice = 2;
      if(message.includes("- name1")){
        version = "16' pro max";
      }
    }

    if(message.includes("Dark")){
      boardColor= "#000000";
      iconColor = "#ffffff";
      battColor1 = "#636363"; 
      battColor2 = "#ffffff";
    }
    else{
      boardColor= "#ffffff";
      iconColor = "#000000";
      battColor1 = "#d8d8d8";
      battColor2 = "#d8d8d8";
    }
    
    //Behind Board
    const shape3=penpot.createRectangle();
    shape3.name= "Rim";
    shape3.resize(widthIphone13/.949,heightIphone13/.97); 
    shape3.borderRadius = 56;
    shape3.x = penpot.viewport.center.x-widthIphone13/37.95;
    shape3.y = penpot.viewport.center.y-heightIphone13/77.7;
    shape3.fills = [{fillColor:"#1c1c1d"}];

     //Board
    const shape=penpot.createRectangle();
    shape.name = "Main Screen"; 
    shape.resize(widthIphone13,heightIphone13); // Starting values are the dimensions of the IPhone 13 mini - 2.53 x 5.18 scaled by 150 
    shape.borderRadius = 56;
    shape.x = penpot.viewport.center.x;
    shape.y = penpot.viewport.center.y;
    shape.fills = [{fillColor:boardColor}];

    //Camera
    const camera = penpot.createRectangle();
    camera.name = "Camera";
    if(cameraChoice == 1){
      camera.resize(widthIphone13/1.93,heightIphone13/17.266); 
      camera.borderRadius = 15;
      camera.x = penpot.viewport.center.x+widthIphone13/4.28;
      camera.y = penpot.viewport.center.y-heightIphone13/77.7;
      camera.fills = [{fillColor:"#1c1c1d"}];
    }
    else if(cameraChoice == 2){
      camera.resize(widthIphone13/2.59,heightIphone13/23.5); 
      camera.borderRadius = 90;
      camera.x = penpot.viewport.center.x+widthIphone13/3.3;
      camera.y = penpot.viewport.center.y+heightIphone13/103.6;
      camera.fills = [{fillColor:"#1c1c1d"}]; }

    //White Bar (IPhone)
    const shape2 = penpot.createRectangle();
    shape2.name = "Home Bar";
    shape2.resize(widthIphone13/2.53,heightIphone13/51.8);
    shape2.borderRadius = 56;
    shape2.x = penpot.viewport.center.x+widthIphone13/3.3;
    shape2.y = penpot.viewport.center.y+heightIphone13/1.05;
    shape2.fills = [{fillColor:iconColor}];

    //Time 
    const text = penpot.createText("9:25");
    if(text){
      text.name= "Time";
      text.x = penpot.viewport.center.x+widthIphone13/10.8; 
      text.y = penpot.viewport.center.y+heightIphone13/51.8;
      text.resize(widthIphone13/6.9,heightIphone13/11.95); //For Iphone 13 mini this is - (55,65)
      var font = widthIphone13/23.71;
      text.fontSize = (font as unknown as string); //For Iphone 13 mini this is - "16"
      text.fills = [{fillColor:iconColor}];
      text.fontFamily = "Roboto";
    }

    //Bars
    const rect1=penpot.createRectangle();
    rect1.resize(widthIphone13/75.9,heightIphone13/77.7); //For Iphone 13 mini this is -  (5,10)
    rect1.borderRadius = 56;
    rect1.fills = [{fillColor:iconColor}];

    const rect2=penpot.createRectangle();
    rect2.resize(widthIphone13/75.9,heightIphone13/59.7692); //For Iphone 13 mini this is -  (5,13)
    rect2.borderRadius = 56;
    rect2.fills = [{fillColor:iconColor}];

    const rect3=penpot.createRectangle();
    rect3.resize(widthIphone13/75.9,heightIphone13/48.56); //For Iphone 13 mini this is - (5,16)
    rect3.borderRadius = 56;
    rect3.fills = [{fillColor:iconColor}];

    const rect4=penpot.createRectangle();
    rect4.resize(widthIphone13/75.9,heightIphone13/40.89); //For Iphone 13 mini this is - (5,19)
    rect4.borderRadius = 56;
    rect4.fills = [{fillColor:iconColor}];

    //Grouping all the components into a "Bars" folder
    penpot.selection = [rect1,rect2,rect3,rect4];
    const barGroup = penpot.group(penpot.selection);
    if(barGroup){
      barGroup.name = "Bars";
      barGroup.x = penpot.viewport.center.x+widthIphone13/1.44;
      barGroup.y = penpot.viewport.center.y+heightIphone13/31;
      rect1.x = barGroup.x;
      rect1.y = barGroup.y+(heightIphone13/259)*3;
      rect2.x = barGroup.x+(widthIphone13/54.21);
      rect2.y = barGroup.y+(heightIphone13/259)*2
      rect3.x = barGroup.x+(widthIphone13/54.21)*2;
      rect3.y = barGroup.y+(heightIphone13/259);
      rect4.x = barGroup.x+(widthIphone13/54.21)*3;
      rect4.y = barGroup.y; 
    }

    //5G
    const text2 = penpot.createText("5G");
    if(text2){
      text2.name= "5G";
      text2.x = penpot.viewport.center.x+widthIphone13/1.30;
      text2.y = penpot.viewport.center.y+heightIphone13/33; 
      text2.resize(widthIphone13/6.9,heightIphone13/11.95); //For Iphone 13 mini this is - (55,65)
      text2.fills = [{fillColor:iconColor}];
      text2.fontFamily = "Roboto";
      var font = widthIphone13/23.71
      text2.fontSize = (font as unknown as string); //For Iphone 13 mini this is - "16"
    }

    //Battery
    const batt1 = penpot.createRectangle();
    batt1.resize(widthIphone13/75.9,heightIphone13/111); //Dimensions are (5,7) for the Iphone 13 mini but these are scaled by the size of the change in width and height to fit all Iphones
    batt1.borderRadius = 2;
    batt1.fills = [{fillColor:battColor2}];

    var batteryWidth = widthIphone13/9.73; //For Iphone 13 mini this is - 39
    var batteryHeight = heightIphone13/38.85; //For Iphone 13 mini this is - 20

    const batt3 = penpot.createRectangle();
    batt3.resize(batteryWidth,batteryHeight);
    batt3.borderRadius = 5;
    batt3.fills = [{fillColor:battColor1}];

    const batt2 = penpot.createRectangle();
    batt2.resize(batteryWidth-4,batteryHeight-4);
    batt2.borderRadius = 2;
    batt2.fills = [{fillColor:"#ffffff"}];

    const batt4 = penpot.createRectangle();
    batt4.resize(batteryWidth-8,batteryHeight-8);
    batt4.borderRadius = 2;
    batt4.fills = [{fillColor:iconColor}];

    //Grouping all the components into a "Battery" folder
    penpot.selection = [batt1,batt3,batt2,batt4];
    const battGroup = penpot.group(penpot.selection);
    if(battGroup){
      battGroup.name = "Battery";
      battGroup.x= penpot.viewport.center.x+widthIphone13/1.18;
      battGroup.y= penpot.viewport.center.y+heightIphone13/31;
      batt2.x = battGroup.x+2;
      batt2.y = battGroup.y+2;
      batt4.x = battGroup.x+4;
      batt4.y = battGroup.y+4;
      batt1.x = battGroup.x+batteryWidth-2.5;
      batt1.y = battGroup.y+batteryHeight/3.5;
    }

    //Grouping the Bars, 5G, and Battery in a "Status Bar" folder
    if(text2 && battGroup && barGroup){
      penpot.selection = [battGroup,barGroup, text2];
      const statusB = penpot.group(penpot.selection); 
      if(statusB){
        statusB.name="Status Bar";
        statusB.resize(widthIphone13/5.34,heightIphone13/15.54); //For the Iphone 13 this is - (80,50)
        statusB.x = penpot.viewport.center.x + widthIphone13/1.313;
        statusB.y = penpot.viewport.center.y + heightIphone13/51.8;
      }
      //Grouping all the components into a "IPhone" folder
        if(text && statusB){ 
          penpot.selection = [shape,shape2, camera, shape3, text, statusB];
          const phoneGroup = penpot.group(penpot.selection);
          if(phoneGroup){
            phoneGroup.name= "IPhone -  " + version;
            if(message.includes("Dark")){
              phoneGroup.name+=" (Dark Mode)";
            }
          }
        }
    }
     
  }
}); 

// Update the theme in the iframe
penpot.on("themechange", (theme) => {
  penpot.ui.sendMessage({
    source: "penpot",
    type: "themechange",
    theme,
  });
});