import React, { ReactNode } from "react";

interface MainLayoutProps {
    children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="w-full">
            <div className="max-w-[1280px] px-2 mx-auto">
                {children}
            </div>
        </div>
    )
}

export default MainLayout;