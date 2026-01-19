import { Plane } from 'lucide-react';

function Header({ onOpenAbout }) {
    return (
        <header className="flex items-center absolute top-0 w-full justify-between p-4 bg-transparent z-40">
            <div className="flex items-center gap-3">
                {/* <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>

                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </div>
                <h3 className=" text-white font-semibold">Open to Work</h3> */}
            </div>

            <div>
                <button
                    onClick={onOpenAbout}
                    className="group relative top-1 z-100 flex items-center justify-center gap-2 p-6 cursor-pointer bg-amber-400 hover:bg-amber-50 text-black rounded-full transition-all duration-500 font-semibold overflow-hidden min-w-35 h-10"
                >
                    <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 transform -translate-y-[150%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                        <Plane size={25} />
                    </div>
                    <span className="inline-block transition-all duration-300 transform group-hover:translate-y-[150%] group-hover:opacity-0">
                        More About Me
                    </span>
                </button>
            </div>
        </header>
    );
}

export default Header;