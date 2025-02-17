import Backdrop from "@/app/modals/backdrop";

export default function Modal({ heading, subHeading, modalClose, children}) {
    return (
        <Backdrop onClose={modalClose}>
            <div
            onClick={(e) => e.stopPropagation()}
                className="px-4 py-6  md:px-6 flex flex-col gap-2 mx-5 rounded-2xl
                    bg-greyscale_background_light text-center items-center
                    w-[350px] md:w-[400px] md:text-start"
            >
                <h2 className="text-center text-2xl font-bold">{heading}</h2>
                <p className="inter text-center text-greyscale_text">{subHeading}</p>
                {children}
            </div>
        </Backdrop>
    );
}
