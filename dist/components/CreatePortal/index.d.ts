import React from 'react';
type ICreatePortal = {
    children: any;
};
/**
 * Creates a SSR + next.js friendly React Portal inside <body />
 *
 * Child components are rendered on the client side only

 * @see https://reactjs.org/docs/portals.html
 */
declare class CreatePortal extends React.Component<ICreatePortal> {
    portalContainer: HTMLDivElement;
    body: HTMLElement;
    componentDidMount(): void;
    componentWillUnmount(): void;
    preventWheel: (e: WheelEvent) => void;
    render(): React.JSX.Element | null;
}
export default CreatePortal;