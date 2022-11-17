const inputBox = `bg-[#f8f8f8f8] rounded-2xl  `;
const input = `py-[20px] px-[10px] w-[100%] rounded-[10px] medium-font text-dark  focus:outline-primary focus:outline-[1px] transition-[shadow] duration-300 bg-[#f8f8f8f8] block  `;

const label = `medium-font text-dark pb-[10px] block bg-light`;

export default function ContactInfo({
  fullName = "Example",
  email = "example@gmail.com",
}) {
  return (
    <form className="md:w-[629px]">
      <div>
        <h3 className="text-[20px] text-secondary font-bold my-[25px]">
          Contact Information
        </h3>
        <div className="flex md:flex-row flex-col gap-4">
          <div className={`${inputBox}  w-full`}>
            <label htmlFor="fullName" className={label}>
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              className={input}
              readOnly
            />
          </div>
          <div className={`${inputBox} w-full`}>
            <label htmlFor="email" className={label}>
              Email
            </label>
            <input
              type="email"
              name="email"
              id="emil"
              className={input}
              readOnly
            />
          </div>
        </div>
      </div>
    </form>
  );
}
