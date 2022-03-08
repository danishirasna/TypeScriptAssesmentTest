import main from './_Main/index';
class Server {  
    public start(){
      main(__dirname);
    }
}

const myServer = new Server();
myServer.start();