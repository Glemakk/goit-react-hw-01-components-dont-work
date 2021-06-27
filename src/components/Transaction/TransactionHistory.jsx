// import PropTypes from "prop-types";
import s from "./Transaction.module.css";

const TransactionHistory = ({ items }) => (
  <table className={s.transactionTable}>
    <thead>
      <tr className={s.tr}>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map((item) => (
        <tr key={item.id}>
          <td>{item.type}</td>
          <td>{item.amount}</td>
          <td>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

// TransactionHistory.propTypes = {
//   type: PropTypes.string.isRequired,
// };

export default TransactionHistory;
