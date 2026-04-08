const commonStyle = "rounded-md w-full text-center h-[46px] mb-[10px] font-medium";
const variantStyles = {
    primary: "bg-blue text-white cursor-pointer",
    secondary: "bg-purple text-primary cursor-pointer",
    disabled: "bg-light-gray text-white cursor-not-allowed",
};

export function Button({ name, type, category, disabled, className = "" }) {
    const variantStyle = disabled ? variantStyles.disabled : variantStyles[category] ?? variantStyles.secondary;

    return (
        <button
            disabled={disabled}
            type={type}
            className={`${variantStyle} ${commonStyle} ${className}`}
        >
            {name}
        </button>
    );
}
