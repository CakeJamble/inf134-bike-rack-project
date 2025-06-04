import { Sheet, SheetRef } from 'react-modal-sheet'
import { useState, useRef } from 'react'

const snapPoints = [0.6, 0.25];

const BottomSheet = () => {
    const [isOpen, setOpen] = useState(false);
    const ref = useRef<SheetRef>(null);
    const snapTo = (i: number) => ref.current?.snapTo(i);

    return (
        <>
        <Sheet
            isOpen={true} 
            onClose={() => setOpen(true)}
            initialSnap={1}
            snapPoints={snapPoints}>
            <Sheet.Container>
            <Sheet.Header />
            <Sheet.Content>{/* Your sheet content goes here */}</Sheet.Content>
            </Sheet.Container>
            <Sheet.Backdrop />
        </Sheet>
        </>
    ); 
};

export default BottomSheet;
