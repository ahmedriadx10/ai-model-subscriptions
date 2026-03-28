import { useState } from "react";
import { toast } from "react-toastify";


function statusShow(data){

  if(data==='favourite'){
return <span className="badge bg-[#ff6a00] border-0 h-8 rounded-full uppercase text-white font-semibold">❤️{data}</span>  }

  else if(data==='popular'){
return <span className="badge bg-(--aiPrimary) border-0 h-8 rounded-full uppercase text-white font-semibold">🔥{data}</span>  }

  else if(data==='mostwanted'){
return <span className="badge bg-[#ff9900] uppercase text-white border-0 h-8 rounded-full font-semibold">⭐ MOST WANTED</span>  }
}


const Card = ({cardData,userCart,setUserCart}) => {
 


  const {id,title,description,price,image,status}=cardData

  const findCartData=userCart.find((x)=>x.id===id)


const handleSubscribe=()=>{

  if(findCartData){
    toast.error('Item already added')
    return
  }

  setSubscribed(true)

  setUserCart([...userCart,cardData])
toast.success('Item add to cart sucessfull !')

}

  const [subscribed,setSubscribed]=useState(false)
 
  return (
      <div className="card bg-base-100  shadow-sm overflow-hidden">
<div className="relative flex justify-center items-center bg-zinc-200 h-56">
  <img src={image} className=" w-45 h-45 object-contain" alt={title} />
<div className="absolute top-3 right-3 ">{statusShow(status)}</div>
</div>
  <div className="card-body">
    <h2 className="card-title text-2xl font-bold">{title}</h2>
 <p>{description}</p>
    <div>
      <p className="text-xl font-semibold">{price===0?<span className="text-success font-bold">Free</span>:`$${price}/Month` }</p> 
      
      </div>
  <button onClick={handleSubscribe} className="mt-2 btn rounded-full bg-(--aiPrimary) text-white" >{subscribed?'Subscribed':'Subscribe Now'}</button>
 
  </div>
</div>
  );
};

export default Card;