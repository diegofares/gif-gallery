import GIF from "./GIF";

const GIFList = (props) => {

    return (
        <div className="container list">
            <div className="row">
                <div className="col d-flex">
                    {props.gifList.map(
                        (gif) => {
                            // console.log(gif);
                            return <GIF item={gif} openLB={props.openLB} />
                        }
                    )}
                </div>
            </div>
        </div>
    )

}
export default GIFList;