type RefSize = {
    height: number;
    width: number;
};
type IUseRefSize = [refSize: RefSize, elementRef: (node: any) => void | null];
/**
 * React Hook that returns the current ref size
 * and report updates from the 'resize' ref event
 *
 * @returns {RefSize} An object containing the ref width and height
 * @returns {elementRef} A callback ref to be used on the container being measured
 */
declare const useRefSize: () => IUseRefSize;
export default useRefSize;
