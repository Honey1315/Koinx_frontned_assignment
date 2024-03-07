const PerformanceSection = () => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Performance</h2>
            <div className="flex justify-between mb-4">
                <span className="text-gray-600">Today's Low</span>
                <span className="text-gray-600">Today's High</span>
            </div>
            <div className="flex justify-between mb-8">
                <span className="text-2xl font-bold">46,930.22</span>
                <div className="p-4 w-[100%] flex justify-between items-center mb-4">
                    <div className="flex-grow mx-4 w-[100%] bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 to-green-500 h-2 rounded"></div>
                </div>
                <span className="text-2xl font-bold">49,343.83</span>
            </div>

            <div className="flex justify-between mb-8">
                <span className="text-2xl font-bold">46,930.22</span>
                <div className="p-4 flex justify-between w-[100%] items-center mb-4">
                    <div className="flex-grow mx-4 w-[100%] bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 to-green-500 h-2 rounded"></div>
                </div>
                <span className="text-2xl font-bold">49,343.83</span>
            </div>
            <div className="text-sm text-gray-600 mb-6 flex flex-col">
                <h3 className="text-base font-bold mb-2">Fundamentals</h3>
                <div className="grid grid-cols-2 gap-4 text-black">
                    <div className="mr-auto w-11/12 font-bold">
                        <p className="mb-2 p-1.5 flex justify-between">
                            <span className="text-gray-600">Bitcoin Price:</span>
                            <span>$16,815.46</span>
                        </p>
                        <hr className="border-gray-400" />
                        <p className="mb-2 p-1.5 flex justify-between">
                            <span className="text-gray-600">24h Low / 24h High:</span>
                            <span>$16,382.07 / $16,874.12</span>
                        </p>
                        <hr className="border-gray-400" />
                        <p className="mb-2 p-1.5 flex justify-between">
                            <span className="text-gray-600">7d Low / 7d High:</span>
                            <span>$16,382.07 / $16,874.12</span>
                        </p>
                        <hr className="border-gray-400" />
                        <p className="mb-2 p-1.5 flex justify-between">
                            <span className="text-gray-600">Trading Volume:</span>
                            <span>$23,249,202,782</span>
                        </p>
                        <hr className="border-gray-400" />
                        <p className="mb-2 p-1.5 flex justify-between">
                            <span className="text-gray-600">Market Cap Rank:</span>
                            <span>#1</span>
                        </p>
                        <hr className="border-gray-400" />
                    </div>
                    <div className="ml-auto w-11/12 font-bold">
                        <p className="mb-2 p-1.5 flex justify-between ">
                            <span className="text-gray-600">Market Cap:</span>
                            <span>$323,507,290,047</span>
                        </p>
                        <hr className="border-gray-400" />
                        <p className="mb-2 p-1.5 flex justify-between">
                            <span className="text-gray-600">Market Cap Dominance:</span>
                            <span>38.343%</span>
                        </p>
                        <hr className="border-gray-400" />
                        <p className="mb-2 p-1.5 flex justify-between">
                            <span className="text-gray-600">Volume / Market Cap:</span>
                            <span>0.0718</span>
                        </p>
                        <hr className="border-gray-400" />
                        <p className="mb-2 p-1.5 flex justify-between">
                            <span className="text-gray-600">All-Time High:</span>
                            <div className="flex flex-col justify-center items-center">
                                <span>$69,044.77 +75.6%  </span>
                                <span className="text-gray-400 ml-1">(Nov 10, 2021 [about 1 year])</span>
                            </div>

                        </p>
                        <hr className="border-gray-400" />
                        <p className="mb-2 p-1.5 flex justify-between">
                            <span className="text-gray-600">All-Time Low:</span>
                            <div className="flex flex-col justify-center items-center">
                                <span>$67.81 -24729.1% </span>
                                <span className="text-gray-400 ml-1">(Jul 06, 2013 [over 9 years])</span>
                            </div>
                        </p>
                        <hr className="border-gray-400" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PerformanceSection;
