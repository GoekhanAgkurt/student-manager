import { useEffect } from "react";

export default function ToastMessage({ message, show, duration = 5000, onClose }) {
    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                onClose();
            }, duration);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [show, duration, onClose]);

    if (!show) return null;

    return (
        <div className="toastMessage">
            <p>{message}</p>
        </div>
    );
}
