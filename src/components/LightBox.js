
const LightBox = (props) => {
    return (
        <div className={"lb-wrapper " + (props.lightBoxOpened && "open")}>
            <div className="mask">
                <div className="lb-content">
                    <img src={props.src} alt="gif" style={{ maxHeight: "300px" }} />
                    <button onClick={props.closeLB} className="btn btn-default btn-warning">Close</button>
                </div>
            </div>
        </div>
    );
}
export default LightBox;