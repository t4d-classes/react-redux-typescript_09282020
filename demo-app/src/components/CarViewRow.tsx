import React from "react";

import { Car } from "../models/car";

export type CarViewRowProps = {
  car: Car;
  onEditCar: (carId: number) => void;
  onDeleteCar: (carId: number) => void;
};

export function CarViewRow({
  car,
  onEditCar: editCar,
  onDeleteCar: deleteCar,
}: CarViewRowProps) {
  return (
    <tr>
      <td>{car.id}</td>
      <td>{car.make}</td>
      <td>{car.model}</td>
      <td>{car.year}</td>
      <td>{car.color}</td>
      <td>{car.price}</td>
      <td>
        <button type="button" onClick={() => editCar(car.id)}>
          Edit
        </button>
        <button type="button" onClick={() => deleteCar(car.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}
