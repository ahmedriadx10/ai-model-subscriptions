import Card from "../card/Card";

const Models = ({modelsData}) => {
  
  console.log(modelsData)
  return (
    <div>
   <div className="text-center space-y-4">
    <h3 className="text-4xl font-bold">Choose Your AI Model</h3>
      <p className="text-xl text-neutral-500">One subscription gives you access to all frontier AI models</p>
    </div>   
   


   <div className="mt-10 border grid md:grid-cols-2 lg:grid-cols-3 gap-5">
   
{modelsData.map(data=><Card key={data.id} cardData={data}/>)}


   </div>

    </div>
  );
};

export default Models;  