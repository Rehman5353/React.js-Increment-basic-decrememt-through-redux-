import './App.css';


function App() {
  return (
    <div className="App">
               <h1 >Increment / Decrement Counter</h1>
               <h1 >Increment / Decrement Counter</h1>
               <div  style={{display:"flex", justifyContent:"center",}}>

                  <div   style={{margin:"22px", width:"70px", cursor:"pointer", border:"2px solid black", padding:"2px 12px"}}  >
                  <span style={{fontSize:"52px",display:"inline-block", paddingTop:"2px"}} > - </span> </div>


                  <input   style={{margin:"42px", border:"2px solid black", padding:"22px 12px"}} type="text"  name=''  />
                
                  <div style={{margin:"22px", width:"70px", cursor:"pointer", border:"2px solid black", padding:"2px 12px"}}  >
                  <span style={{fontSize:"52px",display:"inline-block", paddingTop:"2px"}} > + </span> </div>


               </div>
    </div>
  );
}

export default App;
