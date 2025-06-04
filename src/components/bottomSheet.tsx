import { Sheet, SheetRef } from 'react-modal-sheet'
import { useState, useRef } from 'react'
import { Button } from '@headlessui/react';
import './bottomSheet.css'

const snapPoints = [0.65, 0.25];

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
            <Sheet.Content>{
                <>
                <div id="ratings">
                    <div className="ratingsDivider">
                        <h1>Saftey</h1>
                    </div>
                    <div className="ratingsDivider">
                        <h1>Availability</h1>
                    </div>
                    <div id="updatedText">
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="#979797" className="bi bi-info-circle-fill" viewBox="0 0 16 16">
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
                        </svg>  
                        <p>Last updated 05/05/2025, 19:54</p>                        
                    </div>
                </div>
                <hr></hr>
                <div id="update">
                    <h2>Need an update?</h2>
                    <Button className="rounded bg-gray-100 px-2 py-2 text-sm text-black data-active:bg-gray-200 data-hover:bg-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-exclamation-triangle" viewBox="0 0 16 16">
                            <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.15.15 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.2.2 0 0 1-.054.06.1.1 0 0 1-.066.017H1.146a.1.1 0 0 1-.066-.017.2.2 0 0 1-.054-.06.18.18 0 0 1 .002-.183L7.884 2.073a.15.15 0 0 1 .054-.057m1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767z"/>
                            <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
                        </svg>
                        &#160;Report
                    </Button>
                </div>
                <hr></hr>
                <div id="report">
                    <h2>What should I report?</h2>
                    <p>
                        We rely on our users to keep our database up-to-date. This includes reporting when an existing bike rack is no longer available, if a new bike rack is not listed on our map, and updating safety and availability ratings.
                    </p>
                    <div className='buttons'>
                        <Button className="rounded bg-gray-100 px-2 py-2 text-sm text-black data-active:bg-gray-200 data-hover:bg-gray-200">
                            No Longer Exists
                        </Button>
                        <Button className="rounded bg-gray-100 px-2 py-2 text-sm text-black data-active:bg-gray-200 data-hover:bg-gray-200">
                            Bike Rack Here
                        </Button>
                    </div>
                    <div className='buttons'>
                        <Button className="rounded bg-gray-100 px-2 py-2 text-sm text-black data-active:bg-gray-200 data-hover:bg-gray-200">
                            Rate Bike Rack
                        </Button>
                    </div>
                </div>
                </>
                }</Sheet.Content>
            </Sheet.Container>
        </Sheet>
        </>
    ); 
};

export default BottomSheet;
