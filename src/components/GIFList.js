import GIF from "./GIF";

const GIFList = (props) => {
    return (
        <div className="container list">
            <div className="row">
                <div className="col d-flex result-wrapper">
                    {props.gifList.map(
                        (gif) => {
                            return (
                                <div key={gif.id} className="gif-container">
                                    <GIF item={gif} openLB={props.openLB} style={{ maxHeight: "300px" }}/>
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
        </div>
    )

}
export default GIFList;