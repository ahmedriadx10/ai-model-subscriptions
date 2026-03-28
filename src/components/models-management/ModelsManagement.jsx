import { Suspense } from "react";
import ModelsSection from "../models-section/ModelsSection";
import { GiH2O } from "react-icons/gi";

const dataFetcher=async ()=>{
  const res=await fetch('./models.json')
  return res.json()
}


const dataPromise=dataFetcher()
const ModelsManagement = () => {
  


  
  return (
    <>
     
<Suspense fallback={<h2>Data is loading</h2>}>
   <ModelsSection dataPromise={dataPromise} />
  </Suspense>    
    </>
  );
};

export default ModelsManagement;