import './App.css';


function App() {
  return (
    <div className="App">
               <h1 >Increment / Decrement Counter</h1>
               <div>
                <a style={{margin:"42px", cursor:"pointer", border:"2px solid black", padding:"22px 12px"}}  >
                  <span style={{fontSize:"52px",display:"inline-block", paddingTop:"2px"}} > - </span> </a>
                  <input   style={{margin:"42px", border:"2px solid black", padding:"22px 12px"}} type="text"  name=''  />
                
                  <a style={{margin:"42px",cursor:"pointer", border:"2px solid black", padding:"22px 12px"}}  >
                  <span style={{fontSize:"52px",display:"inline-block", paddingTop:"2px"}} > + </span> </a>
               </div>
    </div>
  );
}

export default App;
