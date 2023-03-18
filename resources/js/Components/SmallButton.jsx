export default function SmallButton({
    className = "",
    disabled,
    children,
    processing,
    variant,
    onClick,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `px-3 py-2 overflow-hidden font-semibold sm:font-bold text-xs sm:text-sm cursor-pointer rounded-md btn-${variant} ${
                    disabled && "opacity-25"
                } ` + className
            }
            disabled={processing}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
