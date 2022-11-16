 const countryList = [
   { value: "United states", id: 1 },
   { value: "Canada", id: 2 },
   { value: "United kingdom", id: 3 },
   { value: "Australia", id: 4 },
   { value: "Everywhere else", id: 5 },
 ];


const filterUsingData = {
  revenue: [
    { value: "0-5,000", id: "1" },
    { value: "5,000-10,000", id: "2" },
    { value: "10,000-50,000", id: "3" },
    { value: "50,000-100,000", id: "4" },
    { value: "100,000-150,000", id: "5" },
    { value: "150,000-500,000", id: "6" },
    { value: "1,000,000+", id: "7" },
  ],

  average: [
    { value: "$0-10k", id: "5" },
    { value: "$10-50k", id: "6" },
    { value: "$50-100k", id: "7" },
    { value: "$100-500k", id: "8" },
    { value: "$500-1m", id: "9" },
    { value: "$1m+ ", id: "10" },
  ],

  country: countryList,
};

export default filterUsingData;