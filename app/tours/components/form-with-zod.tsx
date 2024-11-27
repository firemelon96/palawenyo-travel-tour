"use client";

import z from "zod";
import { Controller, FieldValues, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import { BiMinus, BiPlus } from "react-icons/bi";

import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { formatPeso } from "@/app/lib/helpers";
import { HotelPrice, PrivatePrice } from "@/types";

// Define the Zod schema
const schema = z.object({
  date: z.date().nullable(),
  travellerType: z.enum(["Private", "Joiners"]),
  notes: z.string().min(1, "Notes are required"),
  count: z.number().min(1, "Minimum of 1 person"),
  hotel: z.string().optional(),
});

type Props = {
  duration: string;
  price?: number;
  name: string;
  privatePrice: PrivatePrice[];
  hotelPrice: HotelPrice[];
};

const FormWithZOD = ({
  name,
  duration,
  price,
  privatePrice,
  hotelPrice,
}: Props) => {
  const durationNum = Number(duration.split(" ")[0]) - 1;
  const router = useRouter();

  const hotelNames = hotelPrice.map((item) => item.hotelName);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isLoading },
    setValue,
    watch,
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      date: null,
      count: 1,
      travellerType: "Joiners",
      notes: "",
      hotel: hotelNames[0],
    },
  });

  const onSubmit = (data: FieldValues) => {
    const { date, count, travellerType, notes, hotel } = data;

    // console.log(data);
    const hotelName = hotel ? `Hotel name: ${hotel}` : "";

    router.push(
      `https://m.me/107338648650143?text=Booking%20from%20WebApp%0ATour%20name:%20${name}%0ADate:%20${format(new Date(date), "MMMM dd")}%0AParticipants:%20${count}x%0ATraveller%20Type:%20${travellerType}%0ANotes:%20${notes}%0A${hotelName}%0ATotal%20Price:%20${totalPrice}`,
    );
  };

  const count = watch("count");
  const travellerType = watch("travellerType");
  const hotel = watch("hotel");

  // const priceHotel = hotelPrice.find((item) => item.hotelName === hotel)?.price;

  // console.log({ hotelName, priceHotel });

  const [tourPrice, setTourPrice] = useState(0);

  const totalPrice = tourPrice
    ? formatPeso(tourPrice * count)
    : "To be discussed";

  useEffect(() => {
    if (travellerType === "Joiners") {
      setTourPrice(price || 0);
    }

    if (travellerType === "Private") {
      const priceEntry =
        privatePrice.find(
          (entry) => count >= entry.min && count <= entry.max,
        ) || privatePrice[privatePrice.length - 1];

      setTourPrice(priceEntry?.price);
    }

    if (hotel) {
      const priceHotel = hotelPrice.find(
        (item) => item.hotelName === hotel,
      )?.price;

      setTourPrice(priceHotel || 0);
    }
  }, [travellerType, count, privatePrice, hotel]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Controller
        control={control}
        name="date"
        render={({ field }) => (
          <DatePicker
            onChange={field.onChange}
            selected={field.value}
            minDate={new Date()}
            placeholderText="Select a date for your trip"
            className="border-third mt-1 block w-full rounded-md border border-gray-300 p-2 text-xl text-slate-500 shadow-sm dark:bg-sky-400/10"
          />
        )}
      />
      {hotelPrice.length > 0 && (
        <select
          {...register("hotel")}
          className="rounded-md border border-slate-400 p-2 dark:bg-sky-500/10 dark:text-slate-400"
        >
          {hotelNames.map((hotel) => (
            <option key={hotel} value={hotel}>
              {hotel}
            </option>
          ))}
        </select>
      )}
      <div className="flex items-center gap-2">
        {privatePrice.length > 0 && (
          <label
            className={`cursor-pointer rounded-xl border border-sky-500 px-4 py-2 ${travellerType === "Private" && "bg-sky-500 text-white"}`}
          >
            <input
              type="radio"
              value="Private"
              {...register("travellerType")}
              className="hidden"
            />{" "}
            Private
          </label>
        )}
        <label
          className={`cursor-pointer rounded-xl border border-sky-500 px-4 py-2 ${travellerType === "Joiners" && "bg-sky-500 text-white"}`}
        >
          <input
            type="radio"
            value="Joiners"
            {...register("travellerType")}
            className="hidden"
          />{" "}
          Joiners
        </label>
        {errors.travellerType && (
          <span className="text-sm text-rose-500">Select type</span>
        )}
      </div>
      <div>
        <label className="flex items-center justify-between text-slate-500">
          Participants
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setValue("count", Math.max(0, count - 1))}
              className="rounded-full bg-sky-500 p-2 text-white"
            >
              <BiMinus />
            </button>
            <input
              type="number"
              {...register("count")}
              readOnly
              className="flex w-7 justify-center text-center dark:bg-sky-500/10 dark:text-slate-300"
            />
            <button
              type="button"
              onClick={() => setValue("count", count + 1)}
              className="rounded-full bg-sky-500 p-2 text-white"
            >
              <BiPlus />
            </button>
          </div>
        </label>
        {errors.count?.message && (
          <span className="text-sm text-rose-500">{errors.count.message}</span>
        )}
      </div>
      <label className="text-slate-500">
        Notes
        <textarea
          placeholder="e.g. type of food and drinks"
          rows={3}
          className="border-third h-20 w-full rounded-md border p-2 dark:bg-sky-400/10"
          {...register("notes")}
        />
        {errors.notes && (
          <span className="text-sm text-rose-500">{errors.notes.message}</span>
        )}
      </label>
      {count ? (
        <div className="bg-third/50 text-secondary flex items-center justify-between p-4 text-2xl font-semibold">
          {tourPrice > 0 && (
            <>
              <span>TOTAL</span> <p>{formatPeso(tourPrice * count)}</p>
            </>
          )}
        </div>
      ) : (
        ""
      )}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full rounded-full bg-sky-500 p-4 font-bold uppercase tracking-widest text-white dark:bg-sky-800"
      >
        BOOK THIS TRIP
      </button>
    </form>
  );
};

export default FormWithZOD;
