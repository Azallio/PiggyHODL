import Piglet from "../assets/Piglet.svg"
import Ticket from "../assets/ticket-svgrepo.svg"
import MiniPeople from "../assets/MiniPeople.svg"

type Pretendent = {
    id: number
    username: string
    nullable?: true
    pigsAmount: number
    ticketsAmount: number
    referrals: number
}

export function setSingleDiv(item: Pretendent, userId: number) {
    return (
        <div key={userId} className="w-133.25 h-21 rounded-3xl py-3 px-5 flex flex-col gap-3 transition-colors duration-600 hover:bg-[#FFF2FE]">
            <div className="w-[493px] h-[24px] flex gap-[16px] items-center">
                <div className="w-[393px] h-[20px] flex gap-[4px] items-center">
                    <p className="w-[21px] h-[21px] flex font-semibold text-[16px] tracking-[0%] leading-[20px] text-[#4B4B4B]">
                        {`#${userId}`}
                    </p>
                    <p className="w-[368px] h-[20px] flex pl-0.5 items-center text-[#4B4B4B]">
                        @{item.username}
                    </p>
                </div>
                <div className="w-[84px] min-w-[84px] h-[24px] flex gap-[10px] items-center">
                    <p className="w-[49px] h-[20px] font-[Hanken_Grotesk] font-semibold text-[16px] tracking-[0%] leading-[20px] justify-end text-[#4B4B4B]">
                        {item.pigsAmount}
                    </p>
                    <img src={Piglet} alt="Пятачок" className="w-[24px] h-[24px] left-[21px]" />
                </div>
            </div>
            <div className="w-[493px] h-[24px] flex justify-between">
                <div className="w-[94px] h-[24px] flex gap-[8px] items-center">
                    <img src={Ticket} alt="Билет" />
                    <p className="w-[62px] h-[18px] font-[Hanken_Grotesk] font-semibold text-[14px] tracking-[0%] leading-[18px] justify-end text-[#4B4B4B]">
                        {item.ticketsAmount} tickets
                    </p>
                </div>
                <div className="w-[107px] h-[24px] flex gap-[8px] items-center">
                    <p className="w-[75px] h-[18px] font-[Hanken_Grotesk] font-semibold text-[14px] tracking-[0%] leading-[18px] justify-end text-[#4B4B4B]">
                        {item.referrals} referrals
                    </p>
                    <img src={MiniPeople} alt="Мини человечек" />
                </div>
            </div>
        </div>
    );
}