const Tag = ({ className, icon, text }: { className?: string, icon: string, text: string }) => {
    return (
        <section className={`${className}`}>
            <div className="bg-[#141416] py-1.5 sm:py-2 px-5 mx-auto w-fit rounded-4xl flex gap-2">
                <p>{icon}</p>
                <p>{text}</p>
            </div>
        </section>
    )
}
export default Tag;