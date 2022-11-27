import React from "react";

function AddButton({ id, onAdd }) {
  return (
    <button type="button" onClick={() => onAdd(id)}>
      Tambah Remainder
    </button>
  );
}

export default AddButton;
