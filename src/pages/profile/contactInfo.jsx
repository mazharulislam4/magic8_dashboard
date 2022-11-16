const inputBox = `bg-[#f8f8f8f8] rounded-2xl w-[50%] `;
const input = `py-[16px] px-[10px] w-[100%] rounded-[10px] medium-font text-dark  focus:outline-none focus:shadow-md transition-[shadow] duration-300 bg-[#f8f8f8f8] `;
const label = `medium-font text-dark pb-[10px] block bg-light`;

export default function ContactInfo({
  fullName = "Example",
  email = "example@gmail.com",
}) {
  return (
    <form className="md:w-[629px]">
      <div>
        <h3 className="large-font text-secondary font-bold my-[25px]">
          Contact Information
        </h3>
        <div className="flex gap-4">
          <div className={inputBox}>
            <label htmlFor="fullName" className={label}>
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              className={input}
            />
          </div>
          <div className={inputBox}>
            <label htmlFor="email" className={label}>
              Email
            </label>
            <input type="email" name="email" id="emil" className={input} />
          </div>
        </div>
      </div>
    </form>
  );
}
