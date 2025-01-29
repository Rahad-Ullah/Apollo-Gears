/* eslint-disable @typescript-eslint/no-explicit-any */
import nexiosInstance from "@/config/nexios.config";
import AddCar from "./components/AddCar";

const CarsManagement = async () => {
  const res: any = await nexiosInstance.get("/cars", {
    next: {
      tags: ["carsTable"],
    },
  });

  return (
    <>
      <AddCar />

      <div className="">
        {res?.data?.data?.map((car: any) => (
          <div key={car._id}>
            <h1 className="text-xl font-bold">{car.name}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default CarsManagement;
