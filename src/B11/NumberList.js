const arr = [1,2,3,4,5,6,7];
<NumberList xx ={arr}/>

function NumberList(props){
    const xx = props.xx;
    const listItems = xx.map((value) => <li key={value.toString()}>
        {value}
    </li>)
    console.log(listItems);
    return(
        <>
        {listItems}
        </>
    )
}
export default NumberList;  