import useNotification from "./hooks/use-notification";


function App() {

  const {NotificationComponent,handleNotification}=useNotification("bottom");
  return (
    <div className="App">
      <button onClick={()=>{
        handleNotification({
          type:"success",
          message:"file sent successfully",
          timmer:3000
        })
      }}>success</button>
      <button onClick={()=>{
        handleNotification({
          type:"error",
          message:"file sent error",
          timmer:3000
        })
      }}>error</button>
      <button onClick={()=>{
        handleNotification({
          type:"info",
          message:"file sent info",
          timmer:3000
        })
      }}>info</button>
      <button onClick={()=>{
        handleNotification({
          type:"warning",
          message:"file sent warning",
          timmer:3000
        })
      }}>warning</button>
      {NotificationComponent}
    </div>
  );
}

export default App;
