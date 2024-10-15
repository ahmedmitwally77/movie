import React from "react";

function Details() {
  return (
    <div className=" bg-purple-900 text-white ">
      <div className="container mx-auto p-6 bg-purple-800 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-1">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="Haunted Wedding Poster"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="col-span-2">
            <div className="flex flex-col md:flex-row items-start md:items-center mb-2 space-y-2 md:space-y-0 md:space-x-2 justify-between ">
              <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500 rounded-lg">
                Watch Now
              </button>
              <button className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 rounded-lg">
                + Add to favorite
              </button>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold">Haunted Wedding</h1>

            <div className="content-text">
              <div className="mt-4">
                <span className="bg-gray-600 px-2 py-1 rounded text-sm">
                  IMDB: 6.6
                </span>
              </div>

              <p className="mt-4 text-gray-300">
                The wedding between ghost hunters Jane and Brian at a haunted
                inn is disrupted by Angelique - a ghost who mistakes Brian for
                her own dead fiancé.
              </p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-2">
                <div>
                  <p>
                    <strong>Released:</strong> 2024-10-12
                  </p>
                  <p>
                    <strong>Duration:</strong> 84 min
                  </p>
                  <p>
                    <strong>Country:</strong> Canada
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Genre:</strong> TV Movie, Romance
                  </p>
                  <p>
                    <strong>Casts:</strong> Janel Parrish, Dominic Sherwood,
                    Cassandra Potenza, Erik Athavale
                  </p>
                  <p>
                    <strong>Production:</strong> Shalom Amigo Productions, Just
                    To Be Clear Productions, Inferno Pictures
                  </p>
                </div>
              </div>

              <div className="flex space-x-4 mt-6">
                
                <button className="bg-green-500 px-4 py-2 rounded hover:bg-green-400">
                  Like
                </button>
                <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-400">
                  Dislike
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
