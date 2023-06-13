
const LightBox = (props) => {
    return (
        <div className={"lb-wrapper " + (props.lightBoxOpened && "open")}>
            <div className="mask">
                <div className="lb-content">
                    <img src={props.src} />
                </div>
            </div>
        </div>
    );
}
export default LightBox;