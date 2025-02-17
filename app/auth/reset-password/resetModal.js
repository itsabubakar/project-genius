import Backdrop from "../../modals/backdrop.js"
export default function ResetModal({modalClose, children}) {
    return (
        <Backdrop onClose={modalClose}>
            <div
            onClick={(e) => e.stopPropagation()}
                className="px-4 py-8 flex flex-col gap-2 mx-5 rounded-2xl
                    bg-greyscale_surface_subtle text-center
                    md:w-[658px] md:pt-10 md:px-20 md:pb-20 md:text-start"
            >
                <h2 className="text-2xl font-bold">Password Updated</h2>
                <p className="inter">Your password has been successfully updated. Log in to continue.</p>
                {children}
            </div>
        </Backdrop>
    )
}