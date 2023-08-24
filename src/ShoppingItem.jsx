import { useState } from "react";

function ShoppingItem() {

    const [count, setcount] = useState(0);

    function handleAdd(){
        setcount(count+1);
    }

    function handleRemove(){
        setcount(count-1);
    }

    return ( 
        <div style={{marginLeft:"25%",marginTop:"10%"}}>
            <div style={{display:"flex"}}>
                <div>
                 <img src="https://picsum.photos/200"

                  width={"100px"}
                  alt="Nike Shoes" />
                 
                 </div>
                <div style={{marginLeft:"2em"}}>
                    <h3 style={{marginTop:"0px"}}>Item name</h3>
                    <h3>{count<10?count + " Items Added ":"Out of stock"}</h3>
                    <div style={{display:"flex"}}>
                        <button style={{
                                 backgroundColor:count===10?"lightgray":"green",
                                 border:"none",
                                 color:"white"
                        }} onClick={handleAdd}
                           disabled={count===10?true:false}
                        >Add</button>

                        <button style={{

                                 marginLeft:"1em",
                                 backgroundColor:count===0?"lightgray":"red",
                                 border:"none",
                                 color:"white"

                        }} onClick={handleRemove}
                           disabled={count===0?true:false}
                        >Remove</button>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default ShoppingItem;