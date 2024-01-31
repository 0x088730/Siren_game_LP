import { useTranslation } from "react-i18next";

export default function LabelButton(props) {
    const { t, i18n } = useTranslation();
    return <div className="w-60">
        <label class="text-md font-bold text-white font-animeace text-left">{t(props.title)}</label>
        <div class="relative mt-1 rounded-md shadow-sm">
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <img src={props.img} alt="" className="w-6 inline me-1" />
            </div>
            {
                props.receiveAmount !== undefined ?
                    <input
                        type="text"
                        name={props.title}
                        className={`block w-full rounded-full border-0 py-1.5 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-lg sm:leading-6 font-bold ${props.color ? `${props.color}` : ''} font-animeac border-2 border-[#222222]`}
                        value={props.receiveAmount} />
                    :
                    <input
                        type="text"
                        name={props.title}
                        className={`block w-full rounded-full border-0 py-1.5 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-lg sm:leading-6 font-bold ${props.color ? `${props.color}` : ''} font-animeac border-2 border-[#222222]`}
                        onChange={(e) => props.onChange(e.target.value)} />

            }
        </div>
    </div>
}