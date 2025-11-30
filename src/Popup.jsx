export default function Popup({ status, onClose }) {
    if (status === null) return null;

    return (
        <div
            id="cover"
            onClick={onClose}
        >
            <div
                className={status ? "popup-accepted" : "popup-rejected"}
                onClick={(e) => e.stopPropagation()}
            >
                {status ? (
                    <>
                        <h1>Request Accepted ✔️</h1>
                        <p>Congratulations! Your loan request has been successfully approved.</p>
                    </>
                ) : (
                    <>
                        <h1>Request Rejected ✖️</h1>
                        <p>Your loan request does not meet the required conditions.</p>
                    </>
                )}
            </div>
        </div>
    );
}
