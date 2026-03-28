import { MdDelete } from "react-icons/md";

const CartCard = ({itemData,userCart,setUserCart}) => {
 

  

const handleCardDelete=()=>{


  const filterDeletedCart=userCart.filter((cart)=>cart.id!==id)

setUserCart(filterDeletedCart)

}

 const {title,id,image,price}=itemData
 
  return (
    <div className="flex justify-between items-center shadow border border-zinc-100 p-5 rounded-lg ">
<div className="flex items-center gap-5">
        <div className=""><img src={image} alt="" className="w-20 h-20 object-contain" /></div>
<div>
  <h6 className="text-2xl font-bold">{title}</h6>
<p className="text-xl font-semibold">${price}</p>
</div>
</div>

<div>
  <button className="btn btn-circle"><MdDelete style={{fontSize:"25px"}} onClick={handleCardDelete}/></button>
</div>
    </div>
  );
};

export default CartCard;