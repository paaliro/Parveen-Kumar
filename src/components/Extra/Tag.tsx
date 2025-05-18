const Tag = ({ className, icon, text }: { className?: string, icon: string, text: string }) => {
    return (
        <section className={`${className}`}>
            <div className="bg-[#282732] py-3 px-5 my-10 mx-auto w-fit rounded-4xl flex gap-2">
                <p>{icon}</p>
                <p>{text}</p>
            </div>
        </section>
    )
}
export default Tag;