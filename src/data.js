const data = [
  { name: "cardTitle", label: "Card Title", type: "text" },
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    col: "1",
    row: "2"
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    row: "3",
    col: null
  },
  {
    name: "dob",
    label: "Date of Birth",
    type: "date",
    col: "2/4",
    row: null
  },
  {
    name: "sSN",
    label: "Social Security Number",
    type: "text",
    col: "2/4",
    row: null
  },
  {
    name: "doi",
    label: "Date of Issue",
    type: "date",
    row: "6",
    col: null
  },
  {
    name: "doe",
    label: "Date of Expiry",
    type: "date",
    row: "7",
    col: null
  },
  {
    name: "gender",
    label: "Gender",
    type: "radio",
    gender: ["Male", "Female", "InterSex"],
    row: "8",
    col: null
  },
  {
    name: "avatar",
    label: "Avatar",
    type: "file",
    col: "2",
    row: "1/6"
  },
  {
    name: "bgCardFront",
    label: "Background Image Front",
    type: "file",
    col: "1"
  },
  {
    name: "bgCardBack",
    label: "Background Image Back",
    type: "file",
    col: "2"
  }
];

export default data;
