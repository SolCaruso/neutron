const Tags = () => {
    return (
      <div className="mt-4 text-left">
        <a
          href="https://docs.google.com/presentation/d/1TVHsNUgyMOTeFSmFQfku8s2q5iALR8dCAIo73v2iFb4/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="link to process deck"
          className="flex items-center p-[0.3rem_0.5rem_0.3rem_1rem] transition-all duration-150 ease-in-out hover:bg-white hover:pr-6 relative bg-gray-200"
        >
        
          <span className="text-black font-semibold px-2">Process Deck</span>
          <img
            src="./images/svg/right.svg"
            alt="link arrow"
            className="w-3 mt-2 ml-auto transform scale-0 opacity-0 transition-all duration-200 ease-in-out absolute right-2 fill-black"
          />
        </a>
       
      </div>
    );
  };
  
  export default Tags;
  