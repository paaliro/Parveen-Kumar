const NavBar = ({ className }: { className?: string }) => {
    return (
        <section className={`${className} flex justify-between items-center gap-4 bg-[#141416] py-6 sm:py-8 mx-2 sm:mx-8 rounded-2xl mt-4 sm:mt-10 z-10000`}>
            <div className="mx-6 font-semibold">Parveen Kr</div>
            <div className="hidden sm:flex gap-2 cursor-pointer">
                <a href="#">Work</a>
                <a href="#">Skills</a>
                <a href="#">Experience</a>
                <a href="#">Testimonials</a>
            </div>
            <button className="px-6 py-1 sm:mr-6 rounded-lg font-semibold bg-[#D9ECFF] text-black cursor-pointer">Contact me</button>
        </section>
    )
}

export default NavBar;