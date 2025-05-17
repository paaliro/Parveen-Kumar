const ImageTag = ({ src, alt, className, width, height }: { src: string, className?: string, alt: string, width?: string, height?: string }) => {
    return (
        <div className={`${className}`}>
            <img src={src} alt={alt} width={width} height={height} />
        </div>
    )
}

export default ImageTag;