import Accordion from "../components/accordion";
import accordionData from "@/app/data/accordionData";

import Image from "next/image";

import mail from "../../../public/icons/black_email.svg";
import phone from "../../../public/icons/black_phone.svg";
export default function Help() {
  return (
    <section className=" px-3 py-6 flex flex-col gap-16">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-6 items-center md:items-start">
          <h2 className="text-[32px] md:text-[44px] font-bold">
            Find The Help You Need
          </h2>
          <br />
          <h5 className="text-[24px] md:text-[28px] font-medium">
            Frequently Asked Questions
          </h5>
        </div>

        {accordionData.map((data, index) => (
          <Accordion
            key={index}
            question={data.question}
            answer={data.answer}
          />
        ))}
      </div>

      <section className="w-full shadow-md flex flex-col p-4 gap-8 rounded-2xl">
        <h1 className="font-medium text-[24px]">
          Still Have Questions? We&rsquo;re Here To Help!
        </h1>

        <ul className="flex flex-col gap-1 p-4 bg-primary_subtle rounded-xl">
          <li className="inter ">Ufuoma Morgan (Chairman)</li>
          <li className="inter flex gap-2">
            <Image src={phone} />
                +234 906 555 3105 - Mohammad Salman
          </li>
          <li className="inter flex gap-2">
            <Image src={phone} />
            +234 807 546 1423 - Amina Ismail 
          </li>
          <li className="inter flex gap-2">
            <Image src={mail} />
            example@gmail.com
          </li>
        </ul>
      </section>
    </section>
  );
}
