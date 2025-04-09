export default function TotalServicesCard({ category, title, highlight }) {
    return (
      <div className="flex flex-col items-center ">
        <div className="size-20 lg:size-56 rounded-xl hover:border hover:border-blue-400 shadow-sm bg-[#f5f5f5]" />
        <div className="mt-2 lg:mt-3 text-gray-500 text-[12px] lg:text-sm">{category}</div>
        <div className="text-center font-medium lg:text-2xl text-md">{title}</div>
      </div>
    );
  }
  