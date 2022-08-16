import React, { useState } from "react";

const Dropdown = ({
  date,
  amount,
  balance,
  description,
  typeTransaction,
  categoryTransaction,
  noteTransaction,
}) => {
  const [editCategories, setEditCategories] = useState(false);
  const [editNotes, setEditNotes] = useState(false);

  function editCategoryTrue() {
    setEditCategories(true);
  }

  // function editCategoryFalse() {
  //   setEditCategories(false);
  // }
  function editNoteTrue() {
    setEditNotes(true);
  }

  return (
    <div className="dropdownList">
      <details>
        <summary>
          <div className="infosBank">
            <div className="titre">
              <div className="date">
                <p className="dateTitle">DATE</p>
                <p className="realDate">{date}</p>
              </div>
              <div className="description">
                <p className="descriptionTitle">DESCRIPTION</p>
                <p className="realDescription">{description}</p>
              </div>
            </div>
            <div className="money">
              <div className="amount">
                <p className="amountTitle">AMOUNT</p>
                <p className="realAmount">{amount}</p>
              </div>

              <div className="balance">
                <p className="balanceTitle">BALANCE</p>
                <p className="realBalance">{balance}</p>
              </div>
            </div>
            <div className="transactionBtn">
              <i className="fa-solid fa-angle-down"></i>
            </div>
          </div>
        </summary>
        <details>
          <summary>
            <div className="editCategory">
              {editCategories ? (
                <select name="tri" id="choixTri">
                  <option value="food" className="choix">
                    Food
                  </option>
                  <option value="children" className="choix">
                    Children
                  </option>
                  <option value="car" className="choix">
                    Car
                  </option>
                </select>
              ) : (
                <>
                  <p className="content">Type: {typeTransaction}</p>
                  <button className="editCategory" onClick={editCategoryTrue}>
                    <i className="fa-solid fa-pencil"></i>{" "}
                  </button>
                </>
              )}
            </div>
            <div className="editNote">
              {editNotes ? (
                <input></input>
              ) : (
                <>
                  <p className="content">Note: {noteTransaction}</p>
                  <button className="editNote" onClick={editNoteTrue}>
                    <i className="fa-solid fa-pencil"></i>{" "}
                  </button>
                </>
              )}
            </div>
          </summary>
        </details>
      </details>
    </div>
  );
};

export default Dropdown;
