export interface PopupProps {
    show: boolean;
    onHide: () => void;
    onProceed: React.MouseEventHandler<HTMLButtonElement>;
}
