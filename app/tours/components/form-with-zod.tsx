"use client";

import z, { date } from "zod";
import { Controller, FieldValues, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import { BiMinus, BiPlus } from "react-icons/bi";

import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import { addDays, addMonths, format } from "date-fns";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { formatPeso } from "@/app/lib/helpers";

// Define the Zod schema
const schema = z.object({
  date: z.date(),
  travellerType: z.enum(["Private", "Joiners"]),
  notes: z.string().min(1, "Notes are required"),
  count: z.number().min(1, "Minimum of 1 person"),
});

interface FormWithZODProps {
  duration: string;
  price?: number;
  name: string;
}

const FormWithZOD = ({ name, duration, price }: FormWithZODProps) => {
  const durationNum = Number(duration.split(" ")[0]) - 1;
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isLoading },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      date: null,
      count: 0,
      travellerType: null,
      notes: "",
    },
  });

  const onSubmit = (data: FieldValues) => {
    // console.log(data);
    const { date, count, travellerType, notes } = data;

    router.push(
      `https://m.me/107338648650143?text=Booking%20from%20WebApp%0ATour%20name:%20${name}%0ADate:%20${format(new Date(date), "MMMM dd")}%0AParticipants:%20${count}x%0ATraveller%20Type:%20${travellerType}%0ANotes:%20${notes}%0ATotal%20Price:%20${totalPrice}`,
    );
  };

  const count = watch("count");
  const travellerType = watch("travellerType");
  // const dateRange = watch("dateRange");

  // const [startDate, setStartDate] = useState<Date | null>(null);
  // const [endDate, setEndDate] = useState<Date | null>(null);
  const [tourPrice] = useState(price);

  const totalPrice = tourPrice
    ? formatPeso(tourPrice * count)
    : "To be discussed";

  // useEffect(() => {
  //   if (startDate) {
  //     const newEndDate = addDays(new Date(startDate), durationNum) || null;
  //     // newEndDate.setDate(newEndDate.getDate() + 3);
  //     setEndDate(newEndDate);
  //     // @ts-ignore
  //     setValue("dateRange.endDate", newEndDate);
  //   } else {
  //     setEndDate(null);
  //     setValue("dateRange.endDate", null);
  //   }
  // }, [startDate, setValue]);

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
            className="border-gray-300 mt-1 block w-full rounded-md border border-third p-2 text-xl shadow-sm"
          />
        )}
      />
      <div className="flex items-center gap-2">
        <label
          className={`border-sky-500 cursor-pointer rounded-xl border px-4 py-2 ${travellerType === "Private" && "bg-sky-500 text-white"}`}
        >
          <input
            type="radio"
            value="Private"
            {...register("travellerType")}
            className="hidden"
          />{" "}
          Private
        </label>
        <label
          className={`border-sky-500 cursor-pointer rounded-xl border px-4 py-2 ${travellerType === "Joiners" && "bg-sky-500 text-white"}`}
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
          <span className="text-rose-500 text-sm">Select type</span>
        )}
      </div>
      <div>
        <label className="text-slate-500 flex items-center justify-between">
          Participants
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setValue("count", Math.max(0, count - 1))}
              className="bg-sky-500 text-white rounded-full p-2"
            >
              <BiMinus />
            </button>
            <input
              type="number"
              {...register("count")}
              readOnly
              className="flex w-7 justify-center text-center"
            />
            <button
              type="button"
              onClick={() => setValue("count", count + 1)}
              className="text-white bg-sky-500 rounded-full p-2"
            >
              <BiPlus />
            </button>
          </div>
        </label>
        {errors.count?.message && (
          <span className="text-rose-500 text-sm">{errors.count.message}</span>
        )}
      </div>
      <label className="text-slate-500">
        Notes
        <textarea
          placeholder="e.g. type of food and drinks"
          rows={3}
          className="h-20 w-full rounded-md border border-third p-2"
          {...register("notes")}
        />
        {errors.notes && (
          <span className="text-rose-500 text-sm">{errors.notes.message}</span>
        )}
      </label>
      {count ? (
        <div className="flex items-center justify-between bg-third/50 p-4 text-2xl font-semibold text-secondary">
          {tourPrice ? (
            <>
              <span>TOTAL</span> <p>{formatPeso(tourPrice * count)}</p>
            </>
          ) : (
            <ul className="list-inside list-disc text-sm">
              <li className="">
                Customized and private tour rate is available upon request
              </li>
              <li className="">Rates may changes without prior notice.</li>
              <li className="">Booking is sent directly to messenger.</li>
            </ul>
          )}
        </div>
      ) : (
        ""
      )}
      <button
        type="submit"
        disabled={isLoading}
        className="text-white bg-sky-500 dark:bg-sky-800 w-full rounded-full p-4 font-bold uppercase tracking-widest"
      >
        BOOK THIS TRIP
      </button>
    </form>
  );
};

export default FormWithZOD;
