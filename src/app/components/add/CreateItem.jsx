export default function CreateItem() {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-4 md:p-6 bg-gray-50 min-h-screen">
      {/* Left Section */}
      <div className="bg-white rounded-lg shadow border border-gray-200 w-full md:w-2/3">
        <div className="bg-gray-400 text-lg md:text-2xl text-white px-4 py-4 rounded-t-md font-semibold">
          Personal
        </div>
        <div className="p-4 md:p-6">
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Зарын Нэр
                </label>
                <input
                  className="w-full border rounded px-3 py-2"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Үнэ</label>
                <input
                  className="w-full border rounded px-3 py-2"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Тайлбар
                </label>
                <input
                  className="w-full border rounded px-3 py-2"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Байршил Оруулах
                </label>
                <input
                  className="w-full border rounded px-3 py-2"
                  type="text"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">Хаяг</label>
              <input className="w-full border rounded px-3 py-2" type="text" />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">
                VIP Зар Болгох
              </label>
              <input className="w-full border rounded px-3 py-2" type="text" />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Онцгой Зар Болгох
              </label>
              <input className="w-full border rounded px-3 py-2" type="text" />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Postcode / Zip*
              </label>
              <input className="w-full border rounded px-3 py-2" type="text" />
            </div>

            <button
              type="submit"
              className="w-full md:w-auto mt-4 bg-black text-white font-semibold px-6 py-2 rounded-full hover:bg-gray-800 transition"
            >
              Proceed to Next Step
            </button>
          </form>
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-gray-100 border border-gray-300 rounded-lg w-full md:w-1/3 h-48 md:h-[240px]">
        <div className="bg-gray-400 rounded-t-md h-10" />
        {/* Add content here if needed */}
      </div>
    </div>
  );
}
