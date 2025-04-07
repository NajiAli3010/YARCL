import { cn } from "@/lib/utils"

function Separator({
    className,
    orientation = "horizontal",
    ...props
}) {
    return (
        <div
            data-slot="separator-root"
            orientation={orientation}
            className={cn(
                "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
                className
            )}
            {...props} />
    );
}

export { Separator }