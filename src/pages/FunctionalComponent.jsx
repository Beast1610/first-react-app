  import React, {useState, useEffect, useRef} from "react";
  import BaseHoc from "../hoc/BaseHoc";

const FunctionalComponent = (props) =>{
    const [count, setCount] = useState(0);
    const [changeName, setChangeName] = useState("");

    // const prevref = useRef();

    const subtractionConst = () => {
        setCount(count - 1);
    };

    const { name, age, company, setName } = props;

    useEffect(() => {
        console.log('Components did mount');
    }, []);

    useEffect(() => {
        console.log('Components Did update');
    }, );

    useEffect(() => {
        console.log('Only on changing name');
    }, [changeName]);

    useEffect(() => {
        console.log('Only on props change');
    }, [props]);

    // useEffect(() => {
    //     console.log(prevRef.current.innerHTML === count);
    // }, []);

    useEffect(() => {
        console.log('Component did unmount');
    }, []);

    return(
        <div>
            <p>This is Functional Component</p>
            <button onClick={()=>setCount(count + 1)}>Cick me to Add 1</button>
            <button onClick={subtractionConst}>Cick me to Subtract 1</button>
            {/* <h1 ref={prevRef}>{count}</h1> */}
            <h1>
                {count}
            </h1>
            <h1>My name is {name}, I am {age}. My company is {company}</h1>
            <input onChange={(e) => setChangeName(e.target.value)}/>
            <button onClick={() => setName(changeName)}>Change name to Harry</button>
        </div>
    );
}

export default BaseHoc(FunctionalComponent);