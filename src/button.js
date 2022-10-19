import React,{useState} from 'react'
const FunctionalCount = () => {
    const [count,setCount] = useState(0)
    const handleClick = () =>{
        setCount(count+1)
    }
    const handledecrease = () =>{
        setCount(count-1)
    }
   
    return(
    <>
    <div className="count">
     <h1>Counter:{count}</h1>
     <button onClick={() => handleClick()}>Increase</button><br></br>
     <br></br>
    {count !==0 && <button onClick={() => handledecrease()}>Decrease</button>}
    <br></br><br></br>

        </div>
        <div class ="slide">
            <h1>QUOTES ABOUT LIFE</h1>
           

<h4>The purpose of our lives is to be happy.</h4>



  </div>
    </>
    );
}
 
export default FunctionalCount;



