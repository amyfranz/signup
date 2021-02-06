const registerCompany = async event => {
  event.preventDefault()
  console.log("send data");

  const res = await fetch(
    '/api/register',
    {
      body: JSON.stringify({
        name: event.target.name.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    }
  )
};

export default function Home() {
  return (
    <div>
      <div className="p-10" style={{ backgroundColor: "#A9D4B7" }}>
        <div className="md:grid md:gap-6">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={registerCompany}>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <h1 className="mt-6 text-3xl font-extrabold" style={{ color: "#326D57" }}>Sustainable Me</h1>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="company_name" className="block text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <input type="text" name="company_name" id="company_name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-l-md rounded-r-md sm:text-sm border-gray-300" placeholder="Sustainable Me" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="company_email" className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input type="text" name="company_email" id="company_email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-l-md rounded-r-md sm:text-sm border-gray-300" placeholder="hello@sustainableme.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="company_website" className="block text-sm font-medium text-gray-700">
                        Website
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          http://
                        </span>
                        <input type="text" name="company_website" id="company_website" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="www.example.com" />
                      </div>
                    </div>
                  </div>

                  <legend className="text-base font-medium text-gray-900">What Categories does your company fall into?</legend>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="automotive" name="automotive" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="automotive" className="font-medium text-gray-700">Automotive</label>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="apparel" name="apparel" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="apparel" className="font-medium text-gray-700">Apparel</label>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="babyProducts" name="babyProducts" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="babyProducts" className="font-medium text-gray-700">Baby Products (Excluding Apparel)</label>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="alcohol" name="alcohol" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="alcohol" className="font-medium text-gray-700">Beer, Wine & Spirits</label>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="beauty" name="beauty" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="beauty" className="font-medium text-gray-700">Beauty</label>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="mbvd" name="mbvd" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="mbvd" className="font-medium text-gray-700">Music, Books, Video/DVD/ Blu-ray</label>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="computing" name="computing" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="computing" className="font-medium text-gray-700">Computing</label>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="C&VG" name="C&VG" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="C&VG" className="font-medium text-gray-700">Consoles & Video Games</label>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="electronics" name="electronics" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="electronics" className="font-medium text-gray-700">Consumer Electronics</label>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="DIY" name="DIY" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="DIY" className="font-medium text-gray-700">DIY & Tools</label>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="garden" name="garden" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="garden" className="font-medium text-gray-700">Garden & Outdoors</label>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="grocery" name="grocery" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="grocery" className="font-medium text-gray-700">Grocery</label>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="health" name="health" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="health" className="font-medium text-gray-700">Health & Personal Care</label>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="kitchen" name="kitchen" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="kitchen" className="font-medium text-gray-700">Kitchen & Home</label>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="lAppliances" name="lAppliances" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="lAppliances" className="font-medium text-gray-700">Large Appliances</label>
                      </div>
                    </div><div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="lighting" name="lighting" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="lighting" className="font-medium text-gray-700">Lighting</label>
                      </div>
                    </div><div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="jewellery" name="jewellery" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="jewellery" className="font-medium text-gray-700">Jewellery</label>
                      </div>
                    </div><div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="music" name="music" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="music" className="font-medium text-gray-700">Musical Instruments</label>
                      </div>
                    </div><div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="office" name="office" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="office" className="font-medium text-gray-700">Office Products</label>
                      </div>
                    </div><div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="personalCare" name="personalCare" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="personalCare" className="font-medium text-gray-700">Personal Care Appliances</label>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="pet" name="pet" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="pet" className="font-medium text-gray-700">Pet Supplies</label>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="shoes" name="shoes" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="shoes" className="font-medium text-gray-700">Shoes & Accessories</label>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="software" name="software" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="software" className="font-medium text-gray-700">Software & PC Games</label>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="sports" name="sports" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="sports" className="font-medium text-gray-700">Sporting Goods</label>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="toys" name="toys" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="toys" className="font-medium text-gray-700">Toys & Games</label>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="watches" name="watches" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="watches" className="font-medium text-gray-700">Watches</label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                      About Your Company
                    </label>
                    <div className="mt-1">
                      <textarea id="about" name="about" rows="3" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Tell us about your company"></textarea>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="sustainable" className="block text-sm font-medium text-gray-700">
                      Why is Your Company Sustainable?
                    </label>
                    <div className="mt-1">
                      <textarea id="sustainable" name="sustainable" rows="3" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="What is your company doing that makes it sustainable"></textarea>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Logo
                    </label>
                    <div className="mt-2 flex items-center">
                      <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                        <svg className="h-full w-full text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" fill="currentColor">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <button type="button" className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-green">
                        Change
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Cover photo
                    </label>
                    <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-dark-green-600 hover:text-dark-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-dark-green">
                            <span>Upload Product and Company Pictures</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-dark-green hover:bg-dark-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-green">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
