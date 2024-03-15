import { useEffect, useRef, useState } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { ClickButton } from "../clickButton"


export default function Claim({ setShowClaimWindowFlag }) {
    const [boxOpenState, setBoxOpenState] = useState(false)
    const [itemArray, setItemArray] = useState([])
    const itemBarRef = useRef()
    const [gifState, setGifState] = useState(true)
    const [selectedItemFlag, setSelectedItemFlag] = useState(false)
    const [text, setText] = useState("")
    const [starState, setStarState] = useState(false)
    useEffect(() => {
        const randomArray = [];
        for (let i = 0; i < 50; i++) {
            let type = Math.floor(Math.random() * 3);
            const level = Math.floor(Math.random() * 3) + 1;
            switch (type) {
                case 0:
                    type = "chimera"
                    break
                case 1:
                    type = "infernal"
                    break
                case 2:
                    type = "gem"
            }
            randomArray.push({ type, level });
        }
        setItemArray(randomArray)
        setTimeout(() => {
            setBoxOpenState(true)
            setGifState(false)
        }, 4500)
        setTimeout(() => {

            itemBarRef?.current.classList.remove('-translate-x-[200%]')

        }, 5000)
        setTimeout(() => {

            setStarState(true)

        }, 5500)
        setTimeout(() => {
            setSelectedItemFlag(true)
            setStarState(false)
        }, 9500)
    }, [])

    const onClickItem = () => {
        let selectedItem = itemArray[12]
        const text = (selectedItem.type === "gem" ? "Damage" : selectedItem.type === "infernal" ? "Critical" : "HP") + " +" + selectedItem.level * 50
        setText(text)
        setTimeout(() => {
            document.body.style.overflowY = "auto";
            setShowClaimWindowFlag(false)
        }, 1500)
    }
    return (
        <div className="z-30 w-full h-screen background-position-center">
            <div className="flex items-center justify-center w-full h-screen ">
                <img effect="black-and-white" draggable="false" src={`assets/images/gem_bg.${gifState ? 'gif' : 'webp'}`} alt="abs" className="absolute object-cover w-full h-full " />

                <div id="claim-box" className="absolute w-1/4 h-fit ">
                    <img effect="black-and-white" draggable="false" src={`assets/images/item/${boxOpenState === true ? "box-open.webp" : "box-closed.webp"}`} alt="abs" className=" animation animate-bounce-twice" />
                </div>

            </div>
            <div className="absolute top-0 flex items-center w-full h-screen overflow-hidden ">
                {selectedItemFlag && <div className="w-1/6 mx-auto flex flex-col items-center gap-y-4">
                    <p className="absolute -translate-y-[200%] text:2xl md:text-5xl text-white font-animeace">{text}</p>
                    <img effect="black-and-white" draggable="false" src={`assets/images/item/item-${itemArray[12].type}-${itemArray[12].level}.webp`} className="w-full px-0.5" onClick={onClickItem} />
                    <ClickButton title="Okay" className="relative top-0 w-52 h-16 text-white" onClick={onClickItem} />
                </div>}

                <div className="flex -translate-x-[200%] duration-[4000ms]" ref={itemBarRef}>
                    {!selectedItemFlag &&
                        itemArray.map((item, no) =>
                            <img effect="black-and-white" draggable="false" key={no} src={`assets/images/item/item-${item.type}-${item.level}.webp`} className="w-[4%] px-0.5" />
                        )
                    }
                </div>
                {starState && <div className="absolute z-20 w-full h-full">
                    <img effect="black-and-white" draggable="false" src="https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/other/star-5vCwQWZotCQYIlARgdWS8Blt5uYCyC.webp" alt="" className="mx-auto h-full object-cover" />
                </div>}
            </div>
        </div>
    )
}