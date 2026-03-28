import { use, useState } from "react";
import Models from "../models/Models";
import Cart from "../cart/Cart";
const ModelsSection = ({ dataPromise }) => {
  const modelsData = use(dataPromise);

  const [models, setModels] = useState("models");
const [userCart,setUserCart]=useState([])

  return (
    <section className="pb-20">
      <div className="flex justify-center items-center">
        <button
          className={`btn btn-ghost rounded-r-none ${models === "models" ? "bg-(--aiPrimary) text-white" : ""}`}
          onClick={() => setModels("models")}
        >
          Models
        </button>
        <button
          className={`btn btn-ghost rounded-l-none ${models === "cart" ? "bg-(--aiPrimary) text-white" : ""}`}
          onClick={() => setModels("cart")}
        >
          Cart ({userCart.length}){" "}
        </button>
      </div>

      <section className=" pt-20">
        {models === "models" ? <Models modelsData={modelsData} userCart={userCart} setUserCart={setUserCart} /> : <Cart userCart={userCart} setUserCart={setUserCart}/>}
      </section>
    </section>
  );
};

export default ModelsSection;
