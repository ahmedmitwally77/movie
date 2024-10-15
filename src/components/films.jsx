import React from "react";

function Films() {
  const movies = [
    {
      title: "The Bad Guys: Haunted Heist",
      year: 2024,
      duration: "25m",
      type: "Movie",
    },
    {
      title: "A Costa Rican Wedding",
      year: 2024,
      duration: "84m",
      type: "Movie",
    },
    {
      title: "Haunted House for Sale",
      year: "SS 1",
      duration: "EPS 14",
      type: "TV",
    },
    {
      title: "Haunted by Her Name",
      year: 2024,
      duration: "90m",
      type: "Movie",
    },
    {
      title: "Wedding Impossible",
      year: "SS 1",
      duration: "EPS 12",
      type: "TV",
    },
    { title: "Beautiful Wedding", year: 2024, duration: "100m", type: "Movie" },
    { title: "Wedding.com", year: "SS 1", duration: "EPS 5", type: "TV" },
    { title: "Wedding Games", year: 2023, duration: "80m", type: "Movie" },
  ];

  return (
    <div className="min-h-screen bg-purple-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">You may also like</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6  xl:grid-cols-8 gap-4">
        {movies.map((movie, index) => (
          <div key={index} className="bg-purple-800 p-2 rounded-lg shadow-lg">
            <div className="image relative ">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt={movie.title}
              className="w-full object-cover h-auto rounded-lg mb-2 "
            />
            <span className="bg-gray-600 px-2 py-1 rounded text-sm absolute top-0 right-0">HD</span>
            </div>
            <h3 className="text-lg font-bold w-30 overflow-hidden whitespace-nowrap text-ellipsis">{movie.title}</h3>
            <div className="flex items-center justify-between mt-2">
              <p className="text-sm">{movie.year}</p>
              <p className="text-sm">{movie.duration}</p>
              <p className="text-sm border p-1 rounded">{movie.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Films;
