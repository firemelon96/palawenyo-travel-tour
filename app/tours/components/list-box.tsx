import { BiCheckCircle, BiHelpCircle, BiXCircle } from "react-icons/bi";

interface ListBoxType {
  type: "Inclusion" | "Exclusion" | "Reminder" | "What to bring";
  items: string[];
}

const ListBox = ({ type, items }: ListBoxType) => {
  const exclude = type === "Exclusion" && "text-rose-500 fill-exclusion";
  const include = type === "Inclusion" && "text-inclusion fill-inclusion";

  const Icon = type === "Inclusion" ? BiCheckCircle : BiXCircle;

  return (
    <div className="bg-sky-50 dark:bg-sky-500/10 flex flex-col gap-2 p-4">
      <h5 className={`text-slate-400 text-2xl ${include} ${exclude}`}>
        {type}
      </h5>
      <ul>
        {items.map((item) => (
          <li key={item} className="flex items-center justify-start">
            <div className="">
              <Icon
                className={`${exclude} ${include} text-slate-500 mr-2 size-4`}
              />
            </div>
            <div className="flex-1">
              <p className="text-slate-500">{item}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListBox;
