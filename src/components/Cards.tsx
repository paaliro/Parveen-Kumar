const Cards = ({ className }: { className?: string }) => {
    return (
        <div className={`${className} w-100 ml-7 sm:ml-0 bg-zinc-900 rounded-2xl py-6`}>
            <div className="ml-7">
                <div className="flex gap-1 w-50% text-2xl font-bold">
                    <p>0</p>
                    <p>+</p>
                </div>
                <p>Years fo Experience</p>
            </div>
        </div>
    )
}

export default Cards;