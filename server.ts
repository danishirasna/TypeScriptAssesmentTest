import main from './index';

class Server {
  
    public start(){
      main();
    }
}


const myServer = new Server();
myServer.start();