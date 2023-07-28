export const userColumns = [
  { field: "_id", headerName: "ID", width: 120 },
  {
    field: "user",
    headerName: "User",
    width: 150,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img_path[0] ==null ? "https://i.ibb.co/MBtjqXQ/no-avatar.gif" :params.row.img_path } alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "name",
    headerName: "Name",
    width: 220,
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
  },
  {
    field: "isAdmin",
    headerName: "Admin",
    width: 100,
  },
  
];

export const VehiculeColumns = [
  { field: "_id", headerName: "ID", width: 30 },
  {
    field: "name",
    headerName: "Name",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img_path[0]} alt="avatar" />
          {params.row.name}
        </div>
      );
    },
  },

  {
    field: "brand",
    headerName: "Brand",
    width: 70,
  },

  {
    field: "seats_nbr",
    headerName: "Seat Number",
    width: 100,
  },
  {
    field: "min_price",
    headerName: "Min Price (DH)",
    width: 120,
  },
  {
    field: "type",
    headerName: "Type",
    width: 60,
  },
  {
    field: "luxe",
    headerName: "Luxurious",
    width: 80,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 200,
  },
  
];
export const LocationColumns = [
  { field: "_id", headerName: "ID", width: 50 },
  {
    field: "name",
    headerName: "Name",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img_path[0]} alt="avatar" />
          {params.row.name}
        </div>
      );
    },
  },

  {
    field: "latitude",
    headerName: "Latitude",
    width: 90,
  },

  {
    field: "longtitude",
    headerName: "Longtitude",
    width: 90,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 400,
  },
  
];

export const PathColumns = [
  { field: "_id", headerName: "ID", width: 30 },
  {
    field: "name",
    headerName: "Name",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img_path[0]} alt="avatar" />
          {params.row.name}
        </div>
      );
    },
  },

  {
    field: "depname",
    headerName: "Deparature",
    width: 120,
  },

  {
    field: "arrname",
    headerName: "Arrival",
    width: 120,
  },
  {
    field: "distance",
    headerName: "Distance(KM)",
    width: 100,
  },
  {
    field: "min_price",
    headerName: "Min Price(DH)",
    width: 120,
  },
  {
    field: "rating",
    headerName: "Rating(/10)",
    width: 100,
  },
  {
    field: "featured",
    headerName: "Featured",
    width: 80,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 200,
  },
  
];

export const HotelColumns = [
  { field: "_id", headerName: "ID", width: 30 },
  {
    field: "name",
    headerName: "Name",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.photos[0]} alt="avatar" />
          {params.row.name}
        </div>
      );
    },
  },

  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "title",
    headerName: "Title",
    width: 90,
  },
  {
    field: "address",
    headerName: "Address",
    width: 100,
  },
  {
    field: "StarNumber",
    headerName: "Star Number",
    width: 100,
  },
  {
    field: "distance",
    headerName: "Distance(KM)",
    width: 100,
  },
  {
    field: "minPrice",
    headerName: "Min Price(DH)",
    width: 120,
  },
  {
    field: "rating",
    headerName: "Rating(/10)",
    width: 100,
  },
  {
    field: "featured",
    headerName: "Featured",
    width: 80,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 200,
  },
  
];

export const ReservationColumns = [
  { field: "UserID", headerName: "User ID", width: 30 },
  {
    field: "UserName",
    headerName: "User Name",
    width: 180,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src="https://i.ibb.co/MBtjqXQ/no-avatar.gif" />
          {params.row.UserName}
        </div>
      );
    },
  },
  { field: "ItemId", headerName: "Item ID", width: 30 },
  {
    field: "ItemTitle",
    headerName: "Item Title",
    width: 140,
  },
  {
    field: "Duration",
    headerName: "Duration (Night)",
    width: 150,
  },
  {
    field: "StartDate",
    headerName: "StartDate",
    width: 116,
  },
  {
    field: "EndDate",
    headerName: "EndDate",
    width: 116,
  },
  {
    field: "IsConfirmed",
    headerName: "IsConfirmed",
    width: 100,
  },
  {
    field: "Amount",
    headerName: "Amount(DH)",
    width: 120,
  },
  {
    field: "Additional",
    headerName: "Additional Info",
    width: 200,
  },

  
];
// //temporary data
// export const userRows = [
//   {
//     id: 1,
//     username: "Snow",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     status: "active",
//     email: "1snow@gmail.com",
//     age: 35,
//   },
//   {
//     id: 2,
//     username: "Jamie Lannister",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "2snow@gmail.com",
//     status: "passive",
//     age: 42,
//   },
//   {
//     id: 3,
//     username: "Lannister",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "3snow@gmail.com",
//     status: "pending",
//     age: 45,
//   },
//   {
//     id: 4,
//     username: "Stark",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "4snow@gmail.com",
//     status: "active",
//     age: 16,
//   },
//   {
//     id: 5,
//     username: "Targaryen",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "5snow@gmail.com",
//     status: "passive",
//     age: 22,
//   },
//   {
//     id: 6,
//     username: "Melisandre",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "6snow@gmail.com",
//     status: "active",
//     age: 15,
//   },
//   {
//     id: 7,
//     username: "Clifford",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "7snow@gmail.com",
//     status: "passive",
//     age: 44,
//   },
//   {
//     id: 8,
//     username: "Frances",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "8snow@gmail.com",
//     status: "active",
//     age: 36,
//   },
//   {
//     id: 9,
//     username: "Roxie",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "snow@gmail.com",
//     status: "pending",
//     age: 65,
//   },
//   {
//     id: 10,
//     username: "Roxie",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "snow@gmail.com",
//     status: "active",
//     age: 65,
//   },
// ];
