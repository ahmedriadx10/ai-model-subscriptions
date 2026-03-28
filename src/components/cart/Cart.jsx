import { toast } from "react-toastify";
import CartCard from "../card/CartCard";

const Cart = ({userCart,setUserCart}) => {

  const checkOutHandler=()=>{
    setUserCart([])
    toast.success('Payment Successfull !')
  }


  return (
    <div>

<div>
  <h6 className="font-bold text-5xl">Your Cart</h6>



{userCart.length===0?

// user emthy cart 
<div className="py-10 flex flex-col justify-center items-center">

<img src="https://cdn-icons-png.flaticon.com/512/2762/2762885.png" alt="empthy cart img" className="w-20 h-20 mb-5"/>
<h6 className="text-2xl font-semibold text-gray-500">Your Cart is Empthy</h6>
</div>



:<div className="max-w-3xl mx-auto  py-10">



<div className="space-y-5 my-5">
{userCart.map(item=><CartCard key={item.id} itemData={item} userCart={userCart} setUserCart={setUserCart} ></CartCard>)}

</div>

<div className="space-y-5">
{/* total */}
  
<div className="p-3 bg-neutral text-2xl flex justify-between items-center text-white rounded-lg">
  <h6 className="font-bold ">Total</h6>
  <p>$ {userCart.reduce((acc,ini)=>acc+ini.price,0)}</p>
</div>

{/* checkout button */}

<button className="btn w-full bg-(--aiPrimary) text-white rounded-lg" onClick={checkOutHandler} >Proceed to Checkout</button>
</div>

</div> }







</div>


    </div>
  );
};

export default Cart;