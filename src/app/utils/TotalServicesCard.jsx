export default function TotalServicesCard({ category, title, highlight }) {
    return (
      <div className="flex flex-col items-center ">
        <div className="size-56 rounded-xl hover:border hover:border-blue-400 shadow-sm bg-[#f5f5f5]" />
        <div className="mt-3 text-gray-500 text-sm">{category}</div>
        <div className="text-base font-medium">{title}</div>
      </div>
    );
  }
  