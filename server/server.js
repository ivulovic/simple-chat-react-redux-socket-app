const WebSocket = require("ws");
const webSocketServer = new WebSocket.Server({port:8989});

const messages = [];

const broadcast = (data, ws) => {
  webSocketServer.clients.forEach((client)=>{
    if(client.readyState === WebSocket.OPEN && client!==ws){
      client.send(JSON.stringify(data));
    }
  })
};

webSocketServer.on("connection", (ws)=>{
  ws.on("message", (message)=>{
    const data = JSON.parse(message);
    switch (data.type){
      case "LOAD_MESSAGES":{
        ws.send(JSON.stringify({
          type:"LOAD_MESSAGES",
          messages
        }));
        broadcast({
          type:"LOAD_MESSAGES",
          messages
        }, ws);
        break;
      }
      case "ADD_MESSAGE":
        messages.push({id:messages.length+1, message: data.payload})
        broadcast({
          type:"ADD_MESSAGE",
          message: data.payload,
        }, ws);
        break;
      default: break;
    }
  })

  ws.on("close", ()=>{

  })
})