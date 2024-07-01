import React from "react";

const page = () => {
  return (
    <div>
      {" "}
      <div className="mx-auto h-screen max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            About Us
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            libero purus, interdum nec rutrum eget, congue id dolor.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-900">
                  Our Mission
                </h2>
                <p className="mt-2 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-900">
                  Our Vision
                </h2>
                <p className="mt-2 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-900">
                  Our Values
                </h2>
                <p className="mt-2 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
