import { use, useState } from "react";
import Models from "../models/Models";
import Cart from "../cart/Cart";
const ModelsSection = ({ dataPromise }) => {
  const modelsData = use(dataPromise);

  const [models, setModels] = useState("models");
const [userCart,setUserCart]=useState([])

  return (
    <section className="pb-20 border">
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
          Cart (0){" "}
        </button>
      </div>

      <section className="border pt-20">
        {models === "models" ? <Models modelsData={modelsData} /> : <Cart />}
      </section>
    </section>
  );
};

export default ModelsSection;
