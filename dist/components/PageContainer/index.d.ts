import React from 'react';
type IPageContainerProps = {
    /** All child components of Lightbox */
    children: React.ReactNode[];
    /** Classes are applied to the root lightbox component */
    className: string;
    /** Flag that dictates if the lightbox is open or closed */
    isOpen: boolean;
    /** React-Spring useTransition config for page open/close animation */
    pageTransitionConfig: any;
    /** Inline styles are applied to the root lightbox component */
    style: React.CSSProperties;
};
/**
 * Animates the lightbox as it opens/closes
 */
declare const PageContainer: ({ children, className, isOpen, pageTransitionConfig, style, }: IPageContainerProps) => React.JSX.Element;
export default PageContainer;
