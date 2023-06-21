const GIF = (props) => {

    const item = props.item;
    //const thumbURL= item.images?.downsized.url;
    // console.log("images: " + item.images);
    return (
        <div className="gif-item">
            <img src={item.images.fixed_height_small.url} onClick={() => props.openLB(item.images.downsized.url)} />
        </div>
    )
}

export default GIF;