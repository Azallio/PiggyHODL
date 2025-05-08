import "tailwindcss"
import "../css/page-components-css/footer.css"

function Footer() {
    return (
        <>
            <footer className="w-360 h-5 flex justify-between px-43.75 mr-[3%]  mb-4 text-[#A4A4A4] hankenGrotesk font-semibold uppercase">
                <p className="w-68 h-4.5 font-semibold text-[16px] leading-4.5 tracking-normal uppercase">©piggyHODL all rights reserved</p>
                <section className="flex w-73.75 gap-16 items-center">
                    <a href="https://telegram.org/tos/mini-apps" className="w-27.5 text-[16px] leading-5 tracking-normal">
                        Terms of use
                    </a>
                    <a href="https://telegram.org/tos/mini-apps" className="w-30.25 h-5 text-[16px] leading-5 tracking-normal">
                        Privacy policy
                    </a>
                </section>
            </footer>
        </>
    )
}

export default Footer;