import main from './_Main/index';

class Server {
  
    public start(){
      main();
    }
}


const myServer = new Server();
myServer.start();