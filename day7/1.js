



async function restaurant(){
    console.log("Order Placed");
    const pizza = await orderfood("pizza",1000);
    console.log(pizza);
    try{
        const burger=await orderfood("burger",2000);
    console.log(burger); 
    }
    catch(error){
        console.log(error);
    }
  
    const noodles=await orderfood("noodles",3000);
    console.log(noodles);
    console.log("ALL ORDER SERVED");
}
restaurant();