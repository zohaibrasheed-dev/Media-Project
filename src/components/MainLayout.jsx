import { useSelector } from "react-redux";

const MaiLayout = () => {

  const receivedData = useSelector((state) => state.search.results);


  return (
    <div className="mainLayout px-14 py-5">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {receivedData.map((item) => (
          <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-lg bg-gray-100">
            <img
              src={item.urls.small} // 'full' ki jagah 'small' use karein taake loading fast ho
              alt={item.alt_description}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Optional: Hover karne par author ka naam dikhane ke liye */}
            <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white text-sm truncate">{item.user.name}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default MaiLayout