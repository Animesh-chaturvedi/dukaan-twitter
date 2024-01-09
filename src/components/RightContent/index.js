import React, { useState } from "react";
import styles from "./style.module.scss";
import { ReactComponent as Help } from "../../icons/Help.svg";
// import { CiSearch } from "react-icons/ci";
import { ReactComponent as Search } from "../../icons/search.svg";
import { ReactComponent as Menu } from "../../icons/Menu.svg";
import { ReactComponent as Message } from "../../icons/Message.svg";
import { BiSortAlt2 } from "react-icons/bi";
import { FiDownload } from "react-icons/fi";
import { VscTriangleDown } from "react-icons/vsc";
import { ReactComponent as Info } from "../../icons/Info.svg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const data = [
  {
    orderId: "#281909",
    orderDate: "7 July, 2023",
    orderAmount: "₹8723.23",
    transactionFees: "₹22",
  },
  {
    orderId: "#281909",
    orderDate: "7 July, 2023",
    orderAmount: "₹8723.23",
    transactionFees: "₹22",
  },
  {
    orderId: "#281909",
    orderDate: "7 July, 2023",
    orderAmount: "₹8723.23",
    transactionFees: "₹22",
  },
  {
    orderId: "#281909",
    orderDate: "7 July, 2023",
    orderAmount: "₹8723.23",
    transactionFees: "₹22",
  },
  {
    orderId: "#281909",
    orderDate: "7 July, 2023",
    orderAmount: "₹8723.23",
    transactionFees: "₹22",
  },
  {
    orderId: "#281909",
    orderDate: "7 July, 2023",
    orderAmount: "₹8723.23",
    transactionFees: "₹22",
  },
  {
    orderId: "#281909",
    orderDate: "7 July, 2023",
    orderAmount: "₹8723.23",
    transactionFees: "₹22",
  },
  {
    orderId: "#281909",
    orderDate: "7 July, 2023",
    orderAmount: "₹8723.23",
    transactionFees: "₹22",
  },
  {
    orderId: "#281909",
    orderDate: "7 July, 2023",
    orderAmount: "₹8723.23",
    transactionFees: "₹22",
  },
];

const RightContent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedData, setSortedData] = useState(data);
  const [currentPage, setCurrentPage] = useState(10);
  const totalPages = Math.ceil(18);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (column) => {
    // ... sort logic here
  };

  return (
    <div className={styles.RightCont}>
      <header className={styles.headerCont}>
        <div className={styles.headerFirstCont}>
          <div>Payments</div>
          <div className={styles.supportText}>
            <Help /> How it works
          </div>
        </div>
        <div className={styles.headSecondCont}>
          <Search />
          <input
            type="text"
            placeholder="Search features, tutorials, etc."
            className={styles.input}
          />
        </div>
        <div className={styles.headThirdCont}>
          <Message />
          <Menu />
        </div>
      </header>
      <div className={styles.bodyCont}>
        <div className={styles.innerBodyCont}>
          <div className={styles.OverViewCont}>
            <div className={styles.OverviewText}>Overview</div>
            <div className={styles.dropdown}>
              <select className={styles.dropdownSelect}>
                <option value="last-month">Last Month</option>
                <option value="last-3-month">Last 3 Month</option>
                {/* Add more options here */}
              </select>
            </div>
          </div>
          <div className={styles.cardCont}>
            <div className={styles.cardCover}>
              <div className={styles.cardText}>Online orders</div>
              <div className={styles.cardNumber}>231</div>
            </div>
            <div className={styles.cardCover}>
              <div className={styles.cardText}>Amount recieved</div>
              <div className={styles.cardNumber}> &#8377;23,92,312.19</div>
            </div>
          </div>
          <div className={styles.TractionDiv}>Traction | This Month</div>
          <div className={styles.searchAndTable}>
            <div className={styles.SearchTableCont}>
              <div className={styles.searchBar}>
                <Search />
                <input
                  type="text"
                  placeholder="Search by order ID..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className={styles.input}
                />
              </div>
              <div className={styles.SortAndDown}>
                <div className={styles.SortCont}>
                  Sort <BiSortAlt2 />{" "}
                </div>
                <div className={styles.downloadIcon}>
                  <FiDownload />
                </div>
              </div>
            </div>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th onClick={() => handleSort("orderId")}>Order ID</th>
                  <th onClick={() => handleSort("orderDate")}>
                    Order Date <VscTriangleDown />{" "}
                  </th>
                  <th onClick={() => handleSort("orderAmount")}>
                    Order Amount
                  </th>
                  <th onClick={() => handleSort("transactionFees")}>
                    Transaction Fees <Info />
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.orderId}</td>
                    <td>{item.orderDate}</td>
                    <td>{item.orderAmount}</td>
                    <td>{item.transactionFees}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={styles.pagination}>
            <button
            className={styles.buttonPress}
            >
             <IoIosArrowBack/> Previous
            </button>
            {/* Generate page numbers here */}
            {Array.from({ length: totalPages }, (_, index) => (
              index === 0 ? <button>{index + 1}</button> : 
              index ===1 ? <button> ...</button> : index < currentPage - 1 ? null : <button className={`${index === currentPage -1 ? styles.selected:null}`} > {index + 1}</button>  
            ))}
            <button className={styles.buttonPress} > Next<IoIosArrowForward/></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightContent;
