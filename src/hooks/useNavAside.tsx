import { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export type UseNavAside = (
    asideRef: React.RefObject<HTMLDivElement>,
    asideBgRef: React.RefObject<HTMLDivElement>,
    navRef: React.RefObject<HTMLDivElement>,
) => ReturnType<typeof useSelector>;

export const useNavAside: UseNavAside = (asideRef, asideBgRef, navRef) => {
    const { isNavOpen } = useSelector((state: RootState) => state.UserInterface);

    useLayoutEffect(() => {
        let timeout: ReturnType<typeof setTimeout> | null = null;
        if (asideRef.current && asideBgRef.current && navRef.current) {
            if (isNavOpen) {
                navRef.current.style.zIndex = `1`;
                asideBgRef.current.style.display = `block`;
                asideRef.current.style.transform = `translateX(0px)`;
            }
            if (!isNavOpen) {
                asideBgRef.current.style.display = `none`;
                asideRef.current.style.transform = `translateX(300px)`;
                timeout = setTimeout(() => navRef.current && (navRef.current.style.zIndex = `0`), 500);
            }
        }
        return () => {
            if (timeout != null) clearTimeout(timeout);
        };
    }, [isNavOpen, asideRef, asideBgRef, navRef]);

    return { isNavOpen };
};
