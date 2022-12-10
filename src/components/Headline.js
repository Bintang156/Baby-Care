import React from "react";
import bAY from "../img/bAY.png";

function Headline() {
  return (
    <>
        <div className="Headline_kiri">
          <h1 className="Headline_">Apa itu Baby Care?</h1>
          <p>
          BabyCare merupakan aplikasi yang bertujuan memberikan pelayanan edukasi kepada para orang tua untuk lebih meningkatkan kepedulian mereka terhadap kesehatan bayinya. BabyCare menawarkan serangkaian benefit kepada para penggunanya yang meliputi fitur Artikel, fitur Reminder, serta BabyCheck. Fitur Artikel kaya akan informasi update terbaru seputar Kesehatan bayi yang mampu membekali para orang tua untuk lebih preventif dan memastikan buah hatinya tumbuh dengan sehat dan baik. Fitur reminder memberikan pengingat khusus untuk orang tua terkait jadwal imunisasi, pemberian vitamin, dan lain sebagainya. Dan yang paling penting adalah fitur BabyCheck yang berguna untuk mendeteksi gejala-gejala awal yang kurang normal terhadap bayi agar dapat dilakukan tindakan penanganan yang tepat lebih dini.
          </p>
        </div>
        <div className="Headline_kanan">
          <img src={bAY} alt="logo-apps" />
        </div>
    </>
  );
}

export default Headline;
