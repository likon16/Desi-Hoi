export function HeadingBox() {
  return (
    <div className="heading-box text-center my-4 p-3 bg-white border border-red-200 rounded-md shadow-md mb-8">
      
      {/* Links Section */}
      <div className="flex justify-center gap-10 text-sm font-medium text-gray-700 text-lg">
        
        <a
          href="#"
          className="hover:text-black border-b border-transparent hover:border-black pb-0.5 transition"
        >
          @Local Store Online
        </a>


        <a
          href="#"
          className="hover:text-black border-b border-transparent hover:border-black pb-0.5 transition"
        >
            @Local Foods
        </a>
        <a
          href="#"
          className="hover:text-black border-b border-transparent hover:border-black pb-0.5 transition"
        >
          @Quick Delivery
        </a>
         <a
          href="#"
          className="hover:text-black border-b border-transparent hover:border-black pb-1 transition"
        >
          @10-Day Return Policy
        </a>
      </div>

    </div>
  );
}
