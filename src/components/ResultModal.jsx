import { forwardRef,useImperativeHandle, useRef } from "react"
const ResultModal = forwardRef( function ResultModal({targetTime,remainingTime, onReset},ref){
    const dialog =  useRef()
    const userLost = remainingTime <= 0;
    const formatTime = (remainingTime /1000).toFixed(2)
    const result = Math.round((1- remainingTime/(targetTime*1000))*100)
    useImperativeHandle(ref,() => {
    return {
        open() {
        dialog.current.showModal();
        }
    };
    });
    return (
        <dialog ref = {dialog} className="result-modal" >
            {userLost && <h2> you lost!</h2>}
            {!userLost && <h2> YOUR SCORE: {result}</h2>}
            <p>your target time was <strong>{targetTime}</strong></p>
            <p>you stoped the timer with <strong>{formatTime} seconds left</strong></p>
            <form method="dialog" onClose={onReset}>
                <button>Close</button>
            </form>
        </dialog>
    )
});
export default ResultModal;